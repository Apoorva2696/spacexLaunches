# Spacex Launches
This application gives a list of spacex launches and applicable filters like year, launch and landing success. The application is server-side rendered using expressJS.
The application is optimized for mobile, tablet and desktop views using mobile-first approach in css.

## Setup
Clone the repo and run command `npm run build:dev` in the root folder. App is hosted at http://localhost:3000/. 
Your app is ready to go!

# Structure


[![Screenshot-2020-08-10-at-7-33-36-AM.png](https://i.postimg.cc/dt49yKRs/Screenshot-2020-08-10-at-7-33-36-AM.png)](https://postimg.cc/mt19vJ6J)

The root folder consists of `client` and `server` folders.
The `client` folder contains the frontend code. This folder is build and results in a babel converted code in `client/lib` folder. The `lib` folder is user by `server` to get the react code and render it on server-side.

The `client` projects contains components: `Filters` and `Cards` which get rendered by `Landing` page.

## Tests 
To see tests running, `cd client` and run command `npm run test`.

## Lighthouse performance
The application uses best practices and has good performance.


[![Screenshot-2020-08-10-at-12-55-30-AM.png](https://i.postimg.cc/2yf656W9/Screenshot-2020-08-10-at-12-55-30-AM.png)](https://postimg.cc/KkJFqmJt)

## Heroku link

The application is deployed on this link : https://thawing-garden-41557.herokuapp.com/.
