'use client'

import MyEditor from './editor'
import { useUserinfoStore } from '@/store/use-userinfo-store'

const LeftPanel = () => {
  const { userinfo, setUserinfo } = useUserinfoStore()
  const { name, age, phone } = userinfo

  return (
    <div className="w-1/2">
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setUserinfo({ ...userinfo, name: e.target.value })} />
        <br />
        <label>Age:</label>
        <input type="age" value={age} onChange={(e) => setUserinfo({ ...userinfo, age: e.target.value })} />
        <br />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setUserinfo({ ...userinfo, phone: e.target.value })} />
      </form>
      <MyEditor />
    </div>
  )
}

export default LeftPanel
