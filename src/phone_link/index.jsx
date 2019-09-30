import React from 'react';
import PropTypes from 'prop-types';


const PhoneLink = ({ to, children, ...rest }) => (
  <a {...rest} href={`tel:${to}`}>{children || to}</a>
);

PhoneLink.defaultProps = {
  children: null,
};

PhoneLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PhoneLink;
