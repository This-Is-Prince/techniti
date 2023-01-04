// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer
			className='px-4 bg-bg-main h-[75px]'
		>
			<div className="max-w-6xl mx-auto flex items-center gap-x-10 h-full">
				<nav
					className='text-primary flex items-center gap-x-5'
				>
					<Link href='/about-us'>
                        About Us
					</Link>
					<Link href='/complain'>
                        Complain
					</Link>
					<Link href='/contact-us'>
                        Contact Us
					</Link>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;