import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({name, price, onClick}) => (<i className={`fas fa-${name}`}>{` $${price}`}</i>);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
