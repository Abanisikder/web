import React, { useState } from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import './homePage.css'; 

const headlines = [
  "Stock Markets Open Higher Amid Tech Rally",
  "Federal Reserve Signals Possible Rate Pause",
  "Apple Unveils New AI-Powered Features",
  "Elon Musk's SpaceX Breaks New Record",
  "Oil Prices Drop as Supply Increases"
];

const featured = {
  title: "AI Is Reshaping the Future of Finance",
  excerpt:
    "From automated trading to fraud detection, artificial intelligence is transforming the financial industry at lightning speed.",
  image:
    "https://images.unsplash.com/photo-1581091870620-d1b0f3b1cb54?auto=format&fit=crop&w=800&q=80"
};

const articles = [
  {
    title: "Inside the Metaverse Economy",
    snippet: "Virtual real estate, digital art, and crypto assets—how they're reshaping wealth.",
    image:
      "https://images.unsplash.com/photo-1610484826924-2b65bc8c167f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Top 10 CEOs of 2025",
    snippet: "Meet the business leaders making waves in innovation and growth.",
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Green Tech Is Booming",
    snippet: "Investors pour billions into sustainable energy startups.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80"
  }
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleIndustryChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header with Navigation, Search Box, Country & Industry Dropdown */}
      <header className="flex justify-between items-center border-b pb-2">
        <h1 className="text-3xl font-bold">Forbes Real-Time</h1>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost">Business</Button>
          <Button variant="ghost">Tech</Button>
          <Button variant="ghost">Markets</Button>
          <Button variant="ghost">Leadership</Button>
          
          {/* Search Box */}
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-2 border rounded-lg ml-4"
          />
          
          {/* Country Dropdown */}
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className="p-2 border rounded-lg ml-4"
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="Australia">Australia</option>
          </select>

          {/* Industry Dropdown */}
          <select
            value={selectedIndustry}
            onChange={handleIndustryChange}
            className="p-2 border rounded-lg ml-4"
          >
            <option value="">Select Industry</option>
            <option value="Finance">Finance</option>
            <option value="Tech">Tech</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Energy">Energy</option>
            <option value="Real Estate">Real Estate</option>
          </select>
        </nav>
      </header>

      {/* Ticker */}
      <div className="bg-gray-100 py-2 px-4 text-sm animate-pulse overflow-hidden whitespace-nowrap">
        {headlines.map((h, i) => (
          <span key={i} className="mr-6 inline-block">
            🔴 {h}
          </span>
        ))}
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={featured.image}
          alt="featured"
          className="w-full h-64 object-cover rounded-2xl shadow-md"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">{featured.title}</h2>
          <p className="text-gray-700 mb-4">{featured.excerpt}</p>
          <Button>Read More</Button>
        </div>
      </div>

      {/* Articles Grid */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1">{article.title}</h4>
                <p className="text-sm text-gray-600">{article.snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
