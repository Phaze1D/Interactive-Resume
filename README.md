# Interactive Resume / Portfolio Website
This repo contains my Interactive Resume website. It is purely a frontend project that is built with ReactJS. This is an exact replica of my current terminal. You can use some common terminal keystrokes like up and down arrows to navigate through previously entered commands, and tab completion if you forgot the commands that are available. If you are using Mac OS and you have the Chrome browser expanded you can press COMMAND SHIFT F to get a more immersive experience.

<img src="./readme_imgs/screen.png"/>


> This is a screenshot of the actual website not a screenshot of a terminal window


## Development
You can easily modify a bit of the code to display your own information and you can even modify the code to add more terminal commands.
The folder that contains the information can be found at [frontend/api/local/](frontend/api/local/). Each file in this folder contains an Object and a function that gets pass the terminal command and handles it depending on the command options. See the [frontend/api/local/index.js](frontend/api/local/index.js) file to view how commands are handled.

For Example

```javascript
const education = {
  schools: [
    {
      name: 'Santa Monica College',
      location: {city: 'Santa Monica', state: 'CA', country: 'USA'},
      degree: 'Dropout',
      majors: 'Computer Science',
      dates: {from: 'Nov 29, 2011', to: 'July 02, 2014'},
      url: 'https://www.smc.edu'
    },{
      name: 'Tecnologico de Monterrey Campus Guadalajara',
      location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
      degree: 'High School Diploma',
      dates: {from: 'August 29, 2005', to: 'May 02, 2009'},
      url: 'http://www.itesm.mx/wps/wcm/connect/Campus/GDA/Guadalajara/'
    }
  ],

  online: [
    {
      name: 'Full Stack Web Developer Nanodegree',
      school: 'Udacity',
      dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
      url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004',
      images: [require('resources/images/fullstack.jpg')]
    },
    {
      name: 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      dates: {from: 'Feb 15, 2017', to: 'June 2, 2017'},
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
      images: [require('resources/images/frontend.jpg')]
    }
  ],
}

export default function (commands) {

  if(commands.length == 2){
    switch (commands[1]) {
    case '--online':
      return {online: education.online, schools: []}

    case '--schools':
      return {schools: education.schools, online: []}

    default:
      let err = new Error(`Unknown option: ${commands[1]}
usage: education [--online][--schools]`)
      err.name = 'UnknownOption'
      throw err
    }
  }
  return education
}
```

If you want to add your own PDF Resume you can just replace the one in the [frontend/resources](frontend/resources) folder but make sure that you keep the exact name.

To get started with development just follow this steps.

1. Fork or Clone the repository
2. In the root directory install the npm dependencies with `npm install`
3. Start the webpack dev server with `npm start`


### Production
The production version of this app is hosted on [Firebase](https://firebase.google.com/).

## Dependencies
* [NodeJS](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)

## Contributing
There are a bunch of small features that can be added to make the terminal feel more like an actual terminal, for example, autocomplete. Since the app is built with using module pattern (Terminal Module, AppleBar Module), one can add more features to each module without having to touch the rest of the app. If you do add some cool features, you can just send a quick pull request, and I'll check them out.

## License
Usage is provided under the MIT License. See [LICENSE](LICENSE) for the full details.
