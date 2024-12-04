//Hiển thị tiêu đề cho mỗi category
import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    )
  }
}

export default ProductCategoryRow
