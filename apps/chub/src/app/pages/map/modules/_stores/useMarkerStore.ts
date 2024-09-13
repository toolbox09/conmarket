

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toggleAt } from '@repo/es';
import { produce } from 'immer';
import { MarkerType } from './useMarkerStore.type';


interface State {
  types : MarkerType[];
}

interface Action {
  toggleType : ( type : MarkerType ) => void;
}

const init : State = {
  types : ['TRADE', 'ITEM'],
};

export const useMarkerStore = create(
  persist<State & Action>(
  (set) => ({
      ...init,
      toggleType : ( type : MarkerType ) => {
        set(state => (produce(state, draft => {
          draft.types = toggleAt(draft.types, type, ( item ) => item === type );
        })));
      }
  }),
  {
    name: 'conmarket-marker-storage', // localStorage에 저장될 key 이름
    getStorage: () => localStorage, // localStorage 사용
  }
));