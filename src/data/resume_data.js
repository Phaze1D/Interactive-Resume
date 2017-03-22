
import {
  BioDisplay,
  SkillDisplay,
  EducationDisplay,
  WorkDisplay,
  ProjectsDisplay,
  IntroDisplay,
  PrintDisplay
} from 'data/display_functions.jsx'

export const resumeData = {
  bio: {
    name: 'David Villarreal',
    role: 'Software Engineer',

    contacts: {
      mobile: '+52 1 3316047044',
      email: 'steadypathapp@gmail.com',
      github: 'https://github.com/Phaze1D',
      stackoverflow: 'http://stackoverflow.com/story/davidstory',
      linkedin: 'https://www.linkedin.com/in/david-villarreal-720ab5134/',
      location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'}
    },

    welcomeMessage: `I have always been inspired by people who create art because I have never been able to do it,
   until I found out how to code. I feel like coding satisfies my logical and mathematical brain
   that I was born with, and at the same time it gives me a way to create amazing beautiful art
   in the form of code`,

    biopic: '',
    display: BioDisplay
  },


  skills: {
    technology: [
      { name: 'Java', mastery: 80 },
      { name: 'Javascript', mastery: 95 },
      { name: 'HTML', mastery: 90 },
      { name: 'CSS', mastery: 90 },
      { name: 'Bash Scripting', mastery: 50 },
      { name: 'Ruby On Rails', mastery: 85 },
      { name: 'Python', mastery: 65 },
      { name: 'ReactJS', mastery: 90 },
      { name: 'PHP', mastery: 68 },
      { name: 'Laravel', mastery: 65 },
      { name: 'Web Development', mastery: 90 },
      { name: 'Mobile Development', mastery: 67 },
      { name: 'Objective C', mastery: 70 },
      { name: 'C++', mastery: 64 },
      { name: 'C', mastery: 60 },
      { name: 'SQL', mastery: 72 },
      { name: 'NoSQL', mastery: 76 },
      { name: 'MySQL', mastery: 78 },
      { name: 'MongoDB', mastery: 79 },
      { name: 'Security Fundamentals', mastery: 65 },
      { name: 'Data Structures', mastery: 80 },
      { name: 'Algorithms', mastery: 80 },
      { name: 'Machine Learning', mastery: 60 }
    ],

    display: SkillDisplay
  },


  education: {

    schools: [
      {
        name: 'Santa Monica College',
        location: {city: 'Santa Monica', state: 'CA', country: 'USA'},
        degree: 'Dropout',
        majors: 'Computer Science',
        dates: {from: 'Nov 29, 2011', to: 'July 02, 2014'},
        url: 'https://www.smc.edu'
      },
    ],

    onlineCourses: [
      {
        title: 'Introduction to Algorithms',
        school: 'MIT',
        dates: {from: 'July 28, 2013', to: 'August 25, 2013'},
        url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/'
      },
      {
        title: 'Mathematics for Computer Science',
        school: 'MIT',
        dates: {from: 'August 01, 2012', to: 'September 25, 2012'},
        url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/'
      },
      {
        title: 'Artificial Intelligence',
        school: 'MIT',
        dates: {from: 'November 01, 2016', to: 'Jan 15, 2017'},
        url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/'
      },
      {
        title: 'Introduction to Machine Learning',
        school: 'Udacity',
        dates: {from: 'Jan 15, 2017', to: 'Feb 01, 2017'},
        url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
      },
      {
        title: 'Full Stack Web Developer Nanodegree',
        school: 'Udacity',
        dates: {from: 'Feb 15, 2017', to: 'In Progress'},
        url: 'https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
      },
      {
        title: 'Front-End Web Developer Nanodegree',
        school: 'Udacity',
        dates: {from: 'Feb 15, 2017', to: 'In Progress'},
        url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
      }
    ],

    display: EducationDisplay
  },


  work: {

    jobs: [
      {
        employer: 'Vida Flor',
        title: 'Fullstack Engineer',
        location: {city: 'Zapopan', state: 'Jalisco', country: 'Mexico'},
        dates: {from: 'Nov 2014', to: 'Dec 2016'},
        url: 'https://bellezaorganica.com.mx/',
        description: `Vida Flor is an organic beauty company that first hire me to help them build a ecommerce website.
                  After finishing the website they ask me if I could stay full time. I manage their database and
                  created a Point of Sales system to help them with organize all there sells and inventory. I also used
                  Micorsoft Access to create reports about sells and product inventory.`
      }
    ],

    display: WorkDisplay // Can be found in display_functions.js file
  },


  projects: {

    projects: [
      {
        title: "Devrag",
        dates: {from: "May 08, 2015", to: "Mar 12, 2016"},
        description: `Devrag was going to be a website that allowed all types of software developers to find the
                  tools that they needed more easily. It would have accomplished this by allowing creators to tag there tools
                  with a specific technology that it was for and then developers would search by tag (Kind of like what
                  Github just created).`,
        tags: [
          "Ruby on Rails",
          "HTML",
          "MySQL",
          "Javascript",
          "Jquery",
          "Heroku",
          "SCSS"
        ],
        url: "https://github.com/Phaze1D/Devrag",
        images: [ 'public/dev169-large.jpg', 'public/dev169-land.jpg', 'public/dev169-medium.jpg' ]
      },
      {
        title: "Belleza Organica",
        dates: {from: "Aug 28, 2015", to: "Nov 29, 2016"},
        description:`This is a e-commerce website that I built for a client using a PHP framework call Laravel. It also has a
                  custom built backoffice where the client can easily manage the site and view reports and graphs. I use alot of
                  AWS products like Elasticbean Stalk, Route53, Workmail and a couple more to manage all the backend.` ,
        tags: [
          "Laravel",
          "HTML",
          "MySQL",
          "Javascript",
          "Jquery",
          "AWS Elasticbean Stalk",
          "Less"
        ],
        url: "https://bellezaorganica.com.mx/",
        images: [ 'public/bell169-large.jpg', 'public/bell169-land.jpg', 'public/bell169-medium.jpg' ]
      },
      {
        title: "Farmage Backend",
        dates: {from: "Apr 7, 2016", to: "Oct 19, 2016"},
        description: `This is a MeteorJS Concept App for all types of agriculture business call Farmage. It is met to organize all of the
                  data that a agriculture business has into a much more manageable structure. All of the backend works but the frontend
                  is just a simple black and white mockup.`,
        tags: [
          "MeteorJS",
          "JADE",
          "MongoDB",
          "Coffescript",
          "Blaze",
          "Less"
        ],
        url: "https://github.com/Phaze1D/Farmage-Concept",
        images: [ 'public/fb169-large.jpg', 'public/fb169-land.jpg', 'public/fb169-medium.jpg' ]
      },
      {
        title: "Farmage Frontend",
        dates: {from: "Oct 25, 2016", to: "Not Finished"},
        description: `This is the frontend for Farmage Web App. I follow the Material Design Guidelines
                  to the best of my abilties. Splitting the app into 2 different projects made it much more maintainable and cleaner. I am hoping to
                  create the mobile version of the app with React Native`,
        tags: [
          "ReactJS",
          "HTML",
          "ES6",
          "Javascript",
          "Less"
        ],
        url: "https://github.com/Phaze1D/Farmage_Frontend",
        images: [ 'public/ff169-large.jpg', 'public/ff169-land.jpg', 'public/ff169-medium.jpg' ]
      },
      {
        title: "Movie Review Project",
        dates: {from: "Feb 15, 2017", to: "Feb 17, 2017"},
        description: `A Udacity Project from there Fullstack Nanodegree Course. This is a simple python web app that renders a html template of
                  a couple of my favorite movies and shows you their youtube trailers when you click on them. `,
        tags: [
          "Python",
          "HTML"
        ],
        url: "https://github.com/Phaze1D/Udacity-Fullstack-Projects/tree/master/MovieTrailerWebsite",
        images: [ 'public/mo169-large.jpg', 'public/mo169-land.jpg', 'public/mo169-medium.jpg' ]
      },
      {
        title: "Portfolio",
        dates: {from: "Feb 19, 2017", to: "Feb 22, 2017"},
        description: `My Portfolio Website which is also part of the Udacity Nanodegree Fullstack and Frontend Courses. I made this with pure
                  Javascript and Handlebars to keep my HTML DRY. Surprisingly, I can up with the design even though I do not consider myself a UI Designer`,
        tags: [
          "Javascript",
          "HTML",
          "Handlebars",
          "Webpack",
          "SCSS"
        ],
        url: "https://github.com/Phaze1D/Portfolio",
        images: [ 'public/po169-large.jpg', 'public/po169-land.jpg', 'public/po169-medium.jpg' ]
      },
      {
        title: "Rising Fall Android",
        dates: {from: "Aug 26, 2014", to: "Jan 3, 2015"},
        description: `This was the first Android game that I published. It is a simple 2D game where you have to rearrange balls of the same
                  color together and eliminate them before the hit the top. It's kind of like a mix between Candy Crush and Tetris. I used a game engine
                  called LibGDX which is written in Java and I used some of the Android SDK for app purchases.`,
        tags: [
          "Java",
          "Android",
          "LibGDX"
        ],
        url: "https://play.google.com/store/apps/details?id=com.Phaze1D.RisingFallAndroidV2.android",
        images: [ 'public/rf169-large.jpg', 'public/rf169-land.jpg', 'public/rf169-medium.jpg' ]
      },
      {
        title: "Rising Fall IOS",
        dates: {from: "Aug 21, 2014", to: "Jan 3, 2015"},
        description: `This is the IOS version of Rising Fall built with Apple's Native 2D game called SpriteKit, written in Objective C. This was
                  the first IOS game that I published on the App Store. I came up with the idea when I was in college and I decided to start the Project
                  during my summer break. `,
        tags: [
          "Objective C",
          "IOS",
          "SpriteKit"
        ],
        url: "https://itunes.apple.com/us/app/rising-fall/id904055570?mt=8",
        images: [ 'public/rf169-large.jpg', 'public/rf169-land.jpg', 'public/rf169-medium.jpg' ]
      },
      {
        title: "Eschew Cocos2d-X",
        dates: {from: "Mar 3, 2015", to: "Mar 30, 2015"},
        description: `This was a small litte game I made to learn some C++. I used a game engine called Cocos2d-X which is written in C++. The
                  game is just a simple game where the user has to avoid the color boxs by moving the circle around. It gets harder and harder the longer
                  you play it.`,
        tags: [
          "C++",
          "Cocos2d-X",
          "Android",
          "IOS"
        ],
        url: "https://itunes.apple.com/us/app/eschew/id980786957?mt=8",
        images: [ 'public/es169-large.jpg', 'public/es169-land.jpg', 'public/es169-medium.jpg' ]
      }
    ],
    display: ProjectsDisplay // Can be found in display_functions.js file
  },

  intro: {
    display: IntroDisplay
  },

  print: {
    display: PrintDisplay
  }

}
