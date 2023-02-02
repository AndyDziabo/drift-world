# Drift World

A social app for the drifting community that provides sections for classified ads, event postings, services section, and a media section for all those hotdogs to show off in. 

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Room for Improvement](#room-for-improvement)

## General Information
- Full-stack project with a React frontend and a Rails backend
- Single page application with multiple client-side routes using React Router
- Implemented authentication/authorization including password protection using bcrypt
- Validations for new user sign up and existing user login
- User access to edit and delete resources only if they are the creator of that resource

## Technologies Used
- React
- React Router
- Ruby on Rails
- bcrypt


## Features
- Classified ads section where the user can post either parts or vehicles for sale. The classified section also features commenting on the ads
- Event section where users can post events that are upcoming
- Services section where users can post jobs that they will do such as engine building or welding/fabrication
- Media Section where users can post their videos and show off their hotdoging 

For a video demo of the app visit https://andrewdziabo.dev/ and goto the projects section

## Setup
1. Fork/clone this repo to your local environment.
2. In your terminal, run <code>npm install</code>
3. To start the Postgresql service:</br>
  for WSL <code>$ sudo service postgresql start</code></br>
  for OSX <code>$ brew services start postgresql</code>
4. Then to start the server <code>$ rails s</code>
5. Then in a separate terminal, run <code>npm start --prefix client</code>


## Room for Improvement
- Mobile compatibility
- Add commenting for the events, services, and media sections
- UI refinement
