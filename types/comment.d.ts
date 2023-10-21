export type Comment = {
  id: string;
  username: string;
  avatar: string;
  comment: string;
  date: number;
  likes?: number;
  dislikes?: number;
  commentParentId?: number;
  commentChild?: Comment[];
};
