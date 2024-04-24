import { create } from 'zustand'

interface UseUserinfoState {
  userinfo: {
    name?: string
    age?: string
    phone?: string
  }
  setUserinfo: (userinfo: UseUserinfoState['userinfo']) => void
  userinfoImage: CanvasImageSource | null
  setUserinfoImage: (userinfoImage: UseUserinfoState['userinfoImage']) => void
}

export const useUserinfoStore = create<UseUserinfoState>((set) => ({
  userinfo: {
    name: '李文凯',
    age: '18',
    phone: '123412'
  },
  setUserinfo: (userinfo) => set({ userinfo }),
  userinfoImage: null,
  setUserinfoImage: (userinfoImage) => set({ userinfoImage })
}))
