import { Stat, StatElem, StatLabel, StatQuntity } from './Stats.styled';

export const Stats = ({ stats }) => {
  return (
    <Stat>
      <StatElem>
        <StatLabel>Followers</StatLabel>
        <StatQuntity>{stats.followers}</StatQuntity>
      </StatElem>
      <StatElem>
        <StatLabel>Views</StatLabel>
        <StatQuntity>{stats.views}</StatQuntity>
      </StatElem>
      <StatElem>
        <StatLabel>Likes</StatLabel>
        <StatQuntity>{stats.likes}</StatQuntity>
      </StatElem>
    </Stat>
  );
};