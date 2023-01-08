// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { GetServerSideProps } from 'next';
import React, { FC } from 'react';

import Event from './Event';

export interface IEvent {
	ext: string;
    prize: string;
    title: string;
    id: string;
    problemStatements: string[];
}

interface IEventsProps {
    events: IEvent[];
}

const Events: FC<IEventsProps> = (props) => {
	const events = props.events;
	return (
		<section>
			{events.map((event) => {
				return <Event key={event.id} {...event} />;
			})}
		</section>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.APP_URL}/api/events`);
	const events = await res.json();
	return {
		props: {
			events
		}
	};
};

export default Events;