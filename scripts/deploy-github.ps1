$ErrorActionPreference = 'Stop'

$gitPath = 'C:\Users\ASUS\AppData\Local\Programs\MinGit-2.54.0\cmd'
$ghPath = 'C:\Program Files\GitHub CLI'
$env:Path = "$gitPath;$ghPath;" + $env:Path
$env:GCM_INTERACTIVE = 'allow'

Set-Location $PSScriptRoot

Write-Host 'Checking GitHub authentication...'
gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host 'GitHub login required. Complete browser auth, then run this script again.'
  gh auth login --hostname github.com --git-protocol https --web
  exit 1
}

if (-not (git remote get-url origin 2>$null)) {
  git remote add origin https://github.com/KunalSingh4804/portfolio.git
}

Write-Host 'Ensuring GitHub repository exists...'
gh repo view KunalSingh4804/portfolio 2>$null
if ($LASTEXITCODE -ne 0) {
  gh repo create portfolio --public --source=. --remote=origin --description 'Kunal Singh portfolio website'
}

Write-Host 'Pushing source to main...'
git push -u origin main

Write-Host 'Enabling GitHub Pages via Actions...'
gh api repos/KunalSingh4804/portfolio/pages -X POST -f build_type=workflow 2>$null
if ($LASTEXITCODE -ne 0) {
  gh api repos/KunalSingh4804/portfolio/pages -X PUT -f build_type=workflow | Out-Null
}

Write-Host 'Deployment workflow triggered on push. Check status with: gh run list --workflow deploy.yml'
Write-Host 'Live site: https://kunalsingh4804.github.io/portfolio/'
