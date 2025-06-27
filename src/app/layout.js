import Head from 'next/head';
import MainLayout from '../Layout/MainLayout';
import Providers from '../Components/Providers';

import '../globals.css';
import '../bootstrap.min.css';
import '../Common.css';

import { Instrument_Sans, Inter, Lato, Nunito_Sans } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;


export const metadata = {
    title: 'Nritya',
    description: 'Nritya Web App',
};

const instrumentSans = Instrument_Sans({
    subsets: ['latin'],
    variable: '--font-instrument-sans',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const lato = Lato({
    subsets: ['latin'],
    variable: '--font-lato',
    display: 'swap',
    weight: ['100', '300', '400', '700', '900'],
})

const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: 'swap',
    weight: ['200', '400', '700', '1000'],
})

export default function RootLayout({
    children
}) {

    return (
        <html lang="en" className={`${instrumentSans.variable} ${inter.variable} ${lato.variable} ${nunitoSans.variable}`}>
            <Head>
                {/* <meta charset="utf-8" /> */}
                <link rel="icon" type='image/png' sizes='32x32' href="/logo.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                {/* <link rel="apple-touch-icon" href="./logo.png" />
                <link rel="manifest" href="/manifest.json" /> */}
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
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
                {/* Wittgenstein font (not available in next/font/google) */}
                {/* <link href="https://fonts.googleapis.com/css2?family=Wittgenstein:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" /> */}
            </Head>
            <body>
                <Providers>
                    <MainLayout>
                        {children}
                    </MainLayout>
                </Providers>
            </body>
        </html>
    )
}