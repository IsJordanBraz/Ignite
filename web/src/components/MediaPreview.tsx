'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export default function MediaPreview() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) {
      return
    }
    const previewUrl = URL.createObjectURL(files[0])
    setPreview(previewUrl)
  }
  return (
    <>
      <input
        onChange={(value) => onFileSelected(value)}
        type="file"
        name="coverUrl"
        accept="image/*"
        id="media"
        className="invisible h-0 w-0"
      />
      {preview && (
        <Image
          src={preview}
          width={100}
          height={100}
          alt="preview da imagem selecionada"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
