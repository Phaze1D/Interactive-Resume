import React from 'react'
import TerminalItem from './Item'


export const Tab = ({data, path}) => {

	const tabList = data.value.map((val, index) =>
		<div key={index}>{val}</div>
	)

	return (
		<TerminalItem command={data.command.split(' ')[1]} path={path}>
			<section className='result-area'>
				<div className='tab-grid'>
					{tabList}
				</div>
			</section>
		</TerminalItem>
	)
}
