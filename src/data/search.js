

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
