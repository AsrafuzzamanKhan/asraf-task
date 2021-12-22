import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { title, price, description, image, handleAddProduct } = product;
    return (
        <div className='border shadow p-3 mb-5 bg-body rounded d-flex text-start '>

            <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 product">
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-title fw-bold">$ {price}</p>

                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">
                        <button className="btn btn-success" onClick={() => handleAddProduct(product)}> <i className="fas fa-shopping-cart"></i> Add Cart</button>
                    </small></p>
                </div>
            </div>

        </div>
    );
};

export default Product;