'use client'

import { Stage, Layer, Text, Image } from 'react-konva'

import { useUserinfoStore } from '@/store/use-userinfo-store'

const CanvasContent = () => {
  const { userinfo, userinfoImage } = useUserinfoStore()

  if (userinfoImage) {
    return (
      <div className="w-1/2">
        <Stage width={600} height={400}>
          <Layer>
            <Text
              text={userinfo.name}
              y={20}
              fontSize={32}
              fontStyle="bold"
              width={600}
              align="center"
              verticalAlign="middle"
            />
          </Layer>
          <Layer>
            <Image image={userinfoImage} alt=""></Image>
          </Layer>
          <Layer>
            {Object.values(userinfo).map((item, index) => (
              <Text key={index} text={item} x={200 + index * 100} y={80} fontSize={16} />
            ))}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default CanvasContent
