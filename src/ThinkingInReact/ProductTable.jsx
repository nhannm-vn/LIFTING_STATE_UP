//Hiển thị và filter danh sách dựa trên user nhập
import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export class ProductTable extends Component {
  render() {
    //_Lấy danh sách từ props truyền vào
    const { productList } = this.props

    //_Mình sẽ thiết kế thuật toán
    //+lastCategory: dùng để check xem là ProducCategory có lặp lại không
    //  từ đó quyết định push cả ProductCategoryRow và ProductRow vào
    //  hay chỉ push ProductRow
    const rows = []
    let lastCategory = null

    //_LƯU Ý: khi render list ra thì phải có key và key phải nằm bên render
    //chứ không nằm bên component element
    //_Đối với render bằng map thì sẽ cần Fragment và key sẽ là của Fragment
    productList.forEach((productItem) => {
      //_Nếu chưa có ProductCategory thì hãy thêm nó vào
      if (productItem.category !== lastCategory) {
        rows.push(<ProductCategoryRow key={productItem.category} category={productItem.category} />)
        rows.push(<ProductRow key={productItem.name} product={productItem} />)
      } else {
        //_Nếu có rồi thì thêm sản phẩm thôi
        rows.push(<ProductRow key={productItem.name} product={productItem} />)
      }
      //_Dù thêm cái nào thì sau vòng lặp phải gán biến lại
      lastCategory = productItem.category
    })

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
          {/* <ProductCategoryRow /> */}
          {/* ProductRow (red) */}
          {/* <ProductRow /> */}
          {rows}
        </tbody>
      </table>
    )
  }
}

export default ProductTable
