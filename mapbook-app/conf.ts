import { ProtractorBrowser, Config } from 'protractor';
export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/**/*.spec.js']
}