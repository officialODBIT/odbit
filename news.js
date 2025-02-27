const pb = new PocketBase('http://127.0.0.1:8090'); // Use your PocketBase URL

async function getNews() {
    try {
        const records = await pb.collection('news').getFullList({
            sort: '-date', // Sort by newest first
        });
        console.log(records); // Check data in console
    } catch (err) {
        console.error("Error fetching news:", err);
    }
}

getNews();
