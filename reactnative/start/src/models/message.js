export class Message {
  key : string;
  text: string;
  createdTime: Date;
  senderKey: string;
  taskKey: string;
  parentKey: string;
  threadKey: string;
  messageLineKeys: [];
  childMessageKeys:[];
}
