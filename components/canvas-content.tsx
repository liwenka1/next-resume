'use client'

import { useRef, useState } from 'react'
import Konva from 'konva'
import { Stage, Layer, Line, Text } from 'react-konva'

type Lines = { tool: string; points: number[] }[]

const CanvasContent = () => {
  const [tool, setTool] = useState('pen')
  const [lines, setLines] = useState<Lines>([])
  const isDrawing = useRef(false)

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    isDrawing.current = true
    const pos = e.target.getStage()?.getPointerPosition()
    if (pos) setLines([...lines, { tool, points: [pos.x, pos.y] }])
  }

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return
    }
    const stage = e.target.getStage()
    if (stage) {
      const point = stage.getPointerPosition()
      let lastLine = lines[lines.length - 1]
      // add point
      if (point) lastLine.points = lastLine.points.concat([point.x, point.y])
      // replace last
      lines.splice(lines.length - 1, 1, lastLine)
      setLines(lines.concat())
    }
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  return (
    <>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          <Text text="Just start drawing" x={5} y={30} />
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke="#df4b26"
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === 'eraser' ? 'destination-out' : 'source-over'}
            />
          ))}
        </Layer>
      </Stage>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value)
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
    </>
  )
}

export default CanvasContent
