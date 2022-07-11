import React, { Component } from 'react';
import SearchResults from './BookSearchResults';
import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';

class SearchBooks extends Component {
  render() {
    const {
      listBookSearch,
      listBook,
      onSearch,
      onResetSearch,
      onChangeShelf,
    } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}></button>
          </Link>
          <SearchBooksInput onSearch={onSearch} />
        </div>
        <SearchResults
          listBookSearch={listBookSearch}
          listBook={listBook}
          onChangeShelf={onChangeShelf}
        />
      </div>
    );
  }
}

export default SearchBooks;
