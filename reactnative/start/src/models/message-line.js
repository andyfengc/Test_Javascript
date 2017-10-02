export class MessageLine {
  key: string;
  isRead: bool = false;
  readTime: Date;
  isStared: bool = false;
  staredTime: Date;
  isDeleted: bool = false;
  deletedTime: Date;
  //
  messageKey: string;
  recipientKey: string;

}
