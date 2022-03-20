export interface TopicInterface {
  id: number | string;
  title: string;
  starred: boolean;
  consumers: (number | string)[];
  datas: string[];
}
