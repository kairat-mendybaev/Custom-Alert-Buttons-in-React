# Custom-Alert-Buttons-in-React

npx create-react-app alert-button-toolbar
cd alert-button-toolbar
npm start

How to Run the Application

Follow these steps to set up and run the Custom Alert Buttons application on your local environment:

Prerequisites
Ensure you have the following installed:

Node.js: Download and install it from the Node.js website.
npm: Comes installed with Node.js.
Setup Instructions
Clone the Repository:
If available, use git clone followed by the repository URL.
If the repository URL is not provided, obtain the code from the appropriate source and place it in a local directory.
Navigate to the Project Directory:
Change into the project directory via the command line.
Install Dependencies:
Run npm install to install the necessary dependencies required for the React application.
Start the Application:
Execute npm start to compile and launch the application in your default web browser automatically.
The application will be accessible at http://localhost:3000.
Component Details

The application primarily consists of a Toolbar component which renders multiple AlertButton components. Each AlertButton is designed to display a different alert message when clicked.

AlertButton Component
Accepts message and children as props.
The children prop determines the button's display text.
The message prop specifies the alert message to be shown when the button is clicked.
The button uses an onClick event handler to display the alert.
