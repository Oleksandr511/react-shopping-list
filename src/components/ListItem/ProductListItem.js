import React from 'react';
import useProductList from '../ProductList/ProductList';
import '../../App.css';


const Products = () => {
    const { products, addProduct, updateLength } = useProductList();
    return (
        <div className='product'>
            <h1>shopping list in Metro</h1>
            <div className="products">
                {products.map((item, index) => (
                    <div className="product__item" key={index}>
                        <input type="checkbox" onChange={() => addProduct(item)} />
                        <label> {item.label} </label>
                    </div>
                ))}
            </div>

            <div className='selected__products'>
                <div>{products.map((item, index) => {
                    return (
                    <div key={index}>{item.done && item.label}</div>
                    )
                })}</div>
                <div className='products__amount'>{updateLength()}</div>

            </div>
        </div>
    );
};

export default Products;