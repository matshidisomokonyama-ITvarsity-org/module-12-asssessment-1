

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";// location of the server
let apiKey = checkApiKey();

function checkApiKey() {// checks if the user has a valid API key, if they don't they'll be sent to another page
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}