import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import { getHtml, isLocalLink } from './utils';


const Markdown = (props) => {
  const {
    className: passedClassName,
    text,
    inline,
    onClick,

    history,
    match,
    location,
    staticContext,

    ...rest
  } = props;

  const handleClick = (event) => {
    const { target } = event;
    const link = target.getAttribute('href');

    if (isLocalLink(link)) {
      event.preventDefault();
      history.push(link);
    }

    if (onClick) onClick(event);
  };

  const className = classNames('c-markdown', passedClassName, { 'is-inline': inline });

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
  inline: false,
};

Markdown.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,

  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  staticContext: PropTypes.any,
};

export default withRouter(memo(Markdown));
