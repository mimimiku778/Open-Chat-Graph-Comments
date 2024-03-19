import { useState } from 'react'
import CommentFormUi from './CommentFormUi'
import { fetchApi } from '../utils/utils'

export default function CommentForm() {
  const [isSending, setIsSending] = useState(false)

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    setIsSending(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const text = formData.get('text')

    ;(async () => {
      await fetchApi<{ commentId: number }>(`http://localhost/comment/2`, 'POST', { name, text })
      setIsSending(false)
    })()
  }

  return <CommentFormUi onSubmit={onSubmit} isSending={isSending} />
}
