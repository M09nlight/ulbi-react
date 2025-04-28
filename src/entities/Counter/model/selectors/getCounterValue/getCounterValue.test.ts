import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  test('', () => {
    //DeepPartial вернет нужный участок стейта, игнорируя другие редюсеры
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
