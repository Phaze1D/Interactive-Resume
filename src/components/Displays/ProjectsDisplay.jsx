import React from 'react'
import { projectSearch } from 'data/search'


/**
* The function for displaying my projects information
* @this resumeData.projects object from the resume_data.js file
* @param {array} options - An array of strings representing the user input options
* @return {html} A html string that is render by react
*/
export default function ProjectsDisplay(options) {
  if(options.length > 0 && !(options[0] === '--search') ){
    // Return Unknown options if user did not input --search
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

  // Iterate over the search results and create the React Component for projects object
  let projectList = results.map( (project, index) =>
    <table className='display-table' key={index}>
      <tbody>
        {false &&
          <tr>
            <td className='title'>images:</td>
            <td>
              <a target="_blank" href={project.url}><img src={require(`images/${project.images[1]}`)}/> </a>
            </td>
          </tr>
        }
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
          <td><a target="_blank" href={project.url}>{project.url}</a></td>
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


/**
* React Component that represents one tag
* @param {string} tag
* @param {integer} index
* @return {html}  A html string that is render by react
*/
const TagsDisplay = (tag, index) => {
  return(
    <span key={index} className='tag'>{tag}</span>
  )
}
