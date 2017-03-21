import React from 'react'

export const BioDisplay = function() {
  return (
    <div>
      <section className='info-section'>
        <h4>BIO:</h4>
        <pre>{`   `}NAME: {this.name}</pre>
        <pre>{`   `}ROLE: {this.role}</pre>
        <pre>{`   `}{this.welcomeMessage}</pre>
      </section>

      <section className='info-section'>
        <h4>CONTACT INFORMATION: </h4>

        <pre>
          {`   `}
          <i className="fa fa-phone" aria-hidden="true"></i>{` `}
          MOBILE: {`         `}{this.contacts.mobile}
        </pre>

        <pre>
          {`   `}
          <i className="fa fa-envelope-o" aria-hidden="true"></i>{` `}
          EMAIL: {`          `}{this.contacts.email}
        </pre>

        <pre>
          {`   `}
          <i className="fa fa-github" aria-hidden="true"></i>{` `}
          GITHUB: {`         `}
          <a target="_blank" href={this.contacts.github}>{this.contacts.github}</a>
        </pre>

        <pre>
          {`   `}
          <i className="fa fa-stack-overflow" aria-hidden="true"></i>{` `}
          STACKOVERFLOW:{`   `}
          <a target="_blank" href={this.contacts.stackoverflow}>{this.contacts.stackoverflow}</a>
        </pre>

        <pre>
          {`   `}
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          {` `}LINKEDIN:{`        `}
          <a target="_blank" href={this.contacts.linkedin}>{this.contacts.linkedin}</a>
        </pre>
      </section>

      <section className='info-section'>
        <h4>CURRENT LOACTION: </h4>
        <pre>{`   `}CITY:{`           ${this.contacts.location.city}`}</pre>
        <pre>{`   `}STATE:{`          ${this.contacts.location.state}`}</pre>
        <pre>{`   `}COUNTRY:{`        ${this.contacts.location.country}`}</pre>
      </section>
    </div>
  )
}


export const SkillDisplay = function() {
  this.technology.sort((a,b) => {return b.mastery - a.mastery})

  let skillList = this.technology.map( (skill, index) =>
    <pre key={index}>
      {`   `}
      {skill.name}:
      {` `.repeat(24 - skill.name.length)}
      | { '█'.repeat(Math.round(skill.mastery/2)) }{'░'.repeat(50 - Math.round(skill.mastery/2)) } | {skill.mastery}%
    </pre>
  )

  return(
    <div>
      <section className='info-section'>
        <h4>TECHNICAL SKILLS:</h4>
        {skillList}
      </section>
    </div>
  )
}


export const EducationDisplay = function(options) {
  let schoolsList = this.schools.map( (school, index) =>
    <article key={index}>
      <pre>{`    NAME:`} {` `.repeat(10 - 6)} {school.name} </pre>

      <pre>{`    LOACTION:`} {` `.repeat(10 - 9)}
        {school.location.city},
        {school.location.state},
        {school.location.country}
      </pre>

      <pre>{`    DEGREE:`} {` `.repeat(10 - 8)} {school.degree}</pre>
      <pre>{`    MAJOR:`} {` `.repeat(10 - 7)} {school.majors}</pre>
      <pre>{`    DATES:`} {` `.repeat(10 - 7)} {school.dates.from} - {school.dates.to}</pre>
      <pre>{`    WEBSITE:`}{` `.repeat(10 - 8)} <a href={school.url}>{school.url}</a></pre>
    </article>
  )

  let onlineList = this.onlineCourses.map( (course, index) =>
    <article key={index}>
      <pre>{`    TITLE:`}{` `.repeat(10 - 6)}{course.title}</pre>
      <pre>{`    SCHOOL:`}{` `.repeat(10 - 7)}{course.school}</pre>
      <pre>{`    DATES:`}{` `.repeat(10 - 6)}{course.dates.from} - {course.dates.to}</pre>
      <pre>{`    WEBSITE:`}{` `.repeat(10 - 8)}<a href={course.url}>{course.title}</a></pre>
    </article>
  )

  return(
    <div>
      <section className='info-section'>
        <h4>SCHOOLS:</h4>
        {schoolsList}
      </section>

      <section className='info-section'>
        <h4>ONLINE COURSES:</h4>
        {onlineList}
      </section>
    </div>
  )
}


