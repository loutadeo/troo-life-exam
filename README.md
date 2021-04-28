## Development server

Run `npm install` to install all Angular dependencies. Delete the directory 'node_modules' if it exists.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Protractor Tests 
Run `ng e2e --webdriver-update=false` and keep your hands off the keyboard and mouse.
The test scripts may fail if it is out of the screen's focus.

## Common Issues Encountered
If `ng e2e` fails to start and you encounter an error similar to this:

`E/launcher - session not created: This version of ChromeDriver only supports Chrome version 79
Driver info: chromedriver=79.0.3945.16`

Delete node_modules directory then run the following commands:
`webdriver-manager clean`, then
`node ./node_modules/protractor/bin/webdriver-manager update --gecko=false --versions.chrome '<current chrome version>'`