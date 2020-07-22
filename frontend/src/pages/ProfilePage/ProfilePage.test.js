import React from 'react';
import { shallow } from 'enzyme';
import ProfilePage from './ProfilePage';

describe('ProfilePage', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
