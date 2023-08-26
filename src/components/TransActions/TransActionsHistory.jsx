import PropTypes from 'prop-types';
import { Box } from 'App/Box';
import { TransActionHeader } from './TransActionsHeader';
import { TransActionsList } from './TransActionsList';

export const TransactionHistory = ({ items }) => {
  return (
    <Box
      as="table"
      mx="auto"
      my={5}
      width={10}
      boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) ">
      <TransActionHeader />
      <tbody>
        <TransActionsList items={items} />
      </tbody>
    </Box>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
