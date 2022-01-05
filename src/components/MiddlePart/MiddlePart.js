import React from 'react';
import AllProducts from '../Products/AllProducts/AllProducts';
import Menu from './Menu/Menu';

const MiddlePart = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3">
                    <Menu></Menu>
                </div>
                <div className="col-lg-9">
                    <AllProducts></AllProducts>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;