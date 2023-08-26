import styled from 'styled-components';

export const Tag = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondary};
`;