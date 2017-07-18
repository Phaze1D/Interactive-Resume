import React from 'react'

/**
* Terminal Item Component
* Parent Component for all terminal items
*/
const TerminalItem = ({children, withInput, command, path}) => (
	<div className={`input-item ${withInput ? 'with-input' : ''}`}>
		<p>
			<span className='orange'> david </span> at
			<span className='yellow'> Joker </span> in
			<span className='green'> {path} </span> on
			<span className='purple'> master </span>
		</p>

		{withInput ?
			<div className='input-area'>
				{children}
			</div>
			:
			<div className='input-area'>
				<span className='close left'>[</span>
					$<p>{command}</p>
				<span className='close right'>]</span>
			</div>
		}

		{!withInput && children}
	</div>
)

export default TerminalItem
