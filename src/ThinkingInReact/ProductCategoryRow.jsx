//Hiển thị tiêu đề cho mỗi category
import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan={2}>Sporting Goods</th>
      </tr>
    )
  }
}

export default ProductCategoryRow
