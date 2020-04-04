import styled from 'styled-components';

export const DraggableProgramStyled = styled.article`
  display: ${(props) => (props.isMinimized ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.silver};
  padding: 4px;
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.theme.darkBlue};
  color: white;
  font-family: 'Fixedsys';
  width: 100%;
  height: 24px;

  &:before {
    content: '';
    display: inline-block;
    background-image: url(${(props) => props.processIcon});
    background-size: 18px;
    width: 18px;
    height: 18px;
  }

  > img {
    height: 18px;
    margin: 0 2px;
  }

  .actions {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }
`;

export const ActionStyled = styled.button`
  margin: 0 2px;
  width: 18px;
  background-color: ${(props) => props.theme.silver};
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  outline: none;

  &:before {
    content: url(${(props) => props.icon});
  }
`;
