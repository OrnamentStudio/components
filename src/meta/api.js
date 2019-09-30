export default (propsList, callback) => ({
  addProps(props) {
    const newPropsList = propsList;
    newPropsList.current.push(props);
    if (callback) callback();

    return () => {
      newPropsList.current = propsList.current.filter((item) => item !== props);
      if (callback) callback();
    };
  },

  getProps() {
    const props = Object.assign({}, ...propsList.current);

    if (props.titleTemplate) {
      props.title = props.titleTemplate.replace('{title}', props.title);
    }

    return props;
  },
});
