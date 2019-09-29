import React, { useState } from 'react';
import Meta, { Provider as MetaProvider } from '../../src/meta';


const MetaPreview = () => {
  const metaContext = {};
  const [metaTitle, setMetaTitle] = useState('');

  const logMeta = () => console.warn(metaContext.getProps());
  const handleMetaChange = (event) => setMetaTitle(event.target.value);
  let metaNode;
  if (metaTitle) metaNode = <Meta title={metaTitle} />;

  return (
    <section>
      <h2>Meta data</h2>
      <MetaProvider context={metaContext}>
        <Meta
          title="Tite"
          titleTemplate="=> {title} <="
          description="description"
          image="image"
        />
        {metaNode}
      </MetaProvider>

      <input value={metaTitle} onChange={handleMetaChange} />
      <br />
      <button onClick={logMeta} type="button">Log meta</button>
    </section>
  );
};

export default MetaPreview;
