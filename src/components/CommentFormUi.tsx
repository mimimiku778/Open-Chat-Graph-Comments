import { Theme } from '@emotion/react'
import { Box, TextField, Stack, Button, SxProps } from '@mui/material'
import useValidateInput from '../hooks/useValidateInput'
import { validateStringNotEmpty as isEmpty } from '../utils/utils'
import GradientCircularProgress from './GradientCircularProgress'

const textFieldSx: SxProps<Theme> = {
  width: '100%',
}

export default function CommentFormUi({
  onSubmit,
  isSending,
}: {
  onSubmit: React.FormEventHandler<HTMLFormElement>
  isSending: boolean
}) {
  const nameProps = useValidateInput(20)
  const textProps = useValidateInput(1000)

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { mt: 1, mb: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField label="ニックネーム（任意）" variant="standard" sx={textFieldSx} name="name" {...nameProps} />
      <TextField
        label="オープンチャットについてコメントする"
        variant="standard"
        multiline
        minRows={4}
        sx={textFieldSx}
        name="text"
        {...textProps}
      />
      <Stack direction="row" spacing={2} justifyContent="flex-end" height={'40px'}>
        {isSending ? (
          <GradientCircularProgress />
        ) : (
          <Button type="submit" variant="contained" disabled={!isEmpty(textProps.value)}>
            投稿する
          </Button>
        )}
      </Stack>
    </Box>
  )
}
