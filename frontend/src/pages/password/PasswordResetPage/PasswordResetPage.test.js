import React from 'react';
import { shallow } from 'enzyme';
import PasswordResetPage from './PasswordResetPage';

describe('PasswordResetPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<PasswordResetPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
