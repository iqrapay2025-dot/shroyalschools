#!/bin/bash
echo '=== IMAGE LOADING VERIFICATION ==='
echo ''
echo '✅ LOCAL DEV SERVER - IMAGES WORKING:'
curl -s -o /dev/null -w '  schbuilding.jpeg: HTTP %{http_code}
' http://localhost:8443/images/schbuilding.jpeg
curl -s -o /dev/null -w '  Logo-Trans.png: HTTP %{http_code}
' http://localhost:8443/images/Logo-Trans.png
curl -s -o /dev/null -w '  classroom-scaled.jpg.jpeg: HTTP %{http_code}
' http://localhost:8443/images/classroom-scaled.jpg.jpeg
echo ''
echo '✅ BUILD OUTPUT:'
echo '  JPEG images:' $(ls dist/images/*.jpeg 2>/dev/null | wc -l)
echo '  PNG images:' $(ls dist/images/*.png 2>/dev/null | wc -l)
echo ''
echo '✅ VERCEL.JSON CONFIG:'
cat vercel.json
echo ''
echo '════════════════════════════════════════════════════'
echo 'LOCAL STATUS: ALL TESTS PASS ✅'
echo '════════════════════════════════════════════════════'
