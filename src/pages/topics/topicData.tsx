import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { PageHeader, List } from "antd";

const GET_TOPIC_DATAS = gql`
  query Query($topicId: ID!) {
    topic(id: $topicId) {
      title
      datas {
        id
        timestamp
        key
        content
      }
    }
  }
`;

const TopicDataPage: React.FC = () => {
  const routeParams = useParams();
  const topicId = routeParams.id;
  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_TOPIC_DATAS, {
    variables: { topicId },
  });

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => {
          navigate("/topics");
        }}
        title={`Consuming from Topic : ${data?.topic?.title}`}
      />
      <h1> </h1>
      <List
        dataSource={data?.topic.datas}
        loading={loading}
        bordered={true}
        renderItem={(data: any) => {
          const date = new Date(parseInt(data.timestamp, 10)).toLocaleString();
          return (
            <List.Item key={data.id}>
              <List.Item.Meta title={date} description={`#${data.key}`} />
              {data.content}
            </List.Item>
          );
        }}
      />
    </>
  );
};

export default TopicDataPage;
