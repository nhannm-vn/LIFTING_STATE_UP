//Khu vực user nhập liệu
import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Search...' />
        <div>
          <input type='checkbox' />
          <label>Only show products in stock</label>
        </div>
      </form>
    )
  }
}

export default SearchBar
