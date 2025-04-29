import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '@/entities/Profile';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from './EditableProfileCard';
import { $api } from '@/shared/api/api';

const profile: Profile = {
  id: '1',
  first: 'Ivan',
  lastname: 'Ivanov',
  age: 25,
  currency: Currency.EUR,
  country: Country.Belarus,
  city: 'Moscow',
  username: 'admin',
  avatar: '',
};

const options = {
  initialState: {
    profile: {
      data: profile,
      readonly: true,
      form: profile,
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
};

jest.mock('@/shared/api/api', () => ({
  $api: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn().mockResolvedValue({}),
    delete: jest.fn(),
  },
}));

describe('features/EditableProfileCard', () => {
  test('Режим рид онли должен переключиться', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
    expect(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    ).toBeInTheDocument();
  });
  test('При отмене значения обнуляться', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.CancelButton')
    );

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Ivan');
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'admin');
  });
  test('Должна появить ошибка', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph')
    ).toBeInTheDocument();
  });

  test('Если нет ошибок валидации, то на сервер должен уйти PUT request', async () => {
    componentRender(<EditableProfileCard id="1" />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.EditButton')
    );
  
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
  
    await userEvent.click(
      screen.getByTestId('EditableProfileCardHeader.SaveButton')
    );
  
    expect($api.put).toHaveBeenCalled();
  });
});
