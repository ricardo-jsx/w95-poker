// using IIFE just to simulate a data coming from a server or somewhere else
const initialContent = `Hi, my name is Ricardo and I am the person who maintains this project in my free time. My original idea was to create a Poker game inspired with Windows 95 design, but I'm always doing other features instead hahaha.
Did you find a bug or have a nice idea of what would be incredible to have inside this project? Please, open an issue at Github and I will take a look :)

https://github.com/ricardo-jsx/w95-poker/issues
`;

export const readme = (function (initialContent) {
  let content = initialContent;

  return {
    content,
    setContent(newContent) {
      content = newContent;
    },
  };
})(initialContent);
