import { defineConfig } from 'alita';

export default defineConfig({
  appType: "h5",
  mobileLayout: true,
  packageId: 'com.alitajs.micro',
  displayIcon: 'src/assets/logo.png',
  displayName: 'micro',
  base: './',
  publicPath: './',
  outputPath: 'platforms/ios/www',
})