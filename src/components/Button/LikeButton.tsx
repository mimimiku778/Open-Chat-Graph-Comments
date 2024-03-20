import { useCallback, useRef, useState } from 'react'
import LikeButtonUi from './LikeButtonUi'
import { fetchApi } from '../../utils/utils'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { appInitTagDto } from '../../config/appInitTagDto'

export type LikeBtnState = LikeBtnApi & { commentId: number }

export type LikeBtnHandler = (type: LikeBtnType) => void

export default function LikeButton(props: LikeBtnState) {
  const sendingRef = useRef(false)
  const [state, setState] = useState<LikeBtnState>(props)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handler: LikeBtnHandler = useCallback(
    async (type) => {
      if (sendingRef.current) return
      sendingRef.current = true

      if (!executeRecaptcha) {
        console.error('executeRecaptcha is undefined')
        return
      }

      try {
        const token = await executeRecaptcha('like')
        const res = await fetchApi<LikeBtnApi>(
          `${appInitTagDto.baseUrl}/comment_reaction/${state.commentId}`,
          state.voted === '' ? 'POST' : 'DELETE',
          { type, token }
        )
        setState({ ...res, commentId: state.commentId })
      } finally {
        sendingRef.current = false
      }
    },
    [executeRecaptcha, state.commentId, state.voted]
  )

  return <LikeButtonUi {...{ ...state, handler }} />
}
