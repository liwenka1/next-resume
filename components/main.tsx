import CanvasContent from './canvas-content'
import LeftPanel from './left-panel'
import RightPanel from './right-panel'

const Main = () => {
  return (
    <main className="flex flex-1">
      <LeftPanel />
      <CanvasContent />
      <RightPanel />
    </main>
  )
}

export default Main
