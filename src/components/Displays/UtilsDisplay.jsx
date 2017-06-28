import React from 'react'

/**
* The function for displaying the intro information
* @this resumeData.intro object from the resume_data.js file
* @return {html} A html string that is render by react
*/
export const IntroDisplay = () => (
  <section>
    <pre id="intro-title">
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
          <td>[intro]</td>
          <td> - Reset the terminal and display these instructions</td>
        </tr>

        <tr>
          <td>[print]</td>
          <td>- Print out a PDF version of my resume</td>
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
      This is an exact replica of my terminal. You can also use some common terminal keystrokes like up and down arrows
      to navigate throught previously entered commands. If you are using Mac OS and you have
      the Chrome browser expanded you can press COMMAND SHIFT F to get a more immersive experience.
    </p>
  </section>
)

/**
* The function for displaying the print dialog
* @this resumeData.print object from the resume_data.js file
* @return {html} A empty div
*/
export const PrintDisplay = function () {
  var pdfFrame = window.frames["pdf"];
  pdfFrame.focus();
  pdfFrame.print();
  return (<div></div>)
}
