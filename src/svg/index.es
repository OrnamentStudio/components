import React from 'react';
import PropTypes from 'prop-types';


const Svg = (props) => {
  const { name, ...cleanProps } = props;

  return (
    <svg {...cleanProps}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Svg.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Svg;
