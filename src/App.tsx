import { Box, Card } from '@mui/material'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import RecaptchaText from './components/RecaptchaText'
import { containerSx } from './style/sx'
import { RecoilRoot } from 'recoil'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import CommentFormTitle from './components/CommentFormTitle'

const RECAPTCHA_SITE_KEY = '6LdqH54pAAAAAFqNSQgDdPWiCb7XucrP52gHfEsl'

export default function App() {
  return (
    <RecoilRoot>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} scriptProps={{ async: true }}>
        <Box sx={containerSx}>
          <CommentList limit={100} />
          <CommentFormTitle />
          <Card variant="outlined" sx={{ p: 2 }}>
            <CommentForm />
          </Card>
          <RecaptchaText />
        </Box>
      </GoogleReCaptchaProvider>
    </RecoilRoot>
  )
}
