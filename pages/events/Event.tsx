// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { IEvent } from '.';

interface IEventProps extends IEvent {

}

const Event: FC<IEventProps> = (props) => {
	const { id } = props;
	return (
		<Link
			href={`/events/${id}`}
			className='rounded-md bg-bg-main text-white max-w-xs p-4 block'
		>
			<article
				className='flex flex-col gap-y-2'
			>
				<h2 className='font-bold'>Hackmol 4.0</h2>
				<Image width={500} height={500} src='/hackmol.jpg' alt='hack mol image' />
				<p className='text-sm font-serif'>INR 75000+ prize</p>
			</article>
		</Link>
	);
};

export default Event;