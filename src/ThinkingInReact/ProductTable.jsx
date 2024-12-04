//Hiển thị và filter danh sách dựa trên user nhập
import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* ProductCategoryRow (turquoise) */}
          <ProductCategoryRow />
          {/* ProductRow (red) */}
          <ProductRow />
        </tbody>
      </table>
    )
  }
}

export default ProductTable
