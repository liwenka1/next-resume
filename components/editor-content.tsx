import { useState, useEffect } from 'react'

import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import html2canvas from 'html2canvas'

interface EditorContentProps {
  setCanvasImage: (Canvasmage: CanvasImageSource | null) => void
}

const EditorContent: React.FC<EditorContentProps> = ({ setCanvasImage }) => {
  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null)

  // 编辑器内容
  const [html, setHtml] = useState('<h1>hello</h1>')

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {}

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...'
  }

  // 及时销毁 editor
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  useEffect(() => {
    const element = editor?.getEditableContainer() as HTMLElement
    if (element) html2canvas(element).then((canvas) => setCanvasImage(canvas))
  }, [html, editor, setCanvasImage])

  return (
    <div className="prose dark:prose-invert">
      <div className="border border-solid border-gray-300">
        <Toolbar
          className="border border-solid border-gray-300"
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="simple"
        />
        <Editor
          className="h-32 overflow-y-scroll"
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="simple"
        />
      </div>
    </div>
  )
}

export default EditorContent
