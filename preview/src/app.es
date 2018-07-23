import React from 'react';

import EmailLink from '../../lib/email_link';
import PhoneLink from '../../lib/phone_link';
import PopupLink from '../../lib/popup_link';


const App = () => (
  <article>
    <h1>Links</h1>
    <ul>
      <li><EmailLink to="test@mail.com" /></li>
      <li><PhoneLink to="+7 777 777 7777" /></li>
      <li><PopupLink to="https://www.google.com/">Google</PopupLink></li>
    </ul>
  </article>
);

export default App;
