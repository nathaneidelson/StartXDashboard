/* Written by Nathan Eidelson, 2/14/13
 */

//In the event that a user clicks a link, open a new tab with the linked address.
function click(e) {
    chrome.tabs.create({url: e.target.alt});
}

var dashboardGenerator =
{
    //This function generates a clickable icon, given the title of the image and the url to link to.
    addLink: function(tag, url)
    {
        var img = document.createElement('img');
        img.src = chrome.extension.getURL(tag + ".png");
        img.alt = url;
        img.addEventListener('click', click);
        document.body.appendChild(img);
    }
};

//Run the link generation script as soon as the document's DOM is ready.
document.addEventListener("DOMContentLoaded", function ()
{
    dashboardGenerator.addLink("Gmail", "https://mail.google.com")
    dashboardGenerator.addLink("Drive", "https://drive.google.com");
    dashboardGenerator.addLink("Calendar", "https://calendar.google.com");
    dashboardGenerator.addLink("StartX", "http://startx.stanford.edu/");
    dashboardGenerator.addLink("Feedback","https://docs.google.com/a/sse.stanford.edu/spreadsheet/viewform?formkey=dHpkTHFONGlfSnRJWk5LVkd4dXVVS1E6MQ#gid=0");

});
