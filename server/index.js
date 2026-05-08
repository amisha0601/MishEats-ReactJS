// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 7000;

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  console.log("API HIT");

  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "Swiggy API Error" });
    }

    const data = await response.json();
    res.json(data);

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

app.get('/api/menu/:resId', async (req, res) => {
  const { resId } = req.params;

  try {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=${resId}&submitAction=ENTER`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*",
        "Referer": "https://www.swiggy.com/",
      },
    
    const text = await response.text();

    if (!text) {
      console.log("Empty response from Swiggy");
      return res.json({ data: null });
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.log("Invalid JSON from Swiggy");
      return res.json({ data: null });
    }

    res.json(data);

  } catch (error) {
    console.error("Menu API Crash:", error);
    res.json({ data: null });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});