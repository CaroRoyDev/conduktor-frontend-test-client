import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Table } from "antd";

import { topicsDataToAntdArray } from "../../utils/topics.utils";
import {
  TabStats,
  ShowDataButton,
  SwitchStarredButton,
} from "../../components";
import { ShowDataButtonProps } from "../../components/show-data-button/show-data-button.component";
import { SwitchStarredButtonProps } from "../../components/switch-starred-button/switch-starred-button.component";

const GET_TOPICS = gql`
  query getTopics {
    topics {
      id
      title
      starred
      consumers {
        id
      }
      datas {
        timestamp
      }
    }
  }
`;

const TopicsPages = () => {
  const { data, loading } = useQuery(GET_TOPICS);
  const tableData = topicsDataToAntdArray(data?.topics);
  const statsList = [
    { value: tableData.length, title: "Topics" },
    { value: 287, title: "Partitions" },
  ];
  return (
    <>
      <section>
        <header>
          <h1>Topics</h1>
          <TabStats statsList={statsList} />
        </header>
        <main>
          <Table
            dataSource={tableData}
            columns={tableColumns}
            loading={loading}
          />
        </main>
      </section>
    </>
  );
};

const tableColumns = [
  {
    title: "",
    dataIndex: "showData",
    key: "showData",
    render: (to: ShowDataButtonProps["to"]) => {
      return to ? <ShowDataButton to={to} /> : null;
    },
  },
  {
    title: "Topic Name",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "",
    dataIndex: "starred",
    key: "starred",
    render: ({ isStarred, clickHandler }: SwitchStarredButtonProps) => (
      <SwitchStarredButton isStarred={isStarred} clickHandler={clickHandler} />
    ),
  },
  {
    title: "Count",
    dataIndex: "count",
    key: "count",
  },
  {
    title: "Consumers",
    dataIndex: "consumers",
    key: "consumers",
  },
];

export default TopicsPages;
