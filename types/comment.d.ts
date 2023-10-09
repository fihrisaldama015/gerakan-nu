export type Comment = {
  id: number;
  username: string;
  avatar: string;
  comment: string;
  date: string;
  likes: number;
  dislikes: number;
  commentParentId?: number;
  commentChild?: Comment[];
};
