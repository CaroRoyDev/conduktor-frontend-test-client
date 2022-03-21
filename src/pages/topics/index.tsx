import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Table, Button } from "antd";
import { FaPlus } from "react-icons/fa";
import { topicsDataToAntdArray } from "../../utils/topics.utils";
import {
  TabStats,
  ShowDataButton,
  SwitchStarredButton,
} from "../../components";
import { ShowDataButtonProps } from "../../components/show-data-button/show-data-button.component";
import { SwitchStarredButtonProps } from "../../components/switch-starred-button/switch-starred-button.component";
import { TranslationContent as T } from "../../context/multilingual.context";
import { NewTopicFormDrawer } from "../../components/topics";

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

const TopicsPages: React.FC = () => {
  const [drawerIsVisible, setDrawerIsVisible] = useState(false);

  const showDrawer = () => {
    setDrawerIsVisible(true);
  };

  const hideDrawer = () => {
    setDrawerIsVisible(false);
  };

  const { data, loading } = useQuery(GET_TOPICS);
  const tableData = topicsDataToAntdArray(data?.topics);
  const statsList = [
    { value: tableData.length, title: "Topics" },
    { value: 287, title: "Partitions" },
  ];

  return (
    <>
      <NewTopicFormDrawer visible={drawerIsVisible} onClose={hideDrawer} />

      <section>
        <header>
          <h1>Topics</h1>
          <TabStats statsList={statsList} />
          <Button onClick={showDrawer} type={"primary"} icon={<FaPlus />}>
            <T contentId={"createTopic"} />
          </Button>
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
