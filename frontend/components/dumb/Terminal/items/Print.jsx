import React from 'react'
import TerminalItem from './Item'


export const Print = ({data}) => {
	var pdfFrame = window.frames['pdf']
	pdfFrame.focus()
	pdfFrame.print()
	return (
		<TerminalItem command={data.command}>
		</TerminalItem>
	)
}
