import { Box, CssBaseline } from '@mui/material'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import { containerSx } from './style/sx'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={containerSx}>
        <CommentForm />
        <CommentList limit={30} />
      </Box>
    </>
  )
}
