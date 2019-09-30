import React from 'react';
import Markdown from '../../src/markdown';
import '../../src/markdown/index.css';


const text = `
  # Title

  - List item
  - List item


  _italic_

  **bold**

  [google](https://www.google.com)

  [internal link](/link)

  <script>alert('XSS atack')</script>
`;

const handleLinkClick = (link) => console.warn('Link clicked:', link);

const MarkdownPreview = () => (
  <section>
    <h2>Markdown</h2>
    <Markdown text={text} onLinkClick={handleLinkClick} />
  </section>
);

export default MarkdownPreview;
