import { createElement, useEffect, useMemo, useRef } from 'react'

import { Plate } from '@udecode/plate-common'
import html2canvas from 'html2canvas'
import { useDebounceFn } from 'ahooks'

import { Editor } from './plate-ui/editor'

interface EditorContentProps {
  setCanvasImage: (Canvasmage: CanvasImageSource | null) => void
}

const EditorContent: React.FC<EditorContentProps> = ({ setCanvasImage }) => {
  const initialValue = useMemo(
    () => [
      {
        type: 'p',
        children: [
          {
            text: 'This is editable plain text with react and history plugins, just like a <textarea>!'
          }
        ]
      }
    ],
    []
  )

  useEffect(() => {
    const element = document.getElementById('htmlElement')
    console.log(element, 'element')

    if (element) html2canvas(element).then((canvas) => setCanvasImage(canvas))
  }, [setCanvasImage, initialValue])

  const handleChange = (v: any) => {
    console.log(v)

    const element = document.getElementById('htmlElement')
    console.log(element, 'element')

    if (element) html2canvas(element).then((canvas) => setCanvasImage(canvas))
  }

  const { run } = useDebounceFn(handleChange, { wait: 500 })

  return (
    <div id="htmlElement">
      <Plate initialValue={initialValue} onChange={run}>
        <Editor placeholder="Type..." />
      </Plate>
    </div>
  )
}

export default EditorContent
