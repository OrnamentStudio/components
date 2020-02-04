import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { getHtml, isLocalLink } from './utils';


const Markdown = (props) => {
  const {
    className: passedClassName,
    text,
    inline,
    onClick,
    onLinkClick,

    ...rest
  } = props;

  const handleClick = (event) => {
    const { target } = event;
    const link = target.getAttribute('href');

    if (isLocalLink(link)) {
      event.preventDefault();
      onLinkClick(link);
    }

    if (onClick) onClick(event);
  };

  const className = clsx('c-markdown', passedClassName, { 'is-inline': inline });

  return (
    <span
      {...rest}
      className={className}
      dangerouslySetInnerHTML={getHtml(text)}
      onClick={handleClick}
    />
  );
};

Markdown.defaultProps = {
  className: null,
  inline: false,

  onClick: null,
  onLinkClick: null,
};

Markdown.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  text: PropTypes.string.isRequired,

  onClick: PropTypes.func,
  onLinkClick: PropTypes.func,
};

export default memo(Markdown);
