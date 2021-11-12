type Comment = {
  id: number,
  userId: number,
  userName: string,
  rating: number,
  text: string,
  date: string,
}

type Comments = Comment[]

export type {Comment, Comments};
