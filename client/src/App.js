import React, { useState } from 'react';
import './App.css';
import BookCard from './components/BookCard';
import Greet from './components/Greet';
import Header from './components/Header';
// import url from './components/Header'
const backgroundImage = 'https://www.lifewire.com/thmb/DLbW5ikKQ57uxqc8ojMvLJnAuJ4=/3122x3192/filters:fill(auto,1)/GettyImages-4799940351-565a0cb55f9b5835e464905e.jpg';
const url = "http://localhost:5000"; // Update the URL

function App() {

  // const [searchResults, setSearchResults] = useState([]);
  // const [url, setUrl] = useState(`${baseApiUrl}`);

  // const updateUrl = (newUrl) => {
  //   setUrl(newUrl);
  // };

  return (
    <div className="App overflow-x-hidden h-screen bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
      }}>
      <Header
      // setSearchResults={setSearchResults}
      // updateUrl={updateUrl}
      // baseApiUrl={baseApiUrl} // Pass baseApiUrl as a prop 
      />
      <Greet />
      <BookCard url={url} /> {/* Pass the 'url' prop */}
    </div>
  );
}

export default App;
