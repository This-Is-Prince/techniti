// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import 'styles/globals.css';

import Footer from 'components/Footer';
import NavHeader from 'components/NavHeader';
import Wrapper from 'components/Wrapper';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavHeader />
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
			<video autoPlay loop muted className='w-screen h-screen -z-10 inset-0 scale-150 absolute' >
				<source src='/tech.mp4' />
			</video>
			<Footer />
		</>
	);
}
