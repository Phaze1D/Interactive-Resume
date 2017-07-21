import React from 'react'
import Panel from './Panel'
import homeIcon from 'resources/images/home.png'
import funk from 'resources/Funk.mp3'


export default class Terminal extends React.Component{
	constructor(props){
		super(props)
		this.state = {activeTab: Object.keys(props.terminalTabs)[0]}

		this.handleImageClick = this.handleImageClick.bind(this)
	}

	componentDidMount(){
		this.props.onRequestCommand('intro', '0')
	}

	handleTabClick(id){
		this.setState({activeTab: id})
	}

	handleTabClose(id, event){
		event.stopPropagation()
		if(id === this.state.activeTab){
			this.setState({activeTab: '0'})
		}
		this.props.onRequestRemove(id)
	}

	handleImageClick(event, path, imageCommand){
		event.stopPropagation()
		this.props.onRequestAdd(path)
		.then(res => {
			this.handleTabClick(res.value.id)
			this.props.onRequestCommand(imageCommand, res.value.id)
		})
	}

	render(){
		const {
			terminalTabs,
			onRequestCommand,
			onRequestAdd,
			onRequestTabCompletion
		} = this.props

		const tabsList = []


		for (var key in terminalTabs) {
			if (terminalTabs.hasOwnProperty(key)) {
				let tab = terminalTabs[key]
				tabsList.push(
					<Tab key={key} id={key} tab={tab}
						isActive={key === this.state.activeTab}
						onClick={this.handleTabClick.bind(this, key)}
						onClose={this.handleTabClose.bind(this, key)}/>
				)
			}
		}

		return (
			<main className='terminal'>
				<audio id='funk' src={funk}></audio>
				<div className='terminal-bar'>
					<ul className='button-list'>
						<li><button id='close'><div></div></button></li>
						<li><button id='min'><div></div></button></li>
						<li><button id='expand'><div></div></button></li>
					</ul>

					<div className='location-info'>
						<img className='terminal-icon' src={homeIcon}/>
						<span>david — resume — -bash — Solarized Dark ansi</span>
					</div>
				</div>

				{Object.keys(terminalTabs).length > 1 &&
					<div className='tab-bar'>
						{tabsList}
						<button
							onClick={() => onRequestAdd()}
							className='tab-add'>+</button>
					</div>
				}

				<Panel
					{...terminalTabs[this.state.activeTab]}
					tabID={this.state.activeTab}
					onRequestCommand={onRequestCommand}
					onRequestImage={this.handleImageClick}
					onRequestTabCompletion={onRequestTabCompletion}/>

			</main>
		)
	}
}


const Tab = ({id, tab, isActive, onClick, onClose}) => (
	<article
		className={`location-info tab ${isActive ? 'active' : ''}`}
		onClick={onClick}>
		{id !== '0' &&
			<button
				className='tab-close'
				onClick={onClose}>✕</button>}
		<span className='second'>{tab.path} — -bash</span>
	</article>
)
