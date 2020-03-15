import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: ''
  };

  onInputChange(event) {
    let { value } = event.target;
    this.setState({ input: value });
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label for='searchTerm'>Image Search</label>
            <input
              name='searchTerm'
              id='searchTerm'
              type='text'
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
