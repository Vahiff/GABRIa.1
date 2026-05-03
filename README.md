# Fleet Prestige Android Ready

Fleet Prestige Android Ready is a premium mobile-first diagnostic dashboard prepared for Android packaging with Capacitor and GitHub Actions. The app currently runs as a React/Vite frontend with an offline demo mode and optional backend health integration.

## Project Status

Status: MVP foundation

The repository is structured as a product codebase, not just a file dump. Current focus:

- stable web MVP
- Android debug build pipeline
- safe read-only diagnostic UX
- future backend/API integration
- store-ready documentation and release process

## Core Features

- React + Vite application shell
- Premium Audi diagnostics command center UI
- Offline demo mode for quick testing
- Optional backend health check through `FP_API`
- Capacitor-ready Android packaging scripts
- Clear separation between frontend, Android build, and future backend work

## Tech Stack

- React 18
- Vite 6
- TypeScript toolchain
- Capacitor 6
- Android Gradle build through Capacitor
- Lucide icons

## Local Development

```powershell
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```powershell
npm run build
```

## Android Debug Build

```powershell
npm run android:build
```

The Android build requires Android Studio, Java JDK, and the Android SDK.

## Backend URL

Default backend URL is `http://127.0.0.1:3003`.

To point the app to another backend during testing:

```js
localStorage.setItem('FP_API', 'http://YOUR_PC_IP:3003')
```

## Release Standards

Before publishing:

- replace demo-only data with production data flow
- add privacy policy and store listing assets
- test on real Android phone and tablet
- verify offline and backend-connected states
- prepare signed release build
- review security and data handling

## Repository Standards

This repository uses:

- `CONTRIBUTING.md` for workflow rules
- `SECURITY.md` for vulnerability reporting
- GitHub Actions CI for build verification
- issue and pull request templates for professional collaboration

## License

All rights reserved unless a separate license is added by the owner.
