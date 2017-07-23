import React from 'react'
import TerminalItem from './Item'


export const Images = ({data, path}) => {

	const imgList = data.value.map( (img, index) =>
		<div key={index} className='row-block' style={{textAlign: 'center'}}>
			<img src={img} className='large-img'/>
		</div>
	)

	return (
		<TerminalItem command={data.command} path={path}>
			<section className='result-area'>
				<h4 className='title'>Images: </h4>
				{imgList}
			</section>
		</TerminalItem>
	)
}
