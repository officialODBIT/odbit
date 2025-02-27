const pb = new PocketBase("http://127.0.0.1:8090"); // Change if hosted online

async function loadNews() {
    try {
        const newsContainer = document.getElementById("news-container");
        newsContainer.innerHTML = "<p>Loading news...</p>";

        const records = await pb.collection("news").getFullList({
            sort: "-date", // Show newest first
        });

        if (records.length === 0) {
            newsContainer.innerHTML = "<p>No news found.</p>";
            return;
        }

        newsContainer.innerHTML = ""; // Clear loading text

        records.forEach((news) => {
            const newsBox = document.createElement("div");
            newsBox.classList.add("news-box");

            newsBox.innerHTML = `
                <h2>${news.title}</h2>
                <p>By ${news.author || "Unknown Author"}</p>
                <p>${new Date(news.date).toLocaleDateString()}</p>
                <button class="news-btn" onclick="window.open('${news.url}', '_blank')">Read More</button>
            `;

            newsContainer.appendChild(newsBox);
        });
    } catch (err) {
        console.error("Error loading news:", err);
        document.getElementById("news-container").innerHTML =
            "<p>Failed to load news. Try again later.</p>";
    }
}

loadNews();
