import React from 'react'
import TerminalItem from './Item'


export const Print = ({data, path, shouldPrint}) => {
	if(shouldPrint){
		var pdfFrame = window.frames['pdf']
		pdfFrame.focus()
		pdfFrame.print()
	}

	return (
		<TerminalItem command={data.command} path={path}>
		</TerminalItem>
	)
}
