'use client'

import { useUserInfoStore } from '@/store/use-userinfo-store'

const RightPanel = () => {
  const { userInfo, setUserInfo } = useUserInfoStore()
  const { name, age, phone } = userInfo

  return (
    <div>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })} />
        <br />
        <label>Age:</label>
        <input type="age" value={age} onChange={(e) => setUserInfo({ ...userInfo, age: e.target.value })} />
        <br />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })} />
      </form>
    </div>
  )
}

export default RightPanel
