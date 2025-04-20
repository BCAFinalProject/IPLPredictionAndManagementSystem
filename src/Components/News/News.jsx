import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

const News = () => {
  // State to store news data
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cricket news from the API
  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything", 
        {
          params: {
            q: "cricket", // search keyword
            sortBy: "publishedAt", // sort by latest news
            apiKey: "9c905c9cf58f4c87a92019c8d2f2ffbb", // replace with your NewsAPI key
          },
        }
      );
      setNewsData(response.data.articles); // update the state with fetched articles
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch news");
      setLoading(false);
    }
  };

  // UseEffect hook to fetch the news when the component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="news-page">
      <h1 className="news-page-title">Latest IPL News</h1>
      <div className="news-container">
        {newsData.map((newsItem, index) => (
          <div key={index} className="news-item">
            <img
              src={newsItem.urlToImage || "default-image.jpg"} // fallback image if no image
              alt={newsItem.title}
              className="news-image"
            />
            <h2 className="news-title">
              <a
                href={newsItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {newsItem.title}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;