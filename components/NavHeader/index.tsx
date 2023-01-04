// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavHeader = () => {
	return (
		<header
			className='px-4 bg-bg-main shadow-md'
		>
			<div className="max-w-6xl mx-auto flex items-center gap-x-10">
				<div>
					<Image src='/techniti-logo.png' alt='techniti logo' width={75} height={75} />
				</div>
				<nav
					className='text-primary flex items-center gap-x-5'
				>
					<Link href='/'>
                        Home
					</Link>
					<Link href='/events'>
                        Events
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default NavHeader;