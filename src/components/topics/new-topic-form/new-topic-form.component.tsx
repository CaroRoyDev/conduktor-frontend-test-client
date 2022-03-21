import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Drawer, Space, Form, Input, Button } from "antd";
import { TranslationContent as T } from "../../../context/multilingual.context";

export const ADD_TOPIC = gql`
  mutation AddTopic($topicTitle: String!) {
    addTopic(topicTitle: $topicTitle) {
      code
      success
      message
      topic {
        title
      }
    }
  }
`;
interface NewTopicFormDrawerProps {
  visible: boolean;
  onClose: () => void;
}

const NewTopicFormDrawer: React.FC<NewTopicFormDrawerProps> = ({
  visible,
  onClose,
}) => {
  const [title, setTitle] = useState("Topic 1");
  const [addTopic] = useMutation(ADD_TOPIC, {
    variables: { topicTitle: title },
    onCompleted: (data) => {
      console.log("Successfully added :", data);
    },
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.length === 0) return;
    addTopic();
    onClose();
  };

  return (
    <Form>
      <Drawer
        title="Topic"
        placement="right"
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>
              <T contentId={"cancel"} />
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              <T contentId={"add"} />
            </Button>
          </Space>
        }
      >
        <Form.Item
          name="title"
          label={<T contentId={"topicName"} />}
          rules={[{ required: true, message: <T contentId={"fillName"} /> }]}
        >
          <Input value={title} onChange={handleChange} />
        </Form.Item>
      </Drawer>
    </Form>
  );
};

export default NewTopicFormDrawer;
