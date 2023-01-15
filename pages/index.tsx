// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>techNITi</title>
				<meta name="description" content="Nit Jalandhar event Tech Niti" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<video autoPlay loop muted className='w-screen h-screen -z-10 inset-0 absolute' >
				<source src='/tech.mp4' />
			</video>
			<div
				className='flex flex-col items-center justify-center'
			>
				<h1 className='text-white font-bold text-2xl mt-16'>Tech NITI</h1>
				<p
					className='text-white text-base max-w-5xl text-justify mt-9'
				>
					We are excited to announce that Dr. B R Ambedkar National Institute of Technology, Jalandhar (NIT Jalandhar) is organizing north zone’s biggest annual techno-managerial fest from 25th to 28th February, 2023 in its campus and we’d love to see you among us at the event. There’s so much in it for everyone, from coding geeks to start-up enthusiasts, from gamers to designers, from drone shows to ATV races, from robo wars to a fashion parade. It’ll be one stop for all the technological and design enthusiasts from all the domains.
					Teams from colleges and universities across nation will be participating in the events. The prizes for winners are as exciting as the competitions. We thus invite you to complement us in our celebration of technology.
				</p>
			</div>
		</>
	);
}
