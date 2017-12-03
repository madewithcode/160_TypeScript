# TypeScript
Repo for Udemy Course on 'Understanding TypeScript'

# working directory: TS01

# initial one time setup
$ npm -g install typescript@1.8.10 **installed typescript globally. 1.8.10 is highest supported by WebStorm 10.**

$ npm init  **creates package.json**

$ npm install lite-server --save-dev  **for running on localhost, --save-dev so this doesn't go to PROD.**

$ tsc --init **puts this folder under control of typescript, creates tsconfig.json**

# every time
$ npm start **runs lite-server, opens browser, serves index.html**

# as needed
$ tsc app.ts **compiles to app.js (webstorm also does this, and generates map file)**

$ tsc **if tsc --init has been run, this compiles all ts files to js.**

$ tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts **takes the ts files and outputs to app.js**

$ tsc app.ts --outFile app.js **if all dependencies are listed as 'reference path' as first lines of app.ts**