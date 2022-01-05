import React, { useEffect, useState } from 'react';
import './AllProducts.css'
import Product from '../Product/Product';
import Cart from '../../Cart/Cart'

const AllProducts = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    // handle button 

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
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
                <div className="col-lg-8">
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="col-lg-4">
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>

        </div >
    );
};

export default AllProducts;