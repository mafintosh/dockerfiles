# node image

Basic node.js dockerfile with support for npm caching
It will copy the contents of the build folder to `/root`
and do an `npm install` and `npm start`

An example app is included as well in server.js and package.json
in order to test this