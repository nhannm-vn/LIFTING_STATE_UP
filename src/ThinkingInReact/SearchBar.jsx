//Khu vực user nhập liệu
import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props
    return (
      <form>
        <input type='text' name='searchText' value={searchText} placeholder='Search...' onChange={handleChange} />
        <div>
          <input type='checkbox' value={inStock} name='inStock' onChange={handleChange} />
          <label>Only show products in stock</label>
        </div>
      </form>
    )
  }
}

export default SearchBar
