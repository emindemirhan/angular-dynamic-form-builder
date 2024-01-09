# Angular Dynamic Form Builder

This project is an Angular application that demonstrates the implementation of a dynamic form builder. The application allows users to create forms with various types of fields dynamically.

## Project Setup

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the command line.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and visit `http://localhost:4200/` to view the application.

## Running Cypress for End-to-End Testing

After the project is running, you can run end-to-end tests using Cypress:

1. Open a new terminal.
2. Run `npm run cy:run` to execute Cypress tests in headless mode.
   OR
   Run `npx cypress open` to open the Cypress Test Runner and interactively run tests.

Make sure the application is running before running Cypress tests.

## Key Functionalities

- **Dynamic Form Creation**: Users can dynamically create forms by providing a JSON config, adding different types of fields such as text, email, password, number, date, select, checkbox, and textarea.

- **Validation**: Each form field supports validation rules, including required, email, minimum length, maximum length, and custom patterns.

- **Submission and Reset**: Users can submit the form, and the application will display validation errors if any. Additionally, a reset button allows users to clear the form.

## Coding Standards

- **Angular**: The project follows Angular best practices and adheres to the official style guide.

- **TypeScript**: The code is written in TypeScript, ensuring type safety and maintainability.

- **Cypress for E2E Testing**: Cypress is used for end-to-end testing to ensure the reliability of the application.

- **Prettier**: The codebase is formatted using Prettier to maintain a consistent and clean coding style.
-
- **ESLint**: ESLint is configured with standard rules to enforce coding standards. Run `npm run lint` to check for linting issues.
