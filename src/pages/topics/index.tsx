import React from "react";
import { Table } from "antd";
import { TabStats, ShowDataButton } from "../../components";
import { ShowDataButtonProps } from "../../components/show-data-button/show-data-button.component";
const TopicsPages = () => {
  return (
    <>
      <section>
        <header>
          <h1>Topics</h1>
          <TabStats statsList={statsList} />
        </header>
        <main>
          <Table dataSource={tableData} columns={tableColumns} />
        </main>
      </section>
    </>
  );
};

const statsList = [
  { value: 10, title: "Topics" },
  { value: 287, title: "Partitions" },
];

const tableData = [
  {
    key: "1",
    title: "Topic 1",
    count: 100,
    consumers: 2,
    starred: "*",
    showData: "1/topic-data",
  },
  {
    key: "2",
    title: "John",
    count: 10,
    consumers: 5,
    showData: "2/topic-data",
  },
];

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
