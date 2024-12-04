//Chứa toàn bộ ví dụ chúng ta

//import css
import './FilterableProductTable.css'

import React, { Component } from 'react'

export class FilterableProductTable extends Component {
  render() {
    return (
      <div className='FilterableProductTable'>
        <form>
          <input type='text' placeholder='Search...' />
          <div>
            <input type='checkbox' />
            <label>Only show products in stock</label>
          </div>
        </form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan={2}>Sporting Goods</th>
            </tr>
            <tr>
              <td>Football</td>
              <td>$49.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default FilterableProductTable
