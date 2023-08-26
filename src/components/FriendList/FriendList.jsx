import { Box } from 'App/Box';
import PropTypes from 'prop-types';
import { FriendsAvatar, FriendsName, FriendsState } from './FriendList.styled';
import { BsFillCircleFill } from 'react-icons/bs';

export const FriendList = ({ friends }) => {
  return friends.map(friends => (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height={6}
      mt={2}
      boxShadow="0px 3px 1px -2px rgba(166, 9, 9, 0.264), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)"
      key={friends.id}>
      <FriendsState state={friends.isOnline}>
        <BsFillCircleFill />
      </FriendsState>
      <FriendsAvatar
        class="avatar"
        src={friends.avatar}
        alt="User avatar"
        width="48"
      />
      <FriendsName>{friends.name}</FriendsName>
    </Box>
  ));
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  state: PropTypes.bool,
};
