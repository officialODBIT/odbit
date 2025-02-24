document.addEventListener("DOMContentLoaded", function () {
    // Create and style the body
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.margin = "20px";

    // Create the heading
    const heading = document.createElement("h1");
    heading.textContent = "Username Search";
    document.body.appendChild(heading);

    // Create the search bar
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.id = "searchBar";
    searchBar.placeholder = "Search for usernames...";
    searchBar.style.marginBottom = "20px";
    searchBar.style.padding = "10px";
    searchBar.style.width = "100%";
    searchBar.style.boxSizing = "border-box";
    document.body.appendChild(searchBar);

    // Create the username list
    const usernameList = document.createElement("ul");
    usernameList.id = "usernameList";
    usernameList.style.listStyleType = "none";
    usernameList.style.padding = "0";
    document.body.appendChild(usernameList);

    // Usernames array
    const usernames = [
        "hnj_mvg", "Aridov", "crsh51", "KianaC3013", "bauerHUESOS", "Adamahm201", 
        "Docdubk6", "kallistarosegc", "gatinhol173917", "sonsmyboyMOM", "aga_rrrin", 
        "anqeliitve", "robloxboy213450", "ITS_TIA250", "Tuckelsa10", "colourrelar", 
        "WealthyInfluncers", "frodik6", "BigShotMatthew", "KING_DEMON626", "Bbcgoal", 
        "lita_hoshi", "Purple_Dragon321", "thatonlyjj", "alicep81u7", "pingfrog06", 
        "PinkPanther02016", "rayraytheboss777", "25Alice1", "roachspraybeach", 
        "mirellaq04", "Angelbona_0", "thedogiscute_910", "Xxendgamer_xX", 
        "Aailyah2008", "cammeryo"
    ];

    // Populate the list with usernames
    usernames.forEach(username => {
        const li = document.createElement("li");
        li.textContent = username;
        li.style.padding = "8px";
        li.style.border = "1px solid #ccc";
        li.style.marginBottom = "5px";
        li.style.borderRadius = "5px";
        usernameList.appendChild(li);
    });

    // Search filter function
    function filterUsernames() {
        const filter = searchBar.value.toLowerCase();
        const listItems = usernameList.getElementsByTagName("li");

        for (let i = 0; i < listItems.length; i++) {
            const username = listItems[i].textContent || listItems[i].innerText;
            listItems[i].style.display = username.toLowerCase().includes(filter) ? "" : "none";
        }
    }

    // Attach event listener to the search bar
    searchBar.addEventListener("keyup", filterUsernames);
});
