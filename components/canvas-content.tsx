'use client'

import { Stage, Layer, Text, Image, Rect, Shape } from 'react-konva'
import html2canvas from 'html2canvas'

import { useUserInfoStore } from '@/store/use-userinfo-store'
import { useEffect, useRef, useState } from 'react'

const CanvasContent = () => {
  const { userInfo } = useUserInfoStore()
  const { name, age, phone } = userInfo
  const [image, setImage] = useState<CanvasImageSource>()

  useEffect(() => {
    const element = document.getElementById('htmlElement')
    if (element) html2canvas(element).then((canvas) => setImage(canvas))
  }, [])

  return (
    <div>
      <div id="htmlElement">
        <span className="text-red-500">测试</span>
      </div>
      <div>
        <Stage width={600} height={400}>
          <Layer>
            <Text text={name} y={20} fontSize={32} fontStyle="bold" width={600} align="center" verticalAlign="middle" />
          </Layer>
          <Layer>
            <Image image={image} alt=""></Image>
          </Layer>
          <Layer>
            {Object.values(userInfo).map((item, index) => (
              <Text key={index} text={item} x={200 + index * 100} y={80} fontSize={16} />
            ))}
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default CanvasContent
