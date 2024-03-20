import { Theme } from '@emotion/react'
import { ListItem, ListItemText, SxProps, Typography } from '@mui/material'
import LikeButton from '../Button/LikeButton'
import { memo } from 'react'
import { formatDatetimeWithWeekdayFromMySql } from '../../utils/utils'
import ReportButton from '../Button/ReportButton'

const listItemSx: SxProps<Theme> = {
  p: 0,
  flexDirection: 'column',
  alignItems: 'flex-start',
}

export default memo(function CommentItem(props: CommentItemApi & LikeBtnApi) {
  const { id, commentId, name, time, text, userId, empathyCount, insightsCount, negativeCount, voted } = props

  return (
    <ListItem sx={listItemSx}>
      <ListItemText
        sx={{ m: 0 }}
        primary={
          <Typography
            display="block"
            component="span"
            variant="body2"
            color="text.secondary"
            sx={{ mb: '4px', fontSize: '12px' }}
          >
            {`${id}: `}
            <b>{`${name ? name : '匿名'}`}</b>
            {` ${formatDatetimeWithWeekdayFromMySql(time)} ID:${userId}`}
            <ReportButton id={id} commentId={commentId} />
          </Typography>
        }
        secondary={
          <Typography
            display="block"
            component="span"
            variant="body1"
            color="text.primary"
            sx={{ wordBreak: 'break-all', whiteSpace: 'pre-line' }}
          >
            {text.replace(/(\r?\n|\r){3,}/g, '\n\n')}
          </Typography>
        }
      />
      <LikeButton {...{ empathyCount, insightsCount, negativeCount, voted, commentId }} />
    </ListItem>
  )
})
