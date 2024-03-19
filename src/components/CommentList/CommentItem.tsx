import { Theme } from '@emotion/react'
import { Button, ListItem, ListItemText, SxProps, Typography } from '@mui/material'
import LikeButton from '../LikeButton'
import { memo } from 'react'
import { formatDatetimeWithWeekdayFromMySql } from '../../utils/utils'

const listItemSx: SxProps<Theme> = {
  p: 0,
  flexDirection: 'column',
  alignItems: 'flex-start',
}

const reportSx: SxProps<Theme> = {
  p: 0,
  m: 0,
  minWidth: 0,
  ml: 1,
  fontSize: 'inherit',
}

export default memo(function CommentItem(
  props: CommentItemApi &
    LikeBtnApi & {
      onReport: (commentId: number) => void
    }
) {
  const { id, commentId, name, time, text, onReport, empathyCount, insightsCount, negativeCount, voted } = props

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
            {`${id} ${name} ${formatDatetimeWithWeekdayFromMySql(time)}`}
            <Button color="inherit" sx={reportSx} onClick={() => onReport(commentId)}>
              [通報]
            </Button>
          </Typography>
        }
        secondary={
          <Typography display="block" component="span" variant="body1" color="text.primary">
            {text}
          </Typography>
        }
      />
      <LikeButton {...{ empathyCount, insightsCount, negativeCount, voted, commentId }} />
    </ListItem>
  )
})
