# commentary

A React SPA project for showing a sports commentary.

## Setup

- Git clone the repo to download the project files and cd to commentary folder.

- In the terminal run: `npm install` to install all the dependencies for the project.

- Run `npm start` to get the app started.

- Head to http://localhost:3000/ in the browser to see it.

## Testing

Run `npm run test` to run the test suites and type `u` to update the snapshot tests.

I have written a few basic tests using Jest and Enzyme. I have used a mix of unit and snapshot tests for each component. As the interface relies on changing times the Feed snapshot fails if it's not up to date. I have also generated a coverage report. You can generate one to look at in the CLI using `npm test -- --coverage`.

## My approach

I started out by setting up a simple create-react-app project as I wanted to jump into development quickly. I then took some time to think about the structure of the app components and started building the Feed. I used styled-components for styling as it maintains componentisation. The commentary involves iterating over the comments in the data.js file and displaying them in a list. For the time I used moment.js. As I am mocking a sporting event which starts at a specific time, I am using the current hour as the start point and simulating the various times comments have been created, which are hardcoded. If I had more time on this I would set up the app so it would get the time of the comment creation and use that to display the minutes. There would also be a consideration of responsiveness and additional styling, such as adding the verticle lines between the minutes values.
