import styled from 'styled-components';

export const TaskbarStyled = styled.footer`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.silver};
  height: 36px;
  width: 100vw;
  padding: 0 2px;
  border-top: ridge 4px white;
  z-index: 999;
  padding-left: 80px;
`;

export const ProcessStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 2px;
  border: 2px inset ${(props) => props.theme.silver};
  width: 170px;
  font-family: Fixedsys;
  font-weight: bold;
  outline: none;

  &:active {
    border-style: outset;
  }

  &:before {
    content: '';
    display: inline-block;
    background-image: url(${(props) => props.processIcon});
    background-size: 18px;
    width: 18px;
    height: 18px;
  }
`;
