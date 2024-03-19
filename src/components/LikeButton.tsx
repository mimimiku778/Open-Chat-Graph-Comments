import { useState } from 'react'
import LikeButtonUi from './LikeButtonUi'
import { fetchApi } from '../utils/utils'

export type LikeBtnState = LikeBtnApi & { commentId: number }

export type LikeBtnHandler = (type: LikeBtnType) => void

export default function LikeButton(props: LikeBtnState) {
  const [state, setState] = useState<LikeBtnState>(props)

  const handler: LikeBtnHandler = async (type) => {
    const res = await fetchApi<LikeBtnApi>(
      `http://localhost/comment_reaction/${state.commentId}`,
      state.voted === '' ? 'POST' : 'DELETE',
      { type }
    )
    
    setState({ ...res, commentId: state.commentId })
  }

  return <LikeButtonUi {...{ ...state, handler }} />
}
