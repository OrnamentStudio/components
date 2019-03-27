import React from 'react';

import EmailLink from '../../lib/email_link';
import PhoneLink from '../../lib/phone_link';
import PopupLink from '../../lib/popup_link';
import ProgressiveImage from '../../lib/progressive_image';


const App = () => (
  <article>
    <h1>Links</h1>
    <ul>
      <li><EmailLink to="test@mail.com" /></li>
      <li><PhoneLink to="+7 777 777 7777" /></li>
      <li><PopupLink to="https://www.google.com/">Google</PopupLink></li>
    </ul>

    <h1>Misc</h1>
    <div>
      <ProgressiveImage
        preview="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSq_RT13Nqp6OL0OmrTa_061ha3wq8nq0c8OrcyCE05jGCB6Vf"
        src="https://investautos.com/wp-content/uploads/2016/12/hollywood-cowboy.jpg"
      />
    </div>
  </article>
);

export default App;
