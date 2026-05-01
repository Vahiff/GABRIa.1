import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fleetprestige.app',
  appName: 'Fleet Prestige',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: { allowMixedContent: true }
};

export default config;
