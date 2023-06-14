# Text Editor Web Application

This is a JavaScript text editor application that supports next-gen JavaScript features, offline data persistence using IndexedDB, and PWA (Progressive Web App) features such as service workers and a web app manifest.

## Features

- Uses Webpack for bundling JavaScript files.
- Supports next-gen JavaScript features and ensures browser compatibility.
- Uses IndexedDB for data persistence, saving content entered in the text editor for access even after closing and reopening the application.
- Supports PWA features, allowing users to install the web application on their desktop.
- Utilizes service workers and Workbox for precaching static assets and pages for offline use.
- Deployable to Heroku, with appropriate build scripts for a webpack application.

## Folder Structure

When you open this application in an editor, you should see a client-server folder structure. 

## Installation

1. Clone this repository or download the ZIP file.
2. Navigate to the root directory in your terminal.
3. Run `npm install` to install the dependencies.

## Usage

- Run `npm run start` from the root directory to start up the backend and serve the client.
- When you open the text editor, IndexedDB will create a database storage.
- When you enter content and click off of the DOM window, the content will be saved with IndexedDB.
- When you reopen the text editor, the content will be retrieved from IndexedDB.
- Click on the Install button to download the web application to your desktop.
- The application uses service workers, which are registered using Workbox, for caching static assets and pages.

## Deployment

To deploy this application to Heroku, follow these steps:

1. Sign up for a Heroku account if you don't have one.
2. Install the Heroku CLI on your machine.
3. Log in to Heroku through your command line.
4. Create a new Heroku application.
5. Set up the Heroku remote for your local repository.
6. Push your application to Heroku.
7. Open your application URL to confirm that it is live.

Make sure you have proper build scripts set up in your `package.json` file for a webpack application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## License

MIT