export const WorkDisplay = function () {
  let jobList = this.jobs.map( (job, index) =>
    <article key={index}>
      <pre>{`    EMPLOYER:`}{` `.repeat(14 - 9)}{job.employer}</pre>
      <pre>{`    TITLE:`}{` `.repeat(14 - 6)}{job.title}</pre>
      <pre>
          {`    LOACTION:`}{` `.repeat(14 - 9)}
          {job.location.city},
          {job.location.state},
          {job.location.country}
      </pre>
      <pre>{`    DATES:`}{` `.repeat(14 - 6)}{job.dates.from} - {job.dates.to}</pre>
      <pre>
        {`    DESCRIPTION:`}{` `.repeat(14 - 12)}
        {job.description}
      </pre>
      <pre>{`    WEBSITE:`}{` `.repeat(14 - 8)}<a href={job.url}>{job.url}</a></pre>
    </article>
  )

  return(
    <div>
      <section className='info-section'>
        <h4>WORK</h4>
        {jobList}
      </section>
    </div>
  )
}


export const ProjectsDisplay = function () {
  let projectList = this.projects.map( (project, index) =>
    <article key={index}>
      <pre>{`    TITLE:`}{` `.repeat(14 - 6)}{project.title}</pre>
      <pre>{`    DATES:`}{` `.repeat(14 - 6)}{project.dates.from} - {project.dates.to}</pre>
      <pre>
        {`    DESCRIPTION:`}{` `.repeat(14 - 12)}
        {project.description}
      </pre>
      <pre>{`    URL:`}{` `.repeat(14 - 4)}<a href={project.url}>{project.url}</a></pre>
      <pre>
        {`    TAGS:`}{` `.repeat(14 - 5)}
        <div className='tags'>
          {project.tags.map( TagsDisplay )}
        </div>
      </pre>
    </article>
  )

  return(
    <div>
      <section className='info-section'>
        <h4>PROJECTS:</h4>
        {projectList}
      </section>
    </div>
  )
}


const TagsDisplay = (tag, index) => {
  return(
    <span key={index} className='tag'>{tag}</span>
  )
}



export const IntroDisplay = (props) => (
  <pre>
    {
      `
       /$$      /$$           /$$
      | $$  /$ | $$          | $$
      | $$ /$$$| $$  /$$$$$$ | $$  /$$$$$$$  /$$$$$$  /$$$$$$/$$$$   /$$$$$$
      | $$/$$ $$ $$ /$$__  $$| $$ /$$_____/ /$$__  $$| $$_  $$_  $$ /$$__  $$
      | $$$$_  $$$$| $$$$$$$$| $$| $$      | $$  \\ $$| $$ \\ $$ \\ $$| $$$$$$$$
      | $$$/ \\  $$$| $$_____/| $$| $$      | $$  | $$| $$ | $$ | $$| $$_____/
      | $$/   \\  $$|  $$$$$$$| $$|  $$$$$$$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
      |__/     \\__/ \\_______/|__/ \\_______/ \\______/ |__/ |__/ |__/ \\_______/


Thanks for visiting my Interactive Resume. My name is David Villarreal and I'm a Software Engineer
If you'll like to get to know more about me enter these commands in the terminal

COMMANDS:

  [bio]                       - Displays my bio information e.g contact info

  [skills]                    - Displays my technical skills with a mastery level

  [education]                 - Displays all the education I have received

  [education --schools]       - Displays the schools that I have attend

  [education --online]        - Displays just the online courses I have taken

  [work]                      - Displays my work experience

  [projects]                  - Displays all my projects that I have created

  [projects --search <args>]  - Search projects by technical skill used

  [map]                       - View Google Map of my previous locations

  [print]                     - Print out a PDF version of my resume

  [intro]                     - Reset the terminal and display these instructions


EXAMPLE:

  To display all my Javascript projects type

  projects --search Javascript


PS:

  This is an exact replica of my terminal. If you are using Mac OS and you have
  the Chrome browser expanded you can press COMMAND SHIFT F to get a more immersive experience
      `
    }
  </pre>
)
