import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

import html2canvas from 'html2canvas'

import { useUserinfoStore } from '@/store/use-userinfo-store'

function MyEditor() {
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

  const { setUserinfoImage } = useUserinfoStore()
  useEffect(() => {
    const element = editor?.getEditableContainer() as HTMLElement
    if (element) html2canvas(element).then((canvas) => setUserinfoImage(canvas))
  }, [setUserinfoImage, html, editor])

  return (
    <div className="prose dark:prose-invert" id="htmlElement">
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="simple"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="simple"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
    </div>
  )
}

export default MyEditor
