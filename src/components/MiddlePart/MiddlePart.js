import React from 'react';
import Cart from '../Cart/Cart';
import AllProducts from '../Products/AllProducts/AllProducts';
import Menu from './Menu/Menu';

const MiddlePart = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <Menu></Menu>
                </div>
                <div className="col-lg-6">
                    <AllProducts></AllProducts>
                </div>
                <div className="col-lg-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;