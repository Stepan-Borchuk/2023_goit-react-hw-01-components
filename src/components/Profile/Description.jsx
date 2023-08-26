import PropTypes from 'prop-types';
import { Tag } from './Description.styled';
import { Box } from 'App/Box';

export const Description = ({ username, avatar, tag, location }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p={4}>
      <Box
        as="img"
        width={8}
        height={8}
        bg="primary"
        borderRadius="avatar"
        src={avatar}
        alt="User avatar"
      />
      <Box
        as="h2"
        fontFamily="heading"
        mt={4}
        fontSize="l"
        fontWeight="heading">
        {username}
      </Box>
      <Tag>@{tag}</Tag>
      <Tag>{location}</Tag>
    </Box>
  );
};

Description.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};