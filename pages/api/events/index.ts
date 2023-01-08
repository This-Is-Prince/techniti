// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import type { NextApiRequest, NextApiResponse } from 'next';

export interface IEvent {
	ext: string;
    prize: string;
    title: string;
    id: string;
	problemStatements: string[];
}

export const events: IEvent[] = [
	{
		ext: 'docx',
		id: 'hackmol',
		prize: '75000',
		problemStatements: [
			'Innovative Approaches for Green Technology,',
			'Tracking reducing and reusing of plastic waste,',
			'Tracking of food waste for productive usage,',
			'To create an eco-friendly way of packing several varieties of foods,',
			'Development of business models for collection and utilization of single use plastics and various other industrial wastes,',
			'App-Based Solution to provide market access to micro & small enterprises,',
			'To provide solution for entire year commercial solar drying of food commodities,',
			'Identification of reduction in carbon footprint using new technologies,',
			'Wastewater treatment,',
			'Recycling and waste management,',
			'Natural gas boilers,',
			'Harnessing solar energy,',
			'Waste-to-Energy,',
			'Elimination of industrial emissions,',
			'sustainable energy management,',
			'smart and sustainable supply chain and other related problems.'
		],
		title: 'Hackmol 4.0'
	}
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IEvent[]>
) {
	res.status(200).json(events);
}
