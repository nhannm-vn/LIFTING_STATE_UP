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
    //_Các state ban đầu đều chưa có giá trị gì cảs
    this.state = {
      productList: [],
      searchText: '',
      inStock: false
    }
  }

  //_sau khi mount xong thì call api lấy data
  async componentDidMount() {
    const data = await fetchApi()
    this.setState((prevState) => ({
      ...prevState,
      productList: data
    }))
  }

  //_method nãy sẽ nhận vào event và sẽ chạy và setSate lại khi mà bên component
  //SearchBar các ô input check-box thay đổi
  //_Nen la arow function
  handleChange = (event) => {
    const name = event.target.name
    if (name === 'searchText') {
      this.setState((prevState) => ({
        ...prevState,
        searchText: event.target.value
      }))
    } else if (name === 'inStock') {
      this.setState((prevState) => ({
        ...prevState,
        inStock: event.target.checked
      }))
    }
  }

  render() {
    const { searchText, inStock, productList } = this.state
    return (
      <div className='FilterableProductTable'>
        {/* SearchBar (blue) */}
        <SearchBar searchText={searchText} inStock={inStock} handleChange={this.handleChange} />
        {/*  ProductTable (green) */}
        <ProductTable searchText={searchText} inStock={inStock} productList={productList} />
      </div>
    )
  }
}

export default FilterableProductTable
