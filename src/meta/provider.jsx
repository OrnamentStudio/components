import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './context';
import createApi from './api';


const MetaProvider = (props) => {
  const { context, children } = props;
  const propsList = useRef([]);

  let api;
  let handleUpdate;

  if (process.browser) {
    handleUpdate = () => {
      const { title } = api.getProps();
      if (title !== global.document.title) global.document.title = title;
    };
  }

  api = createApi(propsList, handleUpdate);

  if (context) context.getProps = api.getProps;

  return <Provider value={api}>{children}</Provider>;
};

MetaProvider.defaultProps = {
  context: null,
  children: null,
};

MetaProvider.propTypes = {
  context: PropTypes.object,
  children: PropTypes.node,
};

export default MetaProvider;
