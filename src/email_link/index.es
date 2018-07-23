import React from 'react';
import PropTypes from 'prop-types';


const EmailLink = (props) => {
  const { to, children, ...cleanProps } = props;
  return <a {...cleanProps} href={`mailto:${to}`}>{children || to}</a>;
};

EmailLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default EmailLink;
