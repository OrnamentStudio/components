import marked, { Renderer } from 'marked';
import escapeHtml from 'escape-html';

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
};

export const getHtml = (text) => ({ __html: marked(escapeHtml(text), options) });
export const isLocalLink = (url) => LOCAL_LINK_REGEX.test(url);
