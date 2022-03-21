import styled from "styled-components";
import { Statistic } from "antd";
const StatsBoard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-gap: 2rem;
`;

// Override for antd stat title not "stylable" through props
const StatisticCard = styled(Statistic)`
  background-color: #f7f7f7;
  border-radius: 0.5em;
  .ant-statistic-title {
    font-size: inherit;
  }
`;

const ValueStyle = {
  fontWeight: 700,
  fontSize: "1.5em",
};

const CardStyle = {
  padding: "1rem 2rem",
  textAlign: "center" as const,
  fontSize: "1.2rem",
};

export { StatsBoard, StatisticCard, ValueStyle, CardStyle };
