/* eslint global-require: 0 */

import React from 'react';
import { render } from 'react-dom';

import './index.css';


const App = () => (
  <article className="root">
    {require('./components/email_link').default()}
    {require('./components/phone_link').default()}
    {require('./components/popup_link').default()}
    {require('./components/markdown').default()}
    {require('./components/meta').default()}
    {require('./components/progressive_image').default()}
  </article>
);

render(<App />, global.document.getElementById('root'));
