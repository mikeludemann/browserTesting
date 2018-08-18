var page = require("webpage").create();
page.open("http://google.com")
    .then(function (status) {
        if (status == "success") {
            console.log("Success completed");
            console.log("The title of the page is: " + page.title);
        }
        else {
            console.log("Failed");
            console.log("The page you wanted to load does not exist or is temporarily unavailable");
        }
        page.close();
        phantom.exit();
    })