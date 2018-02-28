import React from 'react';
import PropTypes from 'prop-types';


const Picture = ({imageUrl}) => (
    <div
        className="cont"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
    >
    </div>
);

Picture.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Picture;