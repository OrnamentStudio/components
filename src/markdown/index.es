import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import marked from 'marked';
import { withRouter } from 'react-router';


const LINK_REGEX = /^\//;

const options = {
  gfm: false,
  tables: false,
  breaks: true,
  sanitize: true,
};

class Markdown extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { history, onClick } = this.props;
    const { target } = event;
    const isLink = target.tagName === 'A';

    if (!isLink) return;

    const href = target.getAttribute('href');
    const isLocalLink = LINK_REGEX.test(href);

    if (isLocalLink) {
      event.preventDefault();
      history.push(href);
    }

    if (onClick) onClick(event);
  }

  render() {
    const {
      text,
      inline,
      history,
      match,
      location,
      staticContext,
      onClick,
      className: passedClassName,
      ...cleanProps
    } = this.props;

    const className = classNames('c-markdown', passedClassName, { 'is-inline': inline });
    const safeContent = { __html: marked(text, options) };

    return (
      <span
        {...cleanProps}
        className={className}
        dangerouslySetInnerHTML={safeContent}
        onClick={this.handleClick}
      />
    );
  }
}

Markdown.defaultProps = {
  inline: false,
};

Markdown.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  staticContext: PropTypes.any,
  onClick: PropTypes.func,
};

export default withRouter(Markdown);
