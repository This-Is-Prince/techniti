// Copyright 2022-2023 @techniti-nitj authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React, { FC, PropsWithChildren } from 'react';

interface IWrapperProps extends PropsWithChildren {}

const Wrapper: FC<IWrapperProps> = (props) => {
	const { children } = props;
	return (
		<div
			style={{
				minHeight: 'calc(100vh - 150px)'
			}}
			className='p-4 bg-bg-secondary'
		>
			<div className="max-w-6xl mx-auto">
				{children}
			</div>
		</div>
	);
};

export default Wrapper;