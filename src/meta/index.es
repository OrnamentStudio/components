import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';


const DEFAULT_TITLE_TEMPLATE = '{title}';
const Meta = () => null;

Meta.propTypes = {
  titleTemplate: PropTypes.string,
  defaultTitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  robots: PropTypes.string,
};

const handleStateChangeOnClient = ({ title }) => {
  document.title = title;
};

const reducePropsToState = (componentsProps) => {
  const state = componentsProps.reduce((acc, props) => ({ ...acc, ...props }), {});

  const titleTemplate = state.titleTemplate || DEFAULT_TITLE_TEMPLATE;

  if (!state.title) state.title = state.defaultTitle;
  else state.title = titleTemplate.replace('{title}', state.title);

  return state;
};

export default withSideEffect(reducePropsToState, handleStateChangeOnClient)(Meta);
