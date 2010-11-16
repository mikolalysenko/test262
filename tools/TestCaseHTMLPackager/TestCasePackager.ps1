param($suiteVersion)

$CURRPATH = split-path -parent $MyInvocation.MyCommand.Definition

$rootDir = "$CURRPATH\..\..\test\suite"
$webRootPath = "$CURRPATH\..\..\website\resources\scripts\testcases"
$webRootPathOnServer = "resources/scripts/testcases/"
$excludeListFilename = "$CURRPATH\..\..\test\config\excludelist.xml"
$testHarnessDir = "$CURRPATH\..\..\test\harness"
$testHarnessFiles = dir $testHarnessDir\*.js
if (! $?) {
    echo "Error detecting test harness files!"
    exit 1
}
$testHarnessWebsiteDir = "$CURRPATH\..\..\website\resources\scripts\global"

#--Sanity checks--------------------------------------------------------------#
if (! (test-path $rootDir)) {
    echo "Cannot generate (XML) test262 tests when the path containing said tests, $rootDir, does not exist!"
    exit 1
}

if (! (test-path $webRootPath)) {
    echo "Cannot generate (XML) test262 tests to '$webRootPath' when it does not exist!"
    exit 1
}

if (! (test-path $excludeListFilename)) {
    echo "Cannot generate (XML) test262 tests without a file, $excludeListFilename, showing which tests have been disabled!"
    exit 1
}


if ($suiteVersion -eq $null) {
    echo "A test262 suite version must be specified to run this script!"
    exit 1
}

if ($testHarnessFiles.Length -lt 3) {
    echo "There are less than five test harness files under $testHarnessDir. Something must be wrong!"
    exit 1
}

#--Globals--------------------------------------------------------------------#

#Directories under "test\suite\" containing ES5 test chapter directories
#with *.js tests underneath them
$contributionDirs = @("sputnik_converted", "ietestcenter")

#a list of all ES5 test chapter directories
$chapters = @()
foreach($tempDirName in $contributionDirs) {
    if (! (test-path $rootDir\$tempDirName)) {
        echo "The expected ES5 test directory, $rootDir\$tempDirName, did not exist!"
        exit 1
    }
    $chapters += get-childitem $rootDir\$tempDirName | where-object{$_.mode -match "d"}
}


$template='
 <testCollection>
  <!-- adding section element if in the future we want to store information about the -->
  <!-- spec structure in this file, for now the section structure is defined in the   -->
  <!-- sections.js file                                                               -->
  </testCollection>'
$templateMasterList='
  <testSuite numTests="" version="" date="">
  </testSuite>'
  
$masterList=[xml]$templateMasterList
$numTests=0
$utf8Encoding = New-Object System.Text.UTF8Encoding
[xml]$excludeList= get-content $excludeListFilename


#--HELPERS---------------------------------------------------------------------
function isTestStarted($line) {
    #Note this is a naive approach on the sense that "/*abc*/" could be on one
    #line.  However, we know for a fact this is not the case in IE Test Center
    #or Sputnik tests.
    if ($global:multilineComment -and ($line -match "\*/")) {  #End of a newline comment
        $global:multilineComment = $false;  
        return $false;      
    } elseif ($line -match "/\*") {       #Beginning of a newline comment
        $global:multilineComment = $true;
        return $false;
    } elseif ($global:multilineComment) { #//we're already in a multi-line comment that hasn't ended
        return $false;
    } elseif ($line -match "^\s*//") {    #//blah
        return $false; 
    } elseif ($line -match "^\s*$") {     #newlines
        return $false;
    } elseif ($line -match "ES5Harness") { #definitely start of the test!
        return $true;
    }
    return $true;  #fell through...better  to assume the test has started!
}
#--MAIN------------------------------------------------------------------------


foreach($chapter in $chapters)
{
    echo "Generating test cases for ES5 chapter: $chapter"
    $testsList = [xml] $template
    $sectionEl = $testsList.CreateElement("section")
    $sectionAttr=$testsList.CreateAttribute("name")
    $null=$sectionEl.Attributes.Append($sectionAttr)
    $numTestAttr=$testsList.CreateAttribute("numTests") 
    $null=$sectionEl.Attributes.Append($numTestAttr)
    
    $testEl= $testsList.CreateElement("test")
    $testAttr=$testsList.CreateAttribute("id")
    $null=$testEl.Attributes.Append($testAttr)
    $newSection=$sectionEl.clone()
    $newSection.GetAttributeNode("name").innerText="Chapter - "+$Chapter.Name
    $sourceFiles = get-childitem $chapter.FullName -include *.js -recurse | where-object{$_.mode -notmatch "d"}
    if($sourceFiles -ne $NULL)
    {
        $excluded=0
        foreach($test in $sourceFiles){
        $testName=$test.Name.Remove($test.Name.Length-3)
         if(($testName.length -gt 0) -and ($excludeList.excludeList.SelectNodes("test[@id ='"+$testName+"']").Count -eq 0))
         {
            $newTestEl=$testEl.clone()
            $null=$newTestEl.GetAttributeNode("id").innerText=$testName

            $scriptCode=Get-Content -Encoding UTF8 $test.FullName

            $scriptCodeContent=""
            #Rip out license headers that add unnecessary bytes to the XML'ized test cases
            $inBeginning = $true
            $global:multilineComment = $false
            foreach($line in $scriptCode) {
                if ($inBeginning) {
                    $isStarted = isTestStarted($line)
                    if (! $isStarted) {
                        continue;
                    }
                    $inBeginning = $false
                }
                $scriptCodeContent+=$line+"`r`n"
            }
            
            $scriptCodeContent=[Convert]::ToBase64String($utf8Encoding.GetBytes($scriptCodeContent))
            $cdata=$testsList.CreateCDataSection($scriptCodeContent)
            $null=$newTestEl.AppendChild($cdata)
            $null=$newSection.AppendChild($newTestel)
          }
           else
            {
             $excluded++
           }

         }
        $newSection.numTests=($sourceFiles.Length-$excluded ).ToString()
        $null=$testsList.testCollection.AppendChild($newSection)
        
        $testGroupPathname=$webRootPath+"\"+$chapter.Name+".xml"
        $null=$testsList.Save($testGroupPathname)
        $testGroupEl=$masterList.CreateElement("testGroup")
        $testGroupEl.innerText=$webRootPathOnServer + $chapter.Name+".xml"
        $null=$masterList["testSuite"].AppendChild($testGroupEl)
        
        $numTests+= $sourceFiles.Length-$excluded
    }
}
$null=$masterList["testSuite"].GetAttributeNode("numTests").innerText=$numTests
$null=$masterList["testSuite"].GetAttributeNode("version").innerText=$suiteVersion
$null=$masterList["testSuite"].GetAttributeNode("date").innerText=[datetime]::Now.Date.toString("MM/dd/yyyy") 
$null=$masterList.Save($webRootPath+"\testcaseslist.xml")

#Deploy test harness to website as well
echo ""
echo "Deploying test harness files to '$testHarnessWebsiteDir'..."
foreach ($fileName in $testHarnessFiles) {
    $shortName = $fileName.Name
    cp -force $fileName $testHarnessWebsiteDir\
    if (! $?) {
        echo "Failed to copy $fileName!"
    }
    elseif (! (test-path $testHarnessWebsiteDir\$shortName)) {
        echo "Failed to copy $fileName!"
    }
}
echo "Done."

