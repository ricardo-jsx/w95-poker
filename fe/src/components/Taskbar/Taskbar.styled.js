import styled from 'styled-components';

export const TaskbarStyled = styled.footer`
  height: 40px;
  width: 100vw;
  background-color: ${(props) => props.theme.silver};
  border-top: ridge 4px white;
  display: flex;
  align-items: center;
`;
