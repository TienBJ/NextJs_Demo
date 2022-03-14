import React, {FC} from 'react';
import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import {ThemeProvider} from 'next-themes'


const App: FC<AppProps> = ({ Component, pageProps } : AppProps) =>
<ThemeProvider attribute='class'>
<Layout>
    <Component {...pageProps} />
</Layout> 
</ThemeProvider>


export default wrapper.withRedux(App)  ;