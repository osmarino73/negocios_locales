$videosDir = "c:\Users\Rio Belen\negocios_locales\.agents\document_salones\belleza-rizos"
$deskDir   = "c:\Users\Rio Belen\negocios_locales\es_pa_rizos_monteria\public\frames\desktop"
$mobDir    = "c:\Users\Rio Belen\negocios_locales\es_pa_rizos_monteria\public\frames\mobile"

$deskVideo = (Get-ChildItem -Path "$videosDir\*.mp4" | Where-Object { $_.Name -like "*115813*" }).FullName
$mobVideo  = (Get-ChildItem -Path "$videosDir\*.mp4" | Where-Object { $_.Name -like "*115926*" }).FullName

Write-Host "Desktop video:" $deskVideo
Write-Host "Mobile video:" $mobVideo

& ffmpeg -y -i "$deskVideo" -vf "fps=18.5,scale=1920:1080" -c:v libwebp -quality 85 -compression_level 6 "$deskDir\frame-%04d.webp"
& ffmpeg -y -i "$mobVideo" -vf "fps=18.5,scale=720:1280" -c:v libwebp -quality 76 -compression_level 6 "$mobDir\frame-%04d.webp"

Copy-Item "$deskDir\frame-0001.webp" "$deskDir\poster.webp" -Force
Copy-Item "$mobDir\frame-0001.webp" "$mobDir\poster.webp" -Force

Write-Host "✅ Frame extraction completed successfully!"
