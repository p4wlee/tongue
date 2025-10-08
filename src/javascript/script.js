import "../scss/style.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* These lines of code are setting up initial variables and constants for fetching and displaying news
data from the Hacker News API. */
const API_BASE = process.env.API_BASE;
const newsContainer = document.getElementById("news-container");
const loadMoreButton = document.getElementById("load-more");

let newsIds = [];
let currentIndex = 0;
const newsPerPage = 10;

/**
 * The `init` function fetches news IDs from an API endpoint and loads more news based on the fetched
 * IDs.
 */
async function init() {
    try {
        const response = await fetch (`${API_BASE}/newstories.json`);
        if (!response.ok) {
            throw new Error ("Failed to fetch news Ids");
        }
        newsIds = await response.json();
        loadMoreNews();
    } catch (error) {
        console.error ("Error initializing news", error);
    }
}

/**
 * The function `loadMoreNews` asynchronously loads news details in batches and updates the current
 * index until all news items have been loaded.
 */
async function loadMoreNews () {
    const nextNewsIds = newsIds.slice (currentIndex, currentIndex + newsPerPage);

    for (let id of nextNewsIds) {
        await fetchNewsDetail(id);
    }

    currentIndex += newsPerPage;

    if (currentIndex >= newsIds.length) {
        loadMoreButton.style.display = "none";
    }
}

/**
 * The function `fetchNewsDetail` asynchronously fetches news details using an API endpoint and
 * displays them on the webpage.
 * @param id - The `id` parameter in the `fetchNewsDetail` function is used to specify the unique
 * identifier of the news item that you want to fetch the details for. This identifier is used to
 * construct the URL for fetching the specific news item from the API.
 * @returns The `fetchNewsDetail` function is an asynchronous function that fetches news detail data
 * from an API based on the provided `id`. It then creates a new `div` element to display the news item
 * with its title and publication date. If the fetch is successful, the news item is appended to the
 * `newsContainer`. If there is an error during the fetch process, an error message is logged
 */
async function fetchNewsDetail(id) {
    try {
        const response = await fetch (`${API_BASE}/item/${id}.json`);
        if (!response.ok) {
            throw new Error ("Failed to fetch news detail");
        }
        const news = await response.json();
        if (!news) return;

        const newsItem = document.createElement ("div");
        newsItem.classList.add("news-item");

        const date = new Date(news.time * 1000);
        const dateString = date.toLocaleString("it-IT");

        newsItem.innerHTML = `
        <h2><a href="${news.url || '#'}" target="_blank">${news.title}</a></h2>
        <p class="date">Published on: ${dateString}</p>
        `;

        newsContainer.appendChild(newsItem);
    } catch (error) {
        console.error ("Error fetching news detail", error);
    }
}

/* The code `loadMoreButton.addEventListener("click", loadMoreNews);` is adding an event listener to
the `loadMoreButton` element. This event listener is listening for a click event on the
`loadMoreButton` element, and when a click event occurs, it will trigger the `loadMoreNews`
function. */
loadMoreButton.addEventListener ("click", loadMoreNews);
init();