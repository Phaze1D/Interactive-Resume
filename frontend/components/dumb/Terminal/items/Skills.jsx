import React from 'react'
import TerminalItem from './Item'


export class Skills extends React.PureComponent{
	constructor(props){
		super(props)

	}

	render(){
		const {
			technologies
		} = this.props.data.value

		technologies.sort( (a,b) => {return b.mastery - a.mastery})

		const techList = technologies.map( (skill, index) =>
			<article className='flex-row' key={index}>
				<div className='cell md'>{skill.name}:</div>
				<div className='cell fill'>
					<SkillBar mastery={skill.mastery}/>
				</div>
			</article>
		)


		return (
			<TerminalItem command={this.props.data.command}>
				<section className='result-area'>
					<h4>TECHNICAL SKILLS:</h4>
					{techList}
				</section>
			</TerminalItem>
		)
	}
}


/**
* A Single Skill Bar Component
*/
class SkillBar extends React.Component{
	constructor(props){
		super(props)
		this.state = {currentM: 0}
		this.intervalID = null
	}

	componentDidMount() {
		this.intervalID = setInterval( () => {
			this.setState({currentM: this.state.currentM + 1})
		}, 50)
	}

	componentDidUpdate() {
		if(this.state.currentM >= this.props.mastery){
			clearInterval(this.intervalID)
		}
	}

	render(){
		const currentM = this.state.currentM

		return (
			<div>
				| { '█'.repeat(Math.round(currentM/2)) }{'░'.repeat(50 - Math.round(currentM/2)) } | {currentM}%
			</div>
		)
	}
}
