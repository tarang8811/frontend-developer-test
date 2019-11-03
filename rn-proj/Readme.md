## Getting Started

1. Install the latest version of node
2. Install the [Expo client](https://expo.io/learn) command: `npm install expo-cli --global`
3. Install the [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) or [iOS](https://itunes.apple.com/app/apple-store/id982107779) Expo app on your phone.
4. Clone this repository to your own computer: `git clone https://github.com/tarang8811/frontend-developer-test`
5. Enter into the `rn-proj` directory
6. Run `yarn install` or `npm install`
7. Run `yarn start` or `npm start`

## Technical Choices

Here is a brief of the libraries used and the thought process being using them.

- Libraries
  - react-redux - One of the best state management libraries for large application and use by feeld as well
  - redux-sagas - Makes it very easy to handle impure parts of the application and also test
  - react-native-animated-tabs - Swiper library for cards view
  - redux-sauce - A wrapper for reducers and actions. Reduces one boiler plate for action and reducers where we can use redux-sauce to combine both
  - api-sauce - Library to hit server api
  - seamless-immutable - Create immutable data for the project for better state management
  - react-saga-test-plan - An easy and simple to use testing library for sagas

Also for linting i prefer prettier but it is not injected in the project. Since linting is something that is variable for different developer i like to use my own style and have a team discussion to come to a style guide for the project. Since we used expo we also had some limitation around not being able to use some of the libraries like `react-native-fast-image`.

Also i prefer making modules out of each diretory hence you would find `packaage.json` in each directory. It makes it very clean and easy to import different files

## Architecture

I went forward building this application considering it would eventually evolve into a big project hence the structure has been divided into different boilerplates. I have used [Redux](https://redux.js.org/) for state management. [Sagas](http://redux-saga.js.org) for the impure parts of the application. [React-Navigation](https://reactnavigation.org/) for navigation and I18n for localisation. The files and folders are structured in the following format.

```
rn-proj
|   ...other expo files and project files
│   Readme.md
|   App.js // Main entry for the RN project
│   app.json // config file for expo
│
└───__tests__
│   │   App.spec.js // tests app component
│   └───...other files and testing folder for sagas and redux
│
└─── App
│   │
│   └─── Components // stores all the reusable components
│   │   └─── AppLoader // main loader for the app
│   │   └─── Button
│   │   └─── Card // card view
│   │   └─── Carousel
│   │   └─── GradientText
│   │   └─── Modal
│   │   └─── ScrollableImages
│   │   └─── TappableImages
│   │
│   └─── Containers
│   │   └─── ChatScreen // mock view
│   │   └─── InfoScreen
│   │   └─── SearchScreen // main view for the user card profile
│   │   └─── Settings Screen
│   │   └─── UserInfoScreen // main view for user full profile
│   │
│   └─── I18n // localisation boilerplate
│   │   index.js
│   │   I18n.js
│   │
│   └─── Navigation // navigation boilerplate
│   │   AppNavigation.js
│   │
│   └─── Redux
│   │   UIRedux.js
│   │   UserRedux.js
│   │   CreateStrore.js // config file to create store
│   │   index.js // setup file for redux
│   │
│   └─── Sagas
│   │   UserSaga.js
│   │   index.js // setup file for saga
│   │
│   └─── Services // contains api file
│   │
│   └─── Themes // contains all constants, colors and metrics
|   |
└───assets // contains all the images for the project

```

## Debugging

Although i haven't implemented in this project but `Reactotron` is a great tool to check api, sagas and redux logs. It also provides and elegant way to change redux state and play around with it.

## Product Thinking & Ideas

The base of the project is very simple where you need to show user profile in a clean and elegant way but unlike other dating apps there is a feature to be able to `skip` the profile. SKIP means that you are not decisive in the current context and might look at the user at a later stage. Hence it becomes very important to provide a way where you could come back and see the user profile to make a decision since for dating apps it's very important to have as much choices as possible.

Considering the above point i went with a `Swipeable Card` like structure where you could like and dislike using the buttons and also `skip` the profile but just `swiping right` and combe back to the profile by `swiping left` at a later stage. This flow makes it very easy to implement the three features namely LIKE, DISLIKE and SKIP. The design implemented is very simple and minimal. A lighter tone of gray has been used for the background and the theme color is a gradient of pink and purple.

I also have a filter and location icon. Although they are not working but it's is kept to fill up the space for the view and also make use of the empty space. Once the features are implemented it could provide a nice flow for the users where they could choose from different filters and location and make a decision on user profile

## Suggestion

The challenge is very nicely portayed and it is very simple to understand but there are few suggestions for the product, challenge and the api

###Challenge

I would suggest if we could revisit the constraint of expo. Although it provides and easy way to test the project it is harder for developers to showcase the potential and use different libraries. Also there is a missing part in the application where `associated` is not cleary defined. Associated is something that was new to me and i implemented as per my thought process but it would be good if you could explain how it could be implemented or what it means for feeld

###Api

The api is fast and consistent but the only issue is that it is sending similar objects and in that the id's are same too. I had a problem with this since i was using the id's to remove the users that have been liked/disliked. It's fine to use the same objects but i would suggest if the backend could at least send different id's for the objects so that there are actually 20 different user profiles

###Product

The product of feeld is very simple and elegant but there are two things as a user i would say could improve the application.

- Allowing filters in the main page -> this makes it very simple for users to go across various areas and have more choices
- The like/dislike button is interfering with the scroll view. There have been times where i was trying to sroll to look at the details of the profile and the like/dislike interfered with my scrolling. We should try to put it at a different place. Maybe a dedicated view at the bottom of the view

Lastly it was fun and a bit challenging to do this frontend-test for feeld since it tested my coding, design and product thinking abilities and that's where i have loads of fun. I have been essentially working in these three domain in my career and i enjoy doing that. Thanks for considering me and looking forward to hear from you guys. Cheers!
