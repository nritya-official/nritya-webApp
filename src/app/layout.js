'use client'
import Head from 'next/head';
import { AuthProvider } from '../context/AuthContext';
import { Provider } from 'react-redux';
import LoaderProvider from '../context/LoaderContext';
import store from '../redux/store';
import MainLayout from '../Layout/MainLayout';

import '../../src/index.css';
import '../../src/bootstrap.min.css'
import '../utils/fontawesome';

// export const metadata = {
//     title: 'Nritya',
//     description: 'Nritya Web App',
// };

export default function RootLayout({
    children
}) {
    
    return (
        <html lang="en">
            <Head>
                <meta charset="utf-8" />
                <link rel="icon" href="./logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="./logo.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                    crossOrigin="anonymous"
                />
            </Head>
            <body>
                <Provider store={store}>
                    <AuthProvider>
                        <LoaderProvider>
                            <MainLayout>
                                {children}
                            </MainLayout>
                        </LoaderProvider>
                    </AuthProvider>
                </Provider>
            </body>
        </html>
    )
}