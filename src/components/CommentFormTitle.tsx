import { Box, Typography } from '@mui/material'

export default function CommentFormTitle() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
      <Typography variant="h2" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
        コメント
      </Typography>
      <Typography sx={{ fontSize: '12px' }} color="text.secondary" className="comment-term-text-color">
        ログイン不要・匿名投稿
      </Typography>
    </Box>
  )
}
