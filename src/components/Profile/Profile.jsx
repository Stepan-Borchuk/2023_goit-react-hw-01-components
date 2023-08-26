import { Description } from './Description';
import { Stats } from './Stats';
import PropTypes from 'prop-types';
import { Box } from 'App/Box';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      as="section"
      mx="auto"
      my={4}
      width={9}
      boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) ">
      <Description
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats stats={stats} />
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};