import React from 'react'
import autosize from 'autosize'
import TerminalItem from './Item'

/**
* Terminal Input Component
*/
class Input extends React.PureComponent {
	constructor(props){
		super(props)
		this.handleBlur = this.handleBlur.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
		this.handleSelection = this.handleSelection.bind(this)
		this.handleKeyUp = this.handleKeyUp.bind(this)
	}

	componentDidMount() {
		autosize(document.getElementById('main-textarea'))
	}


	handleSelection(event){
		let caret = document.getElementById('caret')
		let width = caret.getBoundingClientRect().width
		caret.style.transform = `translate(${width * (event.target.selectionStart+1)}px, 0)`
	}

	handleKeyDown(event){
		if(event.keyCode === 13){
			event.preventDefault()
			this.props.onRequestEnter(event.target.value)
			event.target.value = ''
			event.target.selectionStart = 0
		}

		if(event.keyCode === 9){
			event.preventDefault()
			event.persist()
			this.props.onRequestTab(event.target.value)
			.then((res) => {
				if(res.value.data.length === 1){
					event.target.value = res.value.data[0]
				}else{
					this.props.onRequestEnter(`tab ${event.target.value}`)
				}
				this.handleSelection(event)
			})
			.catch(() => {
				document.getElementById('funk').play()
				this.handleSelection(event)
			})
		}

		this.handleSelection(event)
	}


	handleKeyUp(event){
		if(event.keyCode === 38){
			this.props.onRequestUp(event)
		}

		if(event.keyCode === 40){
			this.props.onRequestDown(event)
		}

		this.handleSelection(event)
	}


	handleBlur(){
		document.getElementById('caret').classList.add('focus-out')
	}

	render(){
		const path = this.props.path

		return (
			<TerminalItem withInput={true} path={path}>
					$<textarea
					spellCheck='false'
					id='main-textarea'
					rows='1'
					onChange={this.handleSelection}
					onKeyUp={this.handleKeyUp}
					onKeyDown={this.handleKeyDown}
					onClick={this.handleSelection}
					onBlur={this.handleBlur}>
				</textarea>

				<span id='caret' className='caret focus-out'>A</span>
			</TerminalItem>
		)
	}
}

export { Input }
