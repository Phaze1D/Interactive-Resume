import React from 'react'

/**
* The function for displaying my skills information
* @this resumeData.skills object from the resume_data.js file
* @return {html} A html string that is render by react
*/
export default function SkillsDisplay() {
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
