import React from 'react'


export default function BioDisplay(options) {
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
