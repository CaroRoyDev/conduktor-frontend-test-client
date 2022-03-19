import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StatisticProps } from "antd";
import {
  StatsBoard,
  StatistiStyles,
  CardStyle,
  ValueStyle,
} from "./tab-stats.styled";

interface TabStatsProps {
  statsList: StatisticProps[];
}

const TabStatsUI: React.FC<TabStatsProps> = ({ statsList }) => {
  return (
    <StatsBoard>
      {statsList.map(({ title, value }) => (
        <StatistiStyles
          title={title}
          value={value}
          style={CardStyle}
          valueStyle={ValueStyle}
          key={uuidv4()}
        />
      ))}
    </StatsBoard>
  );
};

export default TabStatsUI;
