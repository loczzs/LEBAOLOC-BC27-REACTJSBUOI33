import React from 'react'

const ProductDetail = ({product}) => {
    if(!product){
        //không có sản phẩm suy ra ko cần render ra giao diện
        return null
    }
  return (
    <div className="row ">
          <div className="col-sm-6">
            <img 
              src={product.image}
              alt={product.name}
              width="100%"
              height="500px"
            />
          </div>
          <div className="col-sm-6">
            <h1>Thông tin chi tiết</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên Sản Phẩm</td>
                  <td>{product.name}</td>
                </tr>
                <tr>
                  <td>Giá</td>
                  <td>{product.price}</td>
                </tr>
                <tr>
                  <td>Mô Tả</td>
                  <td>{product.description}</td>
                </tr>
                <tr>
                  <td>giới thiệu</td>
                  <td>{product.shortDescription}</td>
                </tr>
                <tr>
                  <td>Số Lượng</td>
                  <td>{product.quantity}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default ProductDetail