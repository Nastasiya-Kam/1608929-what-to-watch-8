type Comment = {
  id: number,
  userId: number,
  userName: string,
  rating: number,
  text: string,
  date: string,
}

type Comments = Comment[]

type CommentPost = {
  rating: number,
  text: string,
}

export type {Comment, Comments, CommentPost};
