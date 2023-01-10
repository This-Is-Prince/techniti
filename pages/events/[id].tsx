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
		<>
			{
				event? <section className='text-white grid grid-cols-5'>
					<div className='col-span-3'>
						<h1 className='text-primary font-bold text-5xl'>{event?.title}</h1>
						{
							event?.problemStatements && event?.problemStatements.length > 0?
								<>
									<h4 className='my-5 text-xl'>Problem Statements</h4>
									<article
										className='flex flex-col text-text_secondary gap-y-2 text-sm'
									>
										{event?.problemStatements.map((problemStatement, index) => {
											return (
												<div key={problemStatement} className='flex items-center gap-x-2'>
													<span>{index + 1}. </span>
													<p >
														{problemStatement}
													</p>
												</div>
											);
										})}
									</article>
								</>
								: null
						}
						{
							event?.description?
								<>
									<h4 className='my-5 text-xl'>Description</h4>
									<article
										className='flex flex-col text-text_secondary gap-y-2 text-sm'
									>
										{event?.description}
									</article>
								</>
								: null
						}
					</div>
					<div className="col-span-2 flex justify-center items-end flex-col gap-y-5">
						{
							event?.docExt?
								<button
									onClick={() => {
										const anchorElm = document.createElement('a');
										if (anchorElm) {
											anchorElm.href = `/rules/${id}.${event?.docExt}`;
											document.body.appendChild(anchorElm);
											anchorElm.click();
											document.body.removeChild(anchorElm);
										}
									}}
									className='px-5 py-3 bg-primary rounded-lg font-bold shadow-2xl hover:bg-white hover:text-primary'
								>
									Download Rules and regulation
								</button>
								: null
						}
						{
							id !=='hackmol' ? <p className='text-red-500 font-bold text-xl max-w-[275px] text-center'>
									⭐ Registration form will soon be opened
							</p>: null
						}
					</div>
				</section>: null
			}
		</>
	);
};

export default EventInfo;