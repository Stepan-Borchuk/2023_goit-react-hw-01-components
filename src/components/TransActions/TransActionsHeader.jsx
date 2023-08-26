import {TheadStyled} from './TransActions.styled'

export const TransActionHeader = () => {
  return (
    <TheadStyled>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TheadStyled>
  );
};
