'use client'

import { useEffect } from 'react'

import html2canvas from 'html2canvas'

import { useUserinfoStore } from '@/store/use-userinfo-store'

const DefaultTemplate = () => {
  const { setUserinfoImage } = useUserinfoStore()
  useEffect(() => {
    const element = document.getElementById('htmlElement')
    if (element) html2canvas(element).then((canvas) => setUserinfoImage(canvas))
  }, [setUserinfoImage])

  return (
    <div id="htmlElement">
      <span className="text-red-500">测试</span>
    </div>
  )
}

export default DefaultTemplate
