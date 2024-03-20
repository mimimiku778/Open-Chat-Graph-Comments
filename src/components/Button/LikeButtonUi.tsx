import { Button, Stack, Typography } from '@mui/material'
import { LikeBtnHandler, LikeBtnState } from './LikeButton'
import { memo } from 'react'

type BtnTypoProps = {
  text: string | number
  size: string
  color?: string
}

function BtnTypo({ text, size, color }: BtnTypoProps) {
  return (
    <Typography display="block" component="span" fontSize={size} color={color}>
      {text}
    </Typography>
  )
}

type BtnProps = {
  emoji: string
  title: string
  count: number
  voted: boolean
  handler: LikeBtnHandler
  type: LikeBtnType
  disabled: boolean
}

function Btn(props: BtnProps) {
  const { emoji, title, count, voted, handler, type, disabled } = props
  const textColor = voted ? undefined : 'text.secondary'

  return (
    <Button color="error" onClick={() => handler(type)} disabled={disabled}>
      <Stack spacing={0.5} direction="row" alignItems="center">
        <BtnTypo text={emoji} size="1rem" />
        <Stack direction="column" alignItems="flex-start">
          <BtnTypo text={title} size="11px" color={textColor} />
          <BtnTypo text={count} size="14px" color={textColor} />
        </Stack>
      </Stack>
    </Button>
  )
}

type BtnWrapper = { emoji: string; title: string; count: number; type: LikeBtnType }

export default memo(function LikeButtonUi(props: LikeBtnState & { handler: LikeBtnHandler }) {
  const { empathyCount, insightsCount, negativeCount, voted, handler } = props

  const BtnWrapper = (props: BtnWrapper) => (
    <Btn {...{ ...props, handler }} voted={voted === props.type} disabled={!!voted && voted !== props.type} />
  )

  return (
    <Stack spacing={1} direction="row" sx={{ ml: 'auto', mt: 0.5 }}>
      <BtnWrapper emoji="🙂" title="共感した" count={empathyCount} type={'empathy'} />
      <BtnWrapper emoji="😯" title="なるほど" count={insightsCount} type={'insights'} />
      <BtnWrapper emoji="🤔" title="うーん" count={negativeCount} type={'negative'} />
    </Stack>
  )
})
