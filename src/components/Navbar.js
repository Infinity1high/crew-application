import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({searchText, onSearchChanged}) => (
    <nav className='nav'>
        <div className='input-group mb-3 search'>
            <input
                type='text'
                className='form-control'
                value={searchText}
                onChange={onSearchChanged}
            />
            <div className="input-group-append">
                <span className="input-group-text">Search</span>
            </div>
        </div>
    </nav>
);

Navbar.propTypes = {
    searchText: PropTypes.string,
    onSearchChanged: PropTypes.func
};

export default Navbar;