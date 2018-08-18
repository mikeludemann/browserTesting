var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function (title) {
        console.log('Page Title: ' + title);
    })
    .end()
    .catch(function (err) {
        console.log(err);
    });