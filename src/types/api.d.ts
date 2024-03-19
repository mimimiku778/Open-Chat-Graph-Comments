type CommentItemApi = {
  id: number
  commentId: number
  name: string
  time: string
  text: string
}

type LikeBtnType = 'empathy' | 'insights' | 'negative'

type LikeBtnApi = {
  empathyCount: number
  insightsCount: number
  negativeCount: number
  voted: LikeBtnType | ''
}

type CommentListApi = {
  comment: CommentItemApi
  like: LikeBtnApi
}[]

interface ErrorResponse {
  error: {
    code: string
    message: string
  }
}