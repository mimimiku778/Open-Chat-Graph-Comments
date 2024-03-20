import ConfirmDialogUi, { DialogParagraph } from './ConfirmDialogUi'

export default function ReportDialogUi({
  open,
  isLoading,
  result = 'unsent',
  handleClose,
  handleOk,
  id,
}: {
  open: boolean
  isLoading: boolean
  result?: FetchResultType
  handleClose: () => void
  handleOk: () => void
  id?: number
}) {
  return (
    <ConfirmDialogUi
      open={open}
      handleOk={handleOk}
      title={`コメントNo.${id}を通報`}
      cancelText={isLoading ? undefined : result !== 'unsent' ? '閉じる' : 'キャンセル'}
      okText={isLoading || result !== 'unsent' ? undefined : '通報する'}
      isLoading={isLoading}
      handleClose={isLoading ? undefined : handleClose}
    >
      {result === 'unsent' && <DialogParagraph>削除すべき不適切なコメントとして通報しますか？</DialogParagraph>}
      {result === 'done' && <DialogParagraph>通報しました</DialogParagraph>}
      {result === 'fail' && <DialogParagraph>サーバーとの通信に失敗しました</DialogParagraph>}
    </ConfirmDialogUi>
  )
}
