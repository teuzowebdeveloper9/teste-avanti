document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    const insertDiv = document.getElementById('insert');
    const searchInput = document.getElementById('label'); // Get the input field

    if (searchButton && insertDiv && searchInput) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default form submission

            const searchTerm = searchInput.value.trim(); // Get the search term
            let content = '';

            if (searchTerm) {
                content = `
                    <div class="card insert-card mx-auto mt-3" style="width: 80%;">
                        <div class="card-header">
                            Search Result
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Searching for: ${searchTerm}</h5>
                            <p class="card-text">Here are the results for your search. (This is placeholder content).</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                `;
            } else {
                 content = `
                    <div class="alert alert-warning insert-alert mx-auto mt-3" role="alert" style="width: 80%;">
                       Please enter a search term!
                    </div>
                `;
            }

            insertDiv.innerHTML = content;
        });
    }
});
