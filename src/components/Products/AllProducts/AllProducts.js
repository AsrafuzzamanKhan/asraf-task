import React, { useEffect, useState } from 'react';
import './AllProducts.css'
import Product from '../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    // handle button 

    const handleAddProduct = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>


            <div className="row">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddProduct={handleAddProduct}
                    ></Product>)
                }
            </div>

        </div >
    );
};

export default AllProducts;