# Fleet Prestige Android Ready

Premium mobile-first Fleet Prestige shell for Android APK build via GitHub Actions.

## Local Windows PowerShell
```powershell
cd C:\FleetPrestigeWorkspace\fleet-prestige-android-ready
npm install
npm run dev
```

## Online APK build
1. Create an empty GitHub repository.
2. Upload all files from this folder.
3. Open Actions → Build Android APK → Run workflow.
4. Download artifact `fleet-prestige-debug-apk`.

## Backend URL
Default: `http://127.0.0.1:3003`.
In browser console you may set:
```js
localStorage.setItem('FP_API','http://YOUR_PC_IP:3003')
```
