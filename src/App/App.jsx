
import { Profile } from '../components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { Friends } from 'components/FriendList/Friend';
import { TransactionHistory } from 'components/TransActions/TransActionsHistory';
import user from '../components/Profile/user.json';
import data from '../components/Statistic/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransActions/transactions.json';
import { Box } from './Box';


export const App = () => {
  return (
    <Box
      color="text"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontFamily="body"
      fontWeight="body"
      fontSize="s"
      flexDirection="column">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={data} />

      <Friends friends={friends} />

      <TransactionHistory items={transactions} />
    </Box>
  );
};
