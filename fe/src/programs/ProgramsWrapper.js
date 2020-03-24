import ReactDOM from 'react-dom';

export default function ProgramsWrapper({ children }) {
  return ReactDOM.createPortal(children, document.querySelector('#programs'));
}
