import React from 'react'

const ProductList = ({products,onSelect}) => {
    const handleSelect = (product) =>{
        
        onSelect(product)
    }
  return (
    <div className='row'>
    {products.map((product)=>{
        return (
    <div  key={product.id} className='col-sm-4' >
    <div className='card'>
        <div className='card-header'>phone</div>
        <div className='card-body'>
            <img width={"100%"} height={"300px"} src={product.image} alt="" />
            <h3 className='card-title'>{product.name}</h3>
            <p className='"card-text'> {product.price}</p>
            <button className="btn btn-dark" onClick={()=> handleSelect(product)} >Details</button>
        </div>

    </div>
    </div>
  )
    })}
    </div>
  )
}

export default ProductList