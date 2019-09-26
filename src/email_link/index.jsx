import React from 'react';
import PropTypes from 'prop-types';


const EmailLink = ({ to, children, ...rest }) => (
  <a {...rest} href={`mailto:${to}`}>{children || to}</a>
);

EmailLink.defaultProps = {
  children: null,
};

EmailLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default EmailLink;
