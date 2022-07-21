import React, { Component } from 'react'
import data from "./data.json";
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
export default class ShopShoes extends Component {
    constructor(props) { // viết tắt rconst
        super(props)
      
        this.state = {
           selectedProduct:null,
           
        }
      }
      //B1 định nghĩa 1 hàm nhận dữ liệu từ component ProductList
     handleSelectzz = (product) =>{
        console.log(product)
        //  product hiện tại chỉ có thể truy cập được bên trong hàm handleSelect, để có thể truyền giá trị product này xuống component ProductDetails ta cần gán giá trị của nó cho state selectedProduct
        this.setState({selectedProduct:product})
    }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>Shoes Shop</h1>
        <div className='row'>
            <div className='col-sm-7'>
                <ProductList products={data} onSelect={this.handleSelectzz}/>
            </div>
            <div  style={{position: 'fixed', right:0}} className='col-sm-5'>
                <ProductDetail product={this.state.selectedProduct}/>
            </div>
        </div>
      </div>
    )
  }
}
