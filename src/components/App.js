import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import '../css/App.css';

const url = `https://api.unsplash.com/search/photos`;
const API_KEY = 'ADD THIS YOURSELF FROM THEIR WEBSITE';

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await axios.get(url, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    });
    const imgResults = response.data.results;
    this.setState({ images: imgResults });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
