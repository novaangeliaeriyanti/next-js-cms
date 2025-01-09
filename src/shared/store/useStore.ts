import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';

import { createAuthSlice } from './slices';
import type { AuthSlice } from './slices/createAuthSlice';

const useStore = create<
  AuthSlice 
>()((...a) => ({
  ...persist(createAuthSlice, {name: "user", storage: createJSONStorage(() => localStorage)})(...a),
}));

// const useStore = create((...a) => ({
//     ...persist(createAuthSlice, {name: "user", storage: createJSONStorage(() => localStorage)})(...a),
// }))

export default useStore;
