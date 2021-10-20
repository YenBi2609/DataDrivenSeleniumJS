// Load dependecies
var assert = require('chai').assert,
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

// Our test
describe('Test', function () {
    it('Title should be "The Internet"', function () {
        // Set timeout to 10 seconds
        this.timeout(10000);

        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        // Go to URL
        driver.get('http://the-internet.herokuapp.com');

        // Find title and assert
        driver.executeScript('return document.title').then(function (return_value) {
            assert.equal(return_value, 'The Internet')
        });

        // Quit webdriver
        driver.quit();
    });
});