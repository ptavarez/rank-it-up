# Rank It Up

Hello githubber! This repo contains the code I used to build the client side of my first fullstack application, Rank It Up: A Standings Generator. Rank It Up allows users to create players or teams. Once a player or team is created, users are able to face them off against each other in a match. Within a match, they will determine the outcome and choose a winner, loser, or decide if it's a draw. The application will keep record of each player's or team's wins and losses to make a standing table. This table will rank the player or team! Do you need to Rank It Up?!

## Overview

A quick look at what it took to complete this project:

- Wireframes and User Stories
- Schedule/Planning
- Technologies Used
- Story
- Still Have Work To Finish

### Links

- [Application's API Repository](https://github.com/ptavarez16/rank-it-up-api)

- [Application's Deployment](http://pedrotavarez.com/rank-it-up/)

- [Application's Production](https://rank-it-up.herokuapp.com/)

## Wireframes and User Stories

### Wireframes

A wireframe is an image that sketches out the layout of major pieces of content within a page, without all of the fully-rendered detail that might be present in an illustration.

My wireframe is a basic layout of what I planned on making my site look. Check them out:

Sign in page
![Sign In Page](https://i.imgur.com/9aorQWi.png?1)

Main page
![Main Page](https://i.imgur.com/8ds5AJp.png?1)

Player page
![Player Page](https://i.imgur.com/hW36a0g.png?1)

As you could probably see, I ended up changing the name of the applicaion, as well as change the look a little.

### User Stories

A user story is a tool used in software development to capture a description of a software feature from an end-user perspective.

When I was first thinking of how I wanted this app to work, Rank It Up's user stories went as follows:
- Authentication
  - User will be able to create an account
  - User will be able to sign in
  - User will be able to change password
  - User will be able to sign up
- Club Functionality
    - User will be able to create a "club"
    - User will be able to choose between solo club or team club
    - Solo clubs will be player vs player / Team clubs will be team vs team
    - User will be able to name the club
    - User will be able to invite other users with the club's I.D.
    - User will be able to join club with the club's I.D.
    - User will be able to view all of the clubs they are a part of
    - User will be able to create players or teams
    - Users will be able to create matches
  - Win / Loss Functionality
    - User will be able to create a match
      - Select from a list of players/teams
      - Once the outcome is determined, the winner will receive 1+ on their number of wins, loser will receive a 1+ on their number of losses
        - Draw option will be available
    - User will have access to their player's/team's number of wins and losses
    - User's players/teams will be ranked
      - Ability to filter records from most wins to most losses
    - User will be able to see who their players/teams beat or lost to
    - User will be able to see outcomes of all matches

Unfortunately, trying to fit all of these features within a couple days was impossible. To meet GA's requirements for project 2, I decided to make an MVP version of the app with simpler user stories. Those went as follows:
- Sign in Page
  - User will be able to create an account
  - User will be able to sign in
- Option Page
  - User will be to change password
  - User will be able to sign out
  - User will be able to create/delete a player
  - User will be able to create/delete match
- Match Page
  - User will be able to choose two players
  - User will be able to determine winner
  - User will be able to determine loser
- Stats Page
  - User will be able to view all players
  - User will be able to view all matches
  - User will be able to view ranks

## Technologies Used
This project helped me grasp a better understanding of the new tools and technologies that were introduced to us. My project consisted of the following technologies:
- HTML
  - Hypertext Markup Language is the standard markup language for creating web pages and web applications.
  - Most of what the user see are html elements. Understanding how html works and what I used it for is key.
- Sass
  - Sass is a scripting language that is interpreted or compiled into Cascading Style Sheets (CSS).
  - A cousin to CSS, SASS stands for Syntactically Awesome Style Sheets. It's a better way of organizing you code by modularizing it.
- Bootstrap
  - Bootstrap contains HTML nd CSS based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions.
  - I used bootstrap for modal templates and styling. Pretty clutch!
- Handlebars
  - Handlebars.js is a popular templating engine that is powerful yet simple to use.
  - With Handlebars, I was able to separate the generation of HTML from the rest of my JavaScript to write cleaner code.
- JavaScript
  - JavaScript is a high-level, interpreted programming language.
  - This is basically what most of my game's logic consisted of. I feel like I got a better understanding of using callbacks, and "this" really saved my butt for a vital function.
- jQuery
  - jQuery is a fast, small, and feature-rich JavaScript library.
  - This JavaScript library is pretty damn awesome. It's basically how I communicated between my html, JS, and even Sass files.
- Ajax
  - Ajax is a set of Web development techniques using many Web technologies on the client side to create asynchronous Web applications.
  - This was how I sent data over to my api!

## Story

I completed the API side of this project in less than two days. I felt like I had a good amount of time to get then done, but boy did I underestimate the scope of this project. I really felt like I would be able to get every feature in before due date, but that was not the case.

Originally, I wanted a ton of features for this app. As time went on, I had to pick and choose the more important features to meet requirements for the project. It's a bummer having to present what I feel like is an incomplete project, but it is what it is. This is something that I want to take my time with because it's an app that all my friends will use.

Before starting this project, we were introduced to Handlebars. I feel like this tool made my life a whole lot easier when it came to displaying all a user's players. Without it, I feel like things will have been much harder.

## Still Have Work To Finish

Eventually, I will like to expand the user stories and make the application more functional. I want users to be able to make clubs, which will have players/teams and matches. This would be great because a User will then not have to create a different account if they want to keep track of rankings for a different game or event.

A problem I know I will need to solve in the near future is within the match function. I want to be able to create fields where a user can choose two players or teams and then be able to select only one of those as the winner or loser.

For now, this client has all the necessary fields to meet requirements. The MVP is actually fairly simple. As time goes on, this applicaion will change and grow more complex. Even so, as long as I stay organized, things should still flow smoothly.

Here's a list of things I need to work on:
- Add match resource to client and have it communicate with the API
- Create a match function
- Create a standings section 
