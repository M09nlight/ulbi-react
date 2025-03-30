import 'app/styles/index.scss';
import { StoryFn } from '@storybook/react'; // Removed Story import
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
