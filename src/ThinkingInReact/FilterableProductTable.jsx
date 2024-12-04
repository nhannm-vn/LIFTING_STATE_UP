//Chứa toàn bộ ví dụ chúng ta

//import css
import './FilterableProductTable.css'

import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const productListMock = [
  {
    category: 'Sporting Goods',
    price: '$49.99', //
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99', //
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99', //
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99', //
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99', //
    stocked: false,
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$199.99', //
    stocked: true,
    name: 'Nexus 7'
  }
]

//_Gỉa lập api
const fetchApi = () => {
  return new Promise((resolve, reject) => {
    resolve(productListMock)
  })
}

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
      searchText: '',
      inStock: false
    }
  }

  render() {
    return (
      <div className='FilterableProductTable'>
        {/* SearchBar (blue) */}
        <SearchBar />
        {/*  ProductTable (green) */}
        <ProductTable productList={productListMock} />
      </div>
    )
  }
}

export default FilterableProductTable
