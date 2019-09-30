import React from 'react';
import EmailLink from '../../src/email_link';


const EmaiLinkPreview = () => (
  <section>
    <h2>Email Link</h2>
    <EmailLink to="test@email.com" />
    <br />
    <EmailLink to="test@email.com">Custom text</EmailLink>
  </section>
);

export default EmaiLinkPreview;
