import React from 'react';
import { render } from 'react-native-testing-library';

import SignIn from '../../hooks';

jest.mock('@react-navigation/native', () => {
  return { useNavigation: jest.fn() };
});

describe('SignIn page', () => {
  it('should contains email password inputs', () => {
    const { getByPlaceholder } = render(<SignIn />);

    // espera que o campo exista
    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
