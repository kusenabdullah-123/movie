const getMovie = async (text) => {
  let key = "5b4b89d6";
  const Response = await fetch(
    `http://www.omdbapi.com?apikey=${key}&s=${text}`
  );
  const { Search: movie } = await Response.json();
  let html = "";
  movie.map(({ Poster, Title, Year }) => {
    html += `<div class="col-md-4 mb-3">
      <div class="card" style="width: 18rem;">
        <img src="${Poster}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${Title}</h5>
          <p class="card-text">
            ${Year}
          </p>
          <a href="" class="btn btn-primary">Detail</a>
        </div>
      </div>
    </div>`;
    document.querySelector(".movieList").innerHTML = html;
  });
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    const search = document.querySelector("#inputSearch").value;
    getMovie(search);
  });
});
