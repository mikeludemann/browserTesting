module.exports = {
    'Correct page title is available': function (test) {
        test
            .open('http://google.com')
            .assert.title().is('Google', 'Title available')
            .done();
    }
};