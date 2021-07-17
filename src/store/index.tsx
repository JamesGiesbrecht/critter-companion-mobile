import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'

import { AccountType } from 'src/typescript/enums'

export interface StoreState {
  accountType: AccountType | null
  setAccountType: (newAccountType: AccountType | null) => void
}

const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      accountType: null,
      setAccountType: (newAccountType) => set({ accountType: newAccountType }),
    }),
    {
      name: 'account-storage',
      getStorage: () => AsyncStorage,
    },
  ),
)

export default useStore
