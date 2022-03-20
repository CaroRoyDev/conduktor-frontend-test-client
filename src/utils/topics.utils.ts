import { TopicInterface } from "../interfaces/topic.interfaces";
import { v4 as uuidv4 } from "uuid";

export const topicsDataToAntdArray = (topics: TopicInterface[]): any[] => {
  const tableDataSource: any[] = [];

  if (!topics) return tableDataSource;

  topics.forEach((topic) => {
    const { title, starred, consumers, datas, id } = topic;
    const tableEntry = {
      title: title,
      starred: { isStarred: starred },
      consumers: consumers.length,
      count: datas.length,
      showData: `${id}/topic-data`,
      key: uuidv4(),
    };

    tableDataSource.push(tableEntry);
  });

  return tableDataSource;
};
