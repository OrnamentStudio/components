import React from 'react';
import PhoneLink from '../../src/phone_link';


const PhoneLinkPreview = () => (
  <section>
    <h2>Phone Link</h2>
    <PhoneLink to="+7 777 777 7777" />
    <br />
    <PhoneLink to="+7 777 777 7777">Custom text</PhoneLink>
  </section>
);

export default PhoneLinkPreview;
