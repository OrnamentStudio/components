import React from 'react';
import PropTypes from 'prop-types';


const PhoneLink = (props) => {
  const { to, children, ...cleanProps } = props;
  return <a {...cleanProps} href={`tel:${to}`}>{children || to}</a>;
};

PhoneLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default PhoneLink;
