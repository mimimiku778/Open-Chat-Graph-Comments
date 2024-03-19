import CommentItemUi from './CommentList/CommentItem'
import useSWRInfinite from 'swr/infinite'
import { LinearProgress, List } from '@mui/material'
import { containerSx } from '../style/sx'
import { fetchApi } from '../utils/utils'
import ReadMoreCommentButton from './CommentList/ReadMoreCommentButton'
import EmptyListItem from './CommentList/EmptyListItem'

const onReport = (commentId: number) => {
  console.log(commentId)
}

export default function CommentList({ limit }: { limit: number }) {
  const { data, setSize, size, isValidating } = useSWRInfinite<CommentListApi>(
    (i: number) => `http://localhost/comment/2?page=${i}&limit=${limit}`,
    fetchApi<CommentListApi>
  )

  return (
    <>
      {data && (
        <List sx={containerSx}>
          {data[0].length === 0 && <EmptyListItem />}
          {data.flat().map((el, i) => (
            <CommentItemUi {...{ ...el.comment, ...el.like, onReport }} key={i} />
          ))}
        </List>
      )}
      {data && data[data.length - 1].length >= limit && <ReadMoreCommentButton onClick={() => setSize(size + 1)} />}
      {isValidating && <LinearProgress />}
    </>
  )
}
