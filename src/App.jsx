import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [quoteData, setQuoteData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('happiness'); // Начальная категория

  const categories = [
    'age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communications',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success',
    'limit',
  ];

  const url = `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`;
  const options = {
    method: 'GET',
    headers: {
      'x-api-key': 'D3icMMWe0hHawf8FXIzAzA==9rp4BWDO2VpxMXYn',
    },
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  const fetchData = () => {
    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
        document.body.style.backgroundColor = randomColor;
        setQuoteData(json);
      })
      .catch(err => console.error('error:' + err));
  };

  const onClickNewQuote = () => {
    fetchData();
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  return (
    <div id="quote-box" className="App">
      <h1>Random Quote Machine</h1>
      <div id="category-select">
        <label htmlFor="category">Select a category: </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div id="text">
        {quoteData[0] ? quoteData[0].quote : 'Loading...'}
      </div>
      <div id="author">
        {quoteData[0] ? quoteData[0].author : ''}
      </div>
      <div id="button-container">
        <button id="new-quote" onClick={onClickNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quoteData[0]?.quote} - ${quoteData[0]?.author}`}
          target="_blank" // Откроется в новой вкладке
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
