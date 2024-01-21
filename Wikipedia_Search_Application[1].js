let searchInputEle = document.getElementById("searchInput");
let searchResultEle = document.getElementById("searchResults");

let spinnerEle = document.getElementById('spinner');

function createAndappendSearchResult(result) { // 4th Code
    // creating result Item or div container
    let resultItemEle = document.createElement("div");
    resultItemEle.classList.add("result-item");
    searchResultEle.appendChild(resultItemEle);
    // creating Title heading 
    let {
        title,
        link,
        description
    } = result;
    let resultTitleEle = document.createElement("a");
    resultTitleEle.href = link;
    resultTitleEle.target = "_blank";
    resultTitleEle.textContent = title;
    resultTitleEle.classList.add("result-title");
    resultItemEle.appendChild(resultTitleEle);
    //  creating Break Element
    let titleBreakEle = document.createElement("br");
    resultItemEle.appendChild(titleBreakEle);

    // creating Url Element or Anchor Element
    let urlEle = document.createElement("a");
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    urlEle.classList.add("result-url");
    resultItemEle.appendChild(urlEle);

    // line Break Ele 
    let lineBreakEle = document.createElement("br");
    resultItemEle.appendChild(lineBreakEle);

    let descriptionEle = document.createElement("p");
    descriptionEle.classList.add("link-description");
    descriptionEle.textContent = description;
    resultItemEle.appendChild(descriptionEle);
}

function displaySearchResult(searchResult) { // third code
    spinnerEle.classList.toggle("d-none");
    for (let result of searchResult) {
        createAndappendSearchResult(result); // call back function 
    }

}

function searchWikipedia(event) { // second Code
    if (event.key === "Enter") {
        spinnerEle.classList.toggle("d-none"); // loading the searchResult 
        searchResultEle.textContent = ""; // user type new setup results formed remove old setup
        let searchInputValue = searchInputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData; // object destructuring console get the searchElement
                displaySearchResult(search_results); // call back function
            });

    }
}
// First code
searchInputEle.addEventListener("keydown", searchWikipedia);