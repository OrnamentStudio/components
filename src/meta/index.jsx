/* eslint-disable react/no-unused-prop-types, react/require-default-props */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MetaContext from './context';


class Meta extends PureComponent {
  componentWillUnmount() {
    if (this.removeProps) this.removeProps();
  }

  render() {
    const { context } = this;

    if (this.removeProps) this.removeProps();
    this.removeProps = context.addProps(this.props);

    return null;
  }
}

Meta.contextType = MetaContext;

Meta.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  robots: PropTypes.string,
  canonical: PropTypes.string,
};

export { default as Provider } from './provider';
export { Consumer } from './context';
export default Meta;
