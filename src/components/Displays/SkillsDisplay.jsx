import React from 'react'

export default function SkillsDisplay(options) {
  this.technology.sort((a,b) => {return b.mastery - a.mastery})

  let skillList = this.technology.map( (skill, index) =>
    <tr key={index}>
      <td className='title'>{skill.name}:</td>
      <td> | { '█'.repeat(Math.round(skill.mastery/2)) }{'░'.repeat(50 - Math.round(skill.mastery/2)) } | {skill.mastery}% </td>
    </tr>
  )

  return(
    <section>
      <h4 className='table-header'>TECHNICAL SKILLS:</h4>
      <table className='display-table'>
        <tbody>
          {skillList}
        </tbody>
      </table>
    </section>
  )
}
