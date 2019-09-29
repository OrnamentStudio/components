import React from 'react';
import PopupLink from '../../src/popup_link';


const PopupLinkPreview = () => (
  <section>
    <h2>Safe external link</h2>
    <PopupLink to="https://www.google.com">Google</PopupLink>
    <br />
    <PopupLink to="https://www.google.com" follow>Google follow</PopupLink>
  </section>
);

export default PopupLinkPreview;
