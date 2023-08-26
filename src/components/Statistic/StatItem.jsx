import { Item, Label, Percentage } from './Statistic.styled';

export const StatItem = ({ stats }) => {
  return stats.map(stats => (
    <Item key={stats.id}>
      <Label>{stats.label}</Label>
      <Percentage>{stats.percentage}</Percentage>
    </Item>
  ));
};
