import React from 'react';
import { shallow } from 'enzyme';
import PasswordForgotPage from './PasswordForgotPage';

describe('PasswordForgotPage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<PasswordForgotPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
