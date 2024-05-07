import { useEffect } from 'react'

import { Plate, PlateContent } from '@udecode/plate-common'
import html2canvas from 'html2canvas'

interface EditorContentProps {
  setCanvasImage: (Canvasmage: CanvasImageSource | null) => void
}

const EditorContent: React.FC<EditorContentProps> = ({ setCanvasImage }) => {
  useEffect(() => {
    const element = document.getElementById('htmlElement')
    console.log(element, 'element')

    // if (element) html2canvas(element).then((canvas) => setCanvasImage(canvas))
  }, [setCanvasImage])

  return (
    <div className="htmlElement">
      <Plate>
        <PlateContent placeholder="Type..." />
      </Plate>
    </div>
  )
}

export default EditorContent
