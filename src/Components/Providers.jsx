'use client'

import { AuthProvider } from '../context/AuthContext';
import { Provider } from 'react-redux';
import LoaderProvider from '../context/LoaderContext';
import store from '../redux/store';

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <LoaderProvider>
          {children}
        </LoaderProvider>
      </AuthProvider>
    </Provider>
  );
}
