import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Detail from '../components/Detail';

describe('Render components', () => {
  test('render DetailPage', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><Detail /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
