

// var assert = require('assert');

describe('webdriver.io page', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://192.168.1.95:8080');
        var button = browser.click('#feed');
        var pet = browser.isExisting('#pet');
        expect(pet).toEqual(true);
        // assert.true(pet);
    });
});
