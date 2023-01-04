// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';

import Event from './Event';

export interface IEvent {
    prize: string;
    title: string;
    id: string;
}

const events: IEvent[] = [
	{
		id: '1',
		prize: '75000',
		title: 'Hackmol 4.0'
	}
];

const Events = () => {
	return (
		<section>
			{events.map((event) => {
				return <Event key={event.id} {...event} />;
			})}
		</section>
	);
};

export default Events;