import React from 'react'
import TerminalItem from './Item'


export const TerminalError = ({data}) => {

	return (
		<TerminalItem command={data.command}>
			<section className='result-area'>
				<pre>
					{data.value}
				</pre>
			</section>
		</TerminalItem>
	)
}
