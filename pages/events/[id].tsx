// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react';

import { IEvent } from '.';

interface IEventInfoProps {}

const EventInfo: FC<IEventInfoProps> = () => {
	const router = useRouter();
	const { id } = router.query;
	const [event, setEventInfo] = useState<IEvent>();
	useEffect(() => {
		if (id) {
			fetch(`/api/events/${id}`)
				.then(async (res) => {
					const event = await res.json();
					console.log(event);
					setEventInfo(event);
				});
		}
	}, [id]);
	return (
		<section className='text-white'>
			<h1 className='text-primary font-bold text-5xl'>{event?.title}</h1>
			<h4 className='my-5 text-xl'>Problem Statements</h4>
			<article
				className='flex flex-col text-text_secondary gap-y-2 text-sm'
			>
				{event?.problemStatements.map((problemStatement) => {
					return <p key={problemStatement} >
						{problemStatement}
					</p>;
				})}
			</article>
		</section>
	);
};

export default EventInfo;