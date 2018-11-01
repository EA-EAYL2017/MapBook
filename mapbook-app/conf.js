exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['src/app/**/*.spec.ts'],
    useAllAngular2AppRoots: true,
    capabilites:{
        browserName: "chrome",
        chromeOptions: {
            args: ["--headless", "--no-sandbox", "--disable-gpu", "--window-size=800x600"],
        }
    }
  };