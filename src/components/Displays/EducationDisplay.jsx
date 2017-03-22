import React from 'react'

export default function EducationDisplay(options) {
  if(options.length > 0 && !(options[0] === '--schools' || options[0] === '--online')){
    return (
      <pre>
        {`Unknown option: ${options[0]} \nusage: education [--schools] [--online]`}
      </pre>
    )
  }

  let showSchools = (options.length == 0 || options[0] === '--schools')
  let schoolsList = ''
  if(showSchools){
    schoolsList = this.schools.map( (school, index) =>
        <SchoolItem key={index} {...school}/>
    )
  }


  let showOnline = (options.length == 0 || options[0] === '--online')
  let onlineList = ''
  if(showOnline){
    onlineList = this.onlineCourses.map( (course, index) =>
        <CourseItem key={index} {...course}/>
    )
  }

  return(
    <section>
      {showSchools && <h4 className='table-header'>SCHOOLS:</h4>}
      {schoolsList}

      {showOnline && <h4 className='table-header'>ONLINE COURSES:</h4>}
      {onlineList}
    </section>
  )
}


const SchoolItem = (props) => (
  <table className='display-table'>
    <tbody>
      <tr>
        <td className='title'>name:</td>
        <td>{props.name}</td>
      </tr>

      <tr>
        <td className='title'>location:</td>
        <td>
          {props.location.city}, {props.location.state}, {props.location.country}
        </td>
      </tr>

      <tr>
        <td className='title'>degree:</td>
        <td>{props.degree}</td>
      </tr>

      <tr>
        <td className='title'>major:</td>
        <td>{props.majors}</td>
      </tr>

      <tr>
        <td className='title'>dates:</td>
        <td>{props.dates.from} - {props.dates.to}</td>
      </tr>

      <tr>
        <td className='title'>website:</td>
        <td><a target="_blank" href={props.url}>{props.url}</a></td>
      </tr>
    </tbody>
  </table>
)

const CourseItem = (props) => (
  <table className='display-table'>
    <tbody>
      <tr>
        <td className='title'>title:</td>
        <td>{props.title}</td>
      </tr>

      <tr>
        <td className='title'>school:</td>
        <td>{props.school}</td>
      </tr>

      <tr>
        <td className='title'>dates:</td>
        <td>{props.dates.from} - {props.dates.to}</td>
      </tr>

      <tr>
        <td className='title'>website:</td>
        <td><a target="_blank" href={props.url}>{props.url}</a></td>
      </tr>
    </tbody>
  </table>
)
