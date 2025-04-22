document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    const insertDiv = document.getElementById('insert');
    const searchInput = document.getElementById('label'); 

    if (searchButton && insertDiv && searchInput) {
        searchButton.addEventListener('click', function(event) {
            event.preventDefault(); 

            const searchTerm = searchInput.value.trim(); 
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

    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const productsRow = document.querySelector('.products-row');
    
    if (prevBtn && nextBtn && productsRow) {
        let scrollAmount = 0;
        const cardWidth = 280; // Approximate width of each card including margins

        nextBtn.addEventListener('click', () => {
            scrollAmount += cardWidth;
            if (scrollAmount > productsRow.scrollWidth - productsRow.clientWidth) {
                scrollAmount = 0;
            }
            productsRow.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            scrollAmount -= cardWidth;
            if (scrollAmount < 0) {
                scrollAmount = productsRow.scrollWidth - productsRow.clientWidth;
            }
            productsRow.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }

   
    const smallPrevBtn = document.getElementById('smallPrevBtn');
    const smallNextBtn = document.getElementById('smallNextBtn');
    const smallProductsRow = document.querySelector('.small-products-row');
    
    if (smallPrevBtn && smallNextBtn && smallProductsRow) {
        let scrollAmount = 0;
        const cardWidth = 220; 

        smallNextBtn.addEventListener('click', () => {
            scrollAmount += cardWidth;
            if (scrollAmount > smallProductsRow.scrollWidth - smallProductsRow.clientWidth) {
                scrollAmount = 0;
            }
            smallProductsRow.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        smallPrevBtn.addEventListener('click', () => {
            scrollAmount -= cardWidth;
            if (scrollAmount < 0) {
                scrollAmount = smallProductsRow.scrollWidth - smallProductsRow.clientWidth;
            }
            smallProductsRow.scroll({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});
