import marked, { Renderer } from 'marked';


const LOCAL_LINK_REGEX = /^\//;

const renderer = new Renderer();
renderer.link = (href, title, text) => (
  `<a href="${href}" target="_blank" rel="noreferrer noopener">${text}</a>`
);

const options = {
  renderer,
  gfm: false,
  tables: false,
  breaks: true,
  sanitize: true,
};

export const getHtml = (text) => ({ __html: marked(text, options) });
export const isLocalLink = (url) => LOCAL_LINK_REGEX.test(url);
