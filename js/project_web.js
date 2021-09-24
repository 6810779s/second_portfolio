/* portfolio */
const portfolio_project_img = document.querySelector(
  ".portfolio .portfolio_project_img"
);
const portfolio_up = document.querySelector(".portfolio .up");
const portfolio_down = document.querySelector(".portfolio .down");

/* cafe */
const cafe_project_img = document.querySelector(".cafe .cafe_project_img");
const cafe_up = document.querySelector(".cafe .up");
const cafe_down = document.querySelector(".cafe .down");

/* portfolio second */
const portfolioSecond_project_img = document.querySelector(
  ".portfolio_second .portfolioSecond_project_img"
);
const portfolioSecond__up = document.querySelector(".portfolio_second .up");
const portfolioSecond__down = document.querySelector(".portfolio_second .down");

/* movie app */
const movieApp_img = document.querySelector(".movieApp .movieApp_img");
const movieApp_up = document.querySelector(".movieApp .up");
const movieApp_down = document.querySelector(".movieApp .down");

/* project's height */
const portfolio_height = portfolio_project_img.clientHeight / 10;
const cafe_height = cafe_project_img.clientHeight / 10;
const portfolioSecond_height = portfolioSecond_project_img.clientHeight / 10;
const movieApp_height = movieApp_img.clientHeight / 10;

const container_height =
  document.querySelector(".portfolio .portfolio_container").clientHeight / 10;

/* portfolio */
portfolio_up.addEventListener("click", function () {
  // portfolio_project_img.style.top = (-293.8 + 40) + 'rem';
  portfolio_project_img.style.top = 0;
});
portfolio_down.addEventListener("click", function () {
  portfolio_project_img.style.top =
    -portfolio_height + container_height + "rem";
});

/* cafe */
cafe_up.addEventListener("click", function () {
  cafe_project_img.style.top = 0;
});

cafe_down.addEventListener("click", function () {
  cafe_project_img.style.top = -cafe_height + container_height + "rem";
});

/* portfolio second */
portfolioSecond__up.addEventListener("click", function () {
  portfolioSecond_project_img.style.top = 0;
});

portfolioSecond__down.addEventListener("click", function () {
  portfolioSecond_project_img.style.top =
    -portfolioSecond_height + container_height + "rem";
});

/* movie app */
movieApp_up.addEventListener("click", function () {
  movieApp_img.style.top = 0;
});

movieApp_down.addEventListener("click", function () {
  movieApp_img.style.top = -movieApp_height + container_height + "rem";
});
