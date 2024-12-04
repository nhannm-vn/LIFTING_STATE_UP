//Chứa toàn bộ ví dụ chúng ta

//import css
import './FilterableProductTable.css'

import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export class FilterableProductTable extends Component {
  render() {
    return (
      <div className='FilterableProductTable'>
        {/* SearchBar (blue) */}
        <SearchBar />
        {/*  ProductTable (green) */}
        <ProductTable />
      </div>
    )
  }
}

export default FilterableProductTable
