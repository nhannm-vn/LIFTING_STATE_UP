//_Module thông báo nhiệt độ C nước sôi

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class BoilingVerdict extends Component {
  render() {
    const { celsius } = this.props
    return (
      <div>
        {celsius >= 100
          ? 'The water would boil' //
          : 'The water would not boil'}
      </div>
    )
  }
}

//_Viết proptype giới hạn đầu vào
//mặc định khi không truyền thì celsius là '' mà ép thì sẽ thành 0 bên kia rồi
BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired
}

export default BoilingVerdict
