import { getCounter } from './getCounter';
import { StateSchema } from '@/app/providers/StoreProvider';

describe('getCounter', () => {
  test('should return counter value', () => {
    //DeepPartial вернет нужный участок стейта, игнорируя другие редюсеры
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
