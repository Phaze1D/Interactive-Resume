import React from 'react'

export default function WorkDisplay(options) {
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
          <td><a target="_blank" href={job.url}>{job.url}</a></td>
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
