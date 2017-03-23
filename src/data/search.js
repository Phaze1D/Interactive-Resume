

/**
* Searches array of projects objects by tag
* @param {array} projectsArray - the array to search in
* @param {string} query - the tag to search forEach
* @return {array}
*/
export const projectSearch = (projectsArray, query) => {
  let results = []

  projectsArray.forEach( (project) => {
    project.tags.forEach( (tag) => {
      if( tag.toLowerCase().trim() === query.toLowerCase().trim() ){
        results.push(project)
      }
    })
  })

  return results
}
