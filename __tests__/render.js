import MarkdownIt from 'markdown-it';
import MarkdownItEmoji from 'markdown-it-emoji';

const md = new MarkdownIt();
const render = (source) => md.render(source);

md.use(MarkdownItEmoji);

export default render;
