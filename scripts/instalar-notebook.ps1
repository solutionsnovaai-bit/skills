# Clona ou atualiza este repositório em %USERPROFILE%\skills e copia as skills para %USERPROFILE%\.claude\skills (Claude Code).
$ErrorActionPreference = "Stop"
$repo = Join-Path $HOME "skills"
$dest = Join-Path $HOME ".claude\skills"
if (Test-Path (Join-Path $repo ".git")) { git -C $repo pull --ff-only }
else { git clone https://github.com/solutionsnovaai-bit/skills $repo }
New-Item -ItemType Directory -Force -Path $dest | Out-Null
robocopy (Join-Path $repo ".claude\skills") $dest /E /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -ge 8) { throw "robocopy falhou ($LASTEXITCODE)" }
Write-Host "Skills instaladas em $dest"
Get-ChildItem $dest -Directory | Select-Object -ExpandProperty Name

# Playwright CLI (a skill playwright-cli precisa da ferramenta instalada)
$ErrorActionPreference = "Continue"
if (Get-Command npm -ErrorAction SilentlyContinue) {
  npm install -g @playwright/cli@latest
  if (Get-Command playwright-cli -ErrorAction SilentlyContinue) { Write-Host "Playwright CLI pronto: $(playwright-cli --version)" }
} else {
  Write-Host "Node.js nao encontrado. Rode: winget install --id OpenJS.NodeJS.LTS -e   depois feche e abra o PowerShell e rode esta linha de novo."
}
