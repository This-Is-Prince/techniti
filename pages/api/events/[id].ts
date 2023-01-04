// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import type { NextApiRequest, NextApiResponse } from 'next';

import { events, IEvent } from '.';

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IEvent | undefined>
) {
	const { id } = req.query;
	res.status(200).json(events.find((event) => event.id === id));
}
