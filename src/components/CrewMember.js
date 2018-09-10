import React from 'react';
import PropTypes from 'prop-types';


const CrewMember = (props) => (
    <div className="crew-member">
      <img src={props.picture.large} />
      <h3>{props.name.title} {props.name.first} {props.name.last}</h3>
    </div>
);

CrewMember.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default CrewMember;

