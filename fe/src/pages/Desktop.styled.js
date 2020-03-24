import styled from 'styled-components';

export const DesktopStyled = styled.div`
  background-color: ${(props) => props.theme.teal};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: hidden;
`;
