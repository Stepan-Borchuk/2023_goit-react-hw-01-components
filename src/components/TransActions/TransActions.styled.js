import styled from 'styled-components';



export const TdataStyled = styled.td`
  text-align: center;
  height: ${p => p.theme.space[6]}px;
  width: ${p => p.theme.space[8]}px;
`;

export const TrowStyled = styled.tr`
  height: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[8]}px;
  background-color: ${p => (p.index % 2 ? p.theme.colors.background :  p.theme.colors.muted) };
`;

export const TheadStyled = styled.thead`
  height: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[8]}px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.muted};
`;

