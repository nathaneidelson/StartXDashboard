// Written by Nathan Eidelson, 2/14/13


//In the event that a user clicks a link, open a new tab using the linked address.
function click(e) {
    chrome.tabs.create({url: e.target.href});
}

var dashboardGenerator = {
    addLink: function(tag, url) {
        document.write("<br>");
        var a = document.createElement('a');
        a.addEventListener('click', click);
        var linkText = document.createTextNode(tag);
        a.appendChild(linkText);
        a.title = tag;
        a.href = url;
        document.body.appendChild(a);
        document.write("<br>");
    }
    
    
    
/*
    addButton: function() {
        var newButton = document.createElement('gmail');
      //  var linkText = document.createTextNode("Gmail");
        newButton.appendChild(linkText);
        a.title = "Gmail";
        a.href = "https://mail.google.com";
        document.body.appendChild(a);
    } */
    
};


// Run our generation script as soon as the document's DOM is ready.
document.addEventListener("DOMContentLoaded", function () {
    dashboardGenerator.addLink("Gmail", "https://mail.google.com");
    dashboardGenerator.addLink("Google Docs", "https://drive.google.com");
    dashboardGenerator.addLink("Google Calendar", "https://calendar.google.com");
    dashboardGenerator.addLink("StartX", "http://startx.stanford.edu/");
    dashboardGenerator.addLink("StartX Feedback", "https://docs.google.com/a/sse.stanford.edu/spreadsheet/viewform?formkey=dHpkTHFONGlfSnRJWk5LVkd4dXVVS1E6MQ#gid=0");

});
