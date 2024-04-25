'use client'

import { useEffect } from 'react'

import html2canvas from 'html2canvas'

import { useUserinfoStore } from '@/store/use-userinfo-store'

const DefaultTemplate = () => {
  const { userinfo, setUserinfo, setUserinfoImage } = useUserinfoStore()
  const { age } = userinfo

  // useEffect(() => {
  //   const element = document.getElementById('htmlElement')
  //   if (element) html2canvas(element).then((canvas) => setUserinfoImage(canvas))
  // }, [userinfo, setUserinfoImage])

  return (
    <div id="htmlElement1">
      <span className="text-red-500">测试</span>
      <label>Age:</label>
      <input type="age" value={age} onChange={(e) => setUserinfo({ ...userinfo, age: e.target.value })} />
    </div>
  )
}

export default DefaultTemplate
