import React from "react";
import { v4 as uuidv4 } from "uuid";
import { StatisticProps, Space } from "antd";
import {
  StatsBoard,
  StatisticCard,
  CardStyle,
  ValueStyle,
} from "./tab-stats.styled";

interface TabStatsProps {
  statsList: StatisticProps[];
  loading: boolean;
}

const TabStatsUI: React.FC<TabStatsProps> = ({ statsList, loading }) => {
  return (
    <StatsBoard>
      <Space size={"large"}>
        {statsList.map(({ title, value }) => (
          <StatisticCard
            title={title}
            value={value}
            style={CardStyle}
            valueStyle={ValueStyle}
            key={uuidv4()}
            loading={loading}
          />
        ))}
      </Space>
    </StatsBoard>
  );
};

export default TabStatsUI;
