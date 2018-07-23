/* eslint react/jsx-no-target-blank: 0 */
import React from 'react';
import PropTypes from 'prop-types';


const PopupLink = (props) => {
  const { to, follow, ...cleanProps } = props;
  let rel = 'noreferrer noopener';
  if (!follow) rel += ' nofollow';

  return <a {...cleanProps} href={to} rel={rel} target="_blank" />;
};

PopupLink.defaultProps = {
  follow: false,
};

PopupLink.propTypes = {
  to: PropTypes.string.isRequired,
  follow: PropTypes.bool.isRequired,
};

export default PopupLink;
