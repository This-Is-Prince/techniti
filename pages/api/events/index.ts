// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import type { NextApiRequest, NextApiResponse } from 'next';

export interface IEvent {
	docExt: string;
	description?: string;
	imgExt: string;
    prize: string;
    title: string;
    id: string;
	problemStatements?: string[];
}

export const events: IEvent[] = [
	{
		docExt: 'docx',
		id: 'hackmol',
		imgExt: 'jpg',
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
	},
	{
		description: 'It will be a savage, Clash of Metals with the alloys grinding red hot. It is a game of style, control, damage and aggression with the robot pits against each other in a deadly combat. It is time to concentrate on the slashing of the bots. Get ready to feel the chills and shivers down your spine and become a part of Rob wars................. So Design and Construct a remote controlled bot with adequate weapon systems capable of fighting a one on one tournament.',
		docExt: 'pdf',
		id: 'robo-war-proposal',
		imgExt: 'jpg',
		prize: '75000',
		title: 'Robo War'
	}
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IEvent[]>
) {
	res.status(200).json(events);
}
