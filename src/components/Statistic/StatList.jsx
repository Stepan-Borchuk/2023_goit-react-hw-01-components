import { StatItem } from './StatItem';
import { Box } from 'App/Box';

export const StatList = ({stats}) => {
  return (
    <Box display="flex">
      <StatItem stats={stats}/>
    </Box>
  );
};
