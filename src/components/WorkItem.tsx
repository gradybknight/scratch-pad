import React from 'react';

export const WorkItem = (item: any) => {
	const {
		company,
		title,
		location,
		start,
		end,
		technologyStack,
		paragraphs,
	} = item.item;
	return (
		<div style={{ display: 'flex', flexBasis: '100%', marginBottom: '3px' }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '30%',
				}}
			>
				<div>
					{start} - {end}
				</div>
				<div>{location}</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '70%',
				}}
			>
				<div
					style={{
						fontSize: '1.15rem',
						fontWeight: 'bold',
						marginBottom: '5px',
					}}
				>
					{company} - {title}
				</div>
				{paragraphs.map((p: string) => (
					<div>{p}</div>
				))}
				<div
					style={{
						marginTop: '5px',
					}}
				>
					<span
						style={{
							fontWeight: 'bold',
							marginTop: '5px',
						}}
					>
						Technology Stack:{' '}
					</span>
					{technologyStack.map((tech: string, idx: number) => {
						return (
							<span>
								{' '}
								{tech}
								{idx !== technologyStack.length - 1 ? ' ||' : null}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};
