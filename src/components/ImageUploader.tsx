import React, { useState } from 'react'

export default function ImageUploader() {
  const [preview, setPreview] = useState<string[]>([])

  const handleFile: React.ChangeEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return
    }

    const previews: string[] = []
    for (let i = 0; i < event.target.files.length; i++) {
      console.log(event.target.files.length)
      const file = event.target.files[i]

      if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
        continue
      }

      previews[i] = window.URL.createObjectURL(file)
    }

    setPreview(previews)
  }

  const canselFile = () => {
    setPreview([])
  }

  return (
    <div>
      <p>画像</p>
      <p>（ファイル形式はjpeg, png, jpgのみアップロード可能です。）</p>
      <label htmlFor='photo'>
        画像アップロード
        <input
          hidden
          multiple
          type='file'
          id='photo'
          name='photo'
          accept='image/*,.png,.jpg,.jpeg'
          onChange={handleFile}
        />
      </label>

      <br />
      {!!preview.length &&
        preview.map((url, i) => (
          <div key={i}>
            <p>投稿画像イメージ</p>
            <img src={url} alt='preview img' style={{ width: '100%' }} />
          </div>
        ))}
      <br />
      <button type='button' onClick={canselFile}>
        画像リセット
      </button>
    </div>
  )
}
