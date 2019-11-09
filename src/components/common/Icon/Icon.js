import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({name, price, addOption}) => (
    <i onClick={addOption} className={`fas fa-${name}`}>{price}</i>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
