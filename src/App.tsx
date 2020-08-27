import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import { Catalog, Cart } from './components';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  );
};

export default App;
