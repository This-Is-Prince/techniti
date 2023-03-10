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
	url?: string;
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
		title: 'Hackmol 4.0',
		url: 'http://hackmol.tech/'
	},
	{
		description: 'It will be a savage, Clash of Metals with the alloys grinding red hot. It is a game of style, control, damage and aggression with the robot pits against each other in a deadly combat. It is time to concentrate on the slashing of the bots. Get ready to feel the chills and shivers down your spine and become a part of Rob wars................. So Design and Construct a remote controlled bot with adequate weapon systems capable of fighting a one on one tournament.',
		docExt: 'pdf',
		id: 'robo-war-proposal',
		imgExt: 'jpg',
		prize: '30000',
		title: 'Robo War'
	},
	{
		description: 'The Integration Bee is a traditional playoff-style event that has gained popularity in US colleges and universities, and more and more institutions are incorporating it into their schedules of student activities. Additionally, many students who are interested in mathematics look forward to social mathematics events like these. In a knockout playoff format, several teams of two players will compete in this event. In each round, two teams will go head-to-head solving integrals. This event is inspired by the annual Integration Bee held at MIT and various other institutes across the globe.',
		docExt: 'pdf',
		id: 'integration-bee',
		imgExt: 'jfif',
		prize: '4500',
		title: 'Integration Bee'
	},
	{
		description: '',
		docExt: 'pdf',
		id: 'bridge-it',
		imgExt: 'jfif',
		prize: '4500',
		title: 'Bridge It'
	},
	{
		description: 'Its 2050 the apocalypse is near, rescue missions on roll. How many can we save? The need of drones to pick up man or material from collapsing buildings and has risen. It???s now or never. Build a base for the upcoming future by fabricating drone that could hold the humans will to survive. A mini drone which could carry the weight of a payload and deliver it safely while avoiding certain obstacles.',
		docExt: 'pdf',
		id: 'drone-show',
		imgExt: 'jfif',
		prize: '30000',
		title: 'Drone Show'
	},
	{
		description: 'In this competition a team of 4 has to create a color sensing robot which will be placed on an arena with different colored Tracks , the bot will be provided with a colored prop and the task is to follow that coloured line and place the prop at its final location. The arena consists of a starting point where different colored cube shaped props will be provided to bot and there is a black colored line which splits into 4 different colored lines and reach their respective final points. So there are many different props available to bot which the bot will take one by one and follow the respected color line and drop the prop at its final destination and come back to initial point . Points will be awarded according to no. of props placed correctly in 5 minutes.',
		docExt: '',
		id: 'lumen-trace',
		imgExt: 'jpeg',
		prize: '30000',
		title: 'Lumen Trace'
	}
];

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IEvent[]>
) {
	res.status(200).json(events);
}
