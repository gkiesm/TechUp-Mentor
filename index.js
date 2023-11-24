function recommend() {
    
    let searchTerm = document.querySelector('.form-control-lg').value.toLowerCase();

    //let product = [
        //{ name: "John Doe", details: "Product Director" },
        //{ name: "Jane Smith", details: "Senior Product Manager" },
    //];

    if (searchTerm === "") {
        displayResults("No mentors founds");
        return;
    };


    function displayResults(results) {
        var resultsContainer = document.querySelector('.search-results'); 
        
        resultsContainer.innerHTML = '';

        var resultsElement = document.createElement('p');
        resultsElement.textContent = results;

    // Step 8: Append the message element to the result container
    resultsContainer.appendChild(resultsElement);

}
};