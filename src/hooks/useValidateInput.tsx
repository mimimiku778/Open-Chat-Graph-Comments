import React, { useCallback, useRef, useState } from 'react'

export default function useValidateInput(textLent: number) {
  const [value, setValue] = useState<string>('')
  const isCompositionStart = useRef<boolean>(false)

  const commitStr = useCallback(() => {
    setValue((prevText: string): string => prevText.substring(0, textLent))
  }, [textLent])

  const onCompositionStart = useCallback((): void => {
    isCompositionStart.current = true
  }, [])

  const onCompositionEnd = useCallback((): void => {
    isCompositionStart.current = false
    commitStr()
  }, [commitStr])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(e.target.value)
      if (!isCompositionStart.current) {
        commitStr()
      }
    },
    [commitStr]
  )

  return {
    onCompositionStart,
    onCompositionEnd,
    onChange,
    value,
  }
}
