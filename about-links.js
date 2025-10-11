var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){

    event.preventDefault();
    // Removes all active-links
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    // Adds active-link to clicked link
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}