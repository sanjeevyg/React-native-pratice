export default  class ConfigStore {
    constructor() {
        this.splashTime = 1000;
        this.splashImg = require('../../images/splash.jpg');
    }
    get SplashImage() {
        return this.splashImg;
    }
    get SplashTime() {
        return this.splashTime;
    }
}