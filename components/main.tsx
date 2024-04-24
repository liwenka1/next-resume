import CanvasContent from './canvas-content'
import LeftPanel from './left-panel'

const Main = () => {
  return (
    <main className="flex flex-1 justify-between">
      <LeftPanel />
      <CanvasContent />
    </main>
  )
}

export default Main
