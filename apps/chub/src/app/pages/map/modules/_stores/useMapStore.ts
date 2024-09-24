import { create } from 'zustand';
import { Plot } from '@/entities';

interface State {
  selectedPlot? : Plot;
  isCombin : boolean;
}

interface Action {
  toggleCombin : () => void;
}

const init : State = {
  isCombin : false,
};



export const useMapStore = create<State & Action>(
  (set) => ({
      ...init,
      toggleCombin : () => {
        set( state => ({ ...state, isCombin : !state.isCombin }) )
      }
  })
);