import React from 'react'
import { projectSearch } from './search'

export const BioDisplay = function(options) {
  return (
    <section>
      <h4 className='table-header'>BIO:</h4>
      <table className='display-table'>
        <tbody>
          <tr>
            <td className='title'>Name:</td>
            <td>{this.name}</td>
          </tr>
          <tr>
            <td className='title'>Role:</td>
            <td>{this.role}</td>
          </tr>
          <tr>
            <td className='title'>About:</td>
            <td>{this.welcomeMessage}</td>
          </tr>
        </tbody>
      </table>


      <h4 className='table-header'>Contact Information:</h4>
      <table className='display-table'>
        <tbody>
          <tr>
            <td className='title'>
              <i className="fa fa-phone" aria-hidden="true"></i>
              Mobile:
            </td>
            <td>{this.contacts.mobile}</td>
          </tr>

          <tr>
            <td className='title'>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              email:
            </td>
            <td>{this.contacts.email}</td>
          </tr>

          <tr>
            <td className='title'>
              <i className="fa fa-github" aria-hidden="true"></i>
              github:
            </td>
            <td><a target="_blank" href={this.contacts.github}>{this.contacts.github}</a></td>
          </tr>

          <tr>
            <td className='title'>
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
              stackoverflow:
            </td>
            <td><a target="_blank" href={this.contacts.stackoverflow}>{this.contacts.stackoverflow}</a></td>
          </tr>

          <tr>
            <td className='title'>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              linkedin:
            </td>
            <td><a target="_blank" href={this.contacts.linkedin}>{this.contacts.linkedin}</a></td>
          </tr>
        </tbody>
      </table>

      <h4 className='table-header'>Current Location:</h4>
      <table className='display-table'>
        <tbody>
          <tr>
            <td className='title'>city:</td>
            <td>{this.contacts.location.city}</td>
          </tr>
          <tr>
            <td className='title'>state:</td>
            <td>{this.contacts.location.state}</td>
          </tr>
          <tr>
            <td className='title'>country:</td>
            <td>{this.contacts.location.country}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}


export const SkillDisplay = function(options) {
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


export const EducationDisplay = function(options) {
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
        <td><a href={props.url}>{props.url}</a></td>
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
        <td><a href={props.url}>{props.url}</a></td>
      </tr>
    </tbody>
  </table>
)


export const WorkDisplay = function (options) {
  let jobList = this.jobs.map( (job, index) =>
    <table className='display-table' key={index}>
      <tbody>
        <tr>
          <td className='title'>employer:</td>
          <td>{job.employer}</td>
        </tr>

        <tr>
          <td className='title'>title:</td>
          <td>{job.title}</td>
        </tr>

        <tr>
          <td className='title'>location:</td>
          <td>
            {job.location.city}, {job.location.state}, {job.location.country}
          </td>
        </tr>

        <tr>
          <td className='title'>dates:</td>
          <td>{job.dates.from} - {job.dates.to}</td>
        </tr>

        <tr>
          <td className='title'>description:</td>
          <td>{job.description}</td>
        </tr>

        <tr>
          <td className='title'>Website:</td>
          <td><a href={job.url}>{job.url}</a></td>
        </tr>
      </tbody>
    </table>
  )

  return(
    <section>
      <h4 className='table-header'>Work:</h4>
      {jobList}
    </section>
  )
}


export const ProjectsDisplay = function (options) {
  if(options.length > 0 && !(options[0] === '--search') ){
    return (
      <pre>
        {`Unknown option: ${options[0]} \nusage: projects [--search]`}
      </pre>
    )
  }

  let results = []
  if(options.length > 0 && options[0] === '--search'){
    results = projectSearch(this.projects, options[1])
  }

  if(options.length == 0){
    results = this.projects
  }

  let projectList = results.map( (project, index) =>
    <table className='display-table' key={index}>
      <tbody>
        <tr>
          <td className='title'>title:</td>
          <td>{project.title}</td>
        </tr>

        <tr>
          <td className='title'>dates:</td>
          <td>{project.dates.from} - {project.dates.to}</td>
        </tr>

        <tr>
          <td className='title'>description:</td>
          <td>{project.description}</td>
        </tr>

        <tr>
          <td className='title'>url:</td>
          <td><a href={project.url}>{project.url}</a></td>
        </tr>

        <tr>
          <td className='title'>tags:</td>
          <td>
            <div className='tags'>
              {project.tags.map( TagsDisplay )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )

  return(
    <section>
      <h4 className='table-header'>PROJECTS:</h4>
      {projectList.length > 0 ? projectList : `No projects with ${options[1]} where found`}
    </section>
  )
}


const TagsDisplay = (tag, index) => {
  return(
    <span key={index} className='tag'>{tag}</span>
  )
}



export const IntroDisplay = () => (
  <section>
    <pre>
      {`
         /$$      /$$           /$$
        | $$  /$ | $$          | $$
        | $$ /$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
        | $$/$$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
        | $$$$_  $$$$| $$$$$$$$| $$| $$      | $$  \\ $$| $$ \\ $$ \\ $$| $$$$$$$$
        | $$$/ \\  $$$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/
        | $$/   \\  $$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
        |__/     \\__/ \\_______/|__/ \\_______/ \\______/ |__/ |__/ |__/ \\_______/

      `}
    </pre>

    <p>
      Thanks for visiting my Interactive Resume. My name is David Villarreal and I'm a Software Engineer
      If you'll like to get to know more about me enter these commands in the terminal
    </p>

    <h4 className='table-header'>COMMANDS:</h4>
    <table className='display-table'>
      <tbody>
        <tr>
          <td>[bio]</td>
          <td>- Displays my bio information e.g contact info</td>
        </tr>
        <tr>
          <td>[skills]</td>
          <td>- Displays my technical skills with a mastery level</td>
        </tr>
        <tr>
          <td>[education]</td>
          <td>- Displays all the education I have received</td>
        </tr>
        <tr>
          <td style={{whiteSpace: 'nowrap'}}>[education --schools]</td>
          <td>- Displays the schools that I have attend</td>
        </tr>
        <tr>
          <td style={{whiteSpace: 'nowrap'}}>[education --online]</td>
          <td>- Displays just the online courses I have taken</td>
        </tr>
        <tr>
          <td>[work]</td>
          <td>- Displays my work experience</td>
        </tr>
        <tr>
          <td>[projects]</td>
          <td>- Displays all my projects that I have created</td>
        </tr>
        <tr>
          <td style={{whiteSpace: 'nowrap'}}>[projects --search {`<query>`}]</td>
          <td>- Search projects by technical skill used</td>
        </tr>
        <tr>
          <td>[map]</td>
          <td>- View Google Map of my previous locations</td>
        </tr>

        <tr>
          <td>[print]</td>
          <td>- Print out a PDF version of my resume</td>
        </tr>

        <tr>
          <td>[intro]</td>
          <td> - Reset the terminal and display these instructions</td>
        </tr>
      </tbody>
    </table>

    <h4 className='table-header'>EXAMPLE:</h4>
    <table className='display-table'>
      <tbody>
        <tr>
          <td>To display all my Javascript projects type</td>
        </tr>
        <tr>
          <td>projects --search Javascript</td>
        </tr>
      </tbody>
    </table>

    <h4 className='table-header'>PS:</h4>
    <p>
      This is an exact replica of my terminal. If you are using Mac OS and you have
      the Chrome browser expanded you can press COMMAND SHIFT F to get a more immersive experience
    </p>
  </section>
)
