import { Box, Card } from '@mui/material'
import CommentList from './components/CommentList'
import CommentForm from './components/CommentForm'
import RecaptchaText from './components/RecaptchaText'
import { containerSx } from './style/sx'
import { RecoilRoot } from 'recoil'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { appInitTagDto } from './config/appInitTagDto'
import CommentFormTitle from './components/CommentFormTitle'

const RECAPTCHA_SITE_KEY = '6LdqH54pAAAAAFqNSQgDdPWiCb7XucrP52gHfEsl'

export default function App() {
  return (
    <RecoilRoot>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY} scriptProps={{ async: true }}>
        <Box sx={containerSx}>
          {!!appInitTagDto.openChatId && <CommentFormTitle />}
          <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
            <CommentForm />
          </Card>
          <CommentList limit={10} />
          <RecaptchaText />
        </Box>
      </GoogleReCaptchaProvider>
    </RecoilRoot>
  )
}
