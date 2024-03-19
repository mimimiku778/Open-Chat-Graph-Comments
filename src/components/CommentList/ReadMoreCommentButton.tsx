import { Chip } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export default function ReadMoreCommentButton({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <Chip
      label="もっと見る"
      onClick={onClick}
      variant="outlined"
      sx={{ maxWidth: 'fit-content', m: 'auto' }}
      icon={<KeyboardArrowDownIcon />}
    />
  )
}
