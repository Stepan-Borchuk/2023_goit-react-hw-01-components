import { Box } from 'App/Box';
import PropTypes from 'prop-types';
import { StatList } from './StatList';
import { Tittle } from './Tittle';

export const Statistic = ({ title, stats }) => {
  return (
    <Box
      as="section"
      bg="background"
      mx="auto"
      my={4}
      width={9}
      boxShadow="0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12) ">
      {title && <Tittle title={title} />}

      <StatList stats={stats} />
    </Box>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
