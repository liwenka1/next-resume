import { create } from 'zustand'

interface UseUserInfoState {
  userInfo: {
    name?: string
    age?: string
    phone?: string
  }
  setUserInfo: (userInfo: UseUserInfoState['userInfo']) => void
  name: string
  setName: (name: UseUserInfoState['name']) => void
}

export const useUserInfoStore = create<UseUserInfoState>((set) => ({
  userInfo: {
    name: '李文凯',
    age: '18',
    phone: '123412'
  },
  setUserInfo: (userInfo) => set({ userInfo }),
  name: '',
  setName: (name) => set({ name })
}))
