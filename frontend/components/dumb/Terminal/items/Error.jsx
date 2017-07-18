import React from 'react'
import TerminalItem from './Item'


export const TerminalError = ({data, path}) => {

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<pre>
					{data.value}
				</pre>
			</section>
		</TerminalItem>
	)
}
