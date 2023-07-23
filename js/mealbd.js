const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySrarchResult(data.meals))
        .catch(error => console.log(error));
}

const displaySrarchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meals => {
        console.log(meals)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });
}