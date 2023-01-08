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
	const { id, prize, title, imgExt } = props;
	return (
		<Link
			href={`/events/${id}`}
			className='rounded-md bg-bg-main text-white max-w-xs p-4 block col-span-1'
		>
			<article
				className='flex flex-col gap-y-2 w-[320px] h-[190px] justify-between'
			>
				<h2 className='font-bold'>{title}</h2>
				<div className='max-w-[288px] max-h-[95px] overflow-hidden'>
					<Image width={500} height={500} className='object-center' src={`/${id}.${imgExt}`} alt={`${title} Image`} />
				</div>
				<p className='text-sm font-serif'>INR {prize}+ prize</p>
			</article>
		</Link>
	);
};

export default Event;