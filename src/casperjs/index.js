var casper = require('casper').create();
casper.start('http://google.com');

casper.then(function () {
    this.echo('Page Title: ' + this.getTitle());
});

casper.thenOpen('https://wikipedia.de', function () {
    this.echo('Open a new website');
    this.echo('Page Title: ' + this.getTitle());
});

casper.run();