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

type CommentServer = {
  'id': number,
  'user': {
    'id': number,
    'name': string,
  },
  'rating': number,
  'comment': string,
  'date': string,
}

type CommentsServer = CommentServer[]

export type {Comment, Comments, CommentPost, CommentServer, CommentsServer};
