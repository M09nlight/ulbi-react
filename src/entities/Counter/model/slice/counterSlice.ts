import { buildSlice } from '@/shared/lib/store';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
  value: 0,
};

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice;
