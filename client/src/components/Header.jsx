import React, { useState } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      // const newUrl = `${baseApiUrl}/search/?title=${encodeURIComponent(searchQuery)}`;
      // updateUrl(newUrl); // Update 'url' in the parent component
      const response = await fetch(`/search/?title=${searchQuery}`);
      const data = await response.json();
      console.log(data)
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar bg-danger-emphasis">
      <Navbar.Brand href="#home" className="brand-title ms-5 fst-italic">READER'S HEAVEN</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="search-form" onSubmit={handleSearch}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 ms-5"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" className='ms-2 rounded-3xl py-2 px-4 text-2xl' variant="outline-light">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
