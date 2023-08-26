import { Box } from 'App/Box';
import PropTypes from 'prop-types';
import { FriendList } from './FriendList';

export const Friends = ({ friends }) => {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      flexDirection="column"
      mx="auto"
      my={4}
      width={9}>
      <FriendList friends={friends} />
    </Box>
  );
};

Friends.propTypes = {
  friends: PropTypes.array,
};
