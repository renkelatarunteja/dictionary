import React, { useState, useEffect } from 'react';
// In a separate file, e.g., dictionaryData.js
export const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];
  

function XDictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setMeaning('Please enter a search term.');
    } else {
      const foundWord = dictionary.find(entry => entry.word.toLowerCase() === searchTerm.toLowerCase());
      if (foundWord) {
        setMeaning(foundWord.meaning);
      } else {
        setMeaning('Word not found in the dictionary.');
      }
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setMeaning(''); // Clear the meaning when the search term is empty
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        Definition:{meaning && <p>{meaning}</p>}
      </div>
    </div>
  );
}

export default XDictionary;
