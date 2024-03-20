import { useRecoilState } from 'recoil'
import { postedItemState } from '../state/postedItemState'
import { getDatetimeString } from '../utils/utils'
import { useCallback } from 'react'

export default function useSetPostedItem() {
  const [postedItem, setPostedItem] = useRecoilState(postedItemState)

  return useCallback((commentId: number, name: string, text: string) => setPostedItem([{
    comment: {
      id: 0,
      commentId,
      name,
      time: getDatetimeString(),
      text
    },
    like: {
      empathyCount: 0,
      insightsCount: 0,
      negativeCount: 0,
      voted: ''
    }
  }, ...postedItem]), [postedItem, setPostedItem])
}
