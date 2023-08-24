document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "R5p1L86pbkNts2RS8ZpAT//1er4eQ014uiABmD6fzeho2Gt40n1clDeJmQrAVMPg"; // Replace with your actual API key
    const apiUrl = `https://api.collegefootballdata.com/scores?key=${apiKey}`;
    const scoresElement = document.getElementById("scores");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display it on the page
            scoresElement.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            scoresElement.textContent = "An error occurred while fetching data.";
        });
});