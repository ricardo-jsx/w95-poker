// using IIFE just to simulate a data coming from a server or somewhere else
const initialContent = 'Hello World!';

export const readme = (function (initialContent) {
  let content = initialContent;

  return {
    content,
    setContent(newContent) {
      content = newContent;
    },
  };
})(initialContent);
