var page = require('webpage').create();
page.open('http://www.google.com', function () {
    setTimeout(function () {
        page.render('google.png');
        console.log("Finish - True");
        phantom.exit();
    }, 200);
});