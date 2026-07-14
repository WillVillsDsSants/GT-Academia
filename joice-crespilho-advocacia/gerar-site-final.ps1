# Gera a versao final (build de producao) do site, pronta para publicar.
# O resultado fica na pasta "out" apos o build.

$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$node = Join-Path $root "tools\node"
$env:PATH = "$node;$env:PATH"

Set-Location $root

if (-not (Test-Path (Join-Path $root "node_modules"))) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

Write-Host "Gerando o site (build de producao)..." -ForegroundColor Green
npm run build

Write-Host ""
Write-Host "Pronto! Build gerado com sucesso." -ForegroundColor Green
