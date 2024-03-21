# Dashboard Frontend Assignment
 
 ## Deployment

The application is deployed on Vercel and can be accessed via the following link:

[Dashboard Assignment](https://dashboard-assignment-three.vercel.app/)

[Deployed Server](https://auth-server-assignment.vercel.app)

Server Code : [Github link](https://github.com/shreyaspathak11/Auth-server-assignment/) 


 ## Sample 
![DashBoard](https://i.ibb.co/Ct0G56T/sample1.png)                                   ![Login Screen](https://i.ibb.co/TLmGsxb/sample2.png)


## Project Structure

The project structure follows a typical React application layout:

```
dashboard/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
      data.js
    components/
      Charts/
        BarChart.js
        LineChart.js
        PolarChart.js
      Forms & Tables/
        EmailForm.js
        Form.js
        Table.js
      Footer.js
      Header.js
      StatusBox/
        MostSoldStatBox.js
        NewCustomerStatBox.js
        StatBox.js
    pages/
      Dashboard.js
      Login.js
      Signup.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    reportWebVitals.js
    setupTests.js
```

- **`src/`:** Contains all the source code for the project.
- **`src/assets/`:** Contains data files used in the application.
- **`src/components/`:** Contains reusable components used across multiple pages.
- **`src/components/Charts/`:** Contains components for different chart types.
- **`src/components/Forms & Tables/`:** Contains components related to forms and tables.
- **`src/components/StatusBox/`:** Contains components for displaying status boxes.
- **`src/pages/`:** Contains the main pages of the application.
- **`public/`:** Contains static assets like HTML files and favicon.
- **`package.json`:** Configuration file for npm dependencies and scripts.
- **`README.md`:** This file, containing project documentation.

## Libraries Used

- **Chakra UI:** Used for building the user interface components with a consistent design system.
- **React Chart.js 2:** Used for creating various types of charts and graphs in the dashboard.
- **React Icons:** Used for adding icons to the UI components.
- **React Router DOM:** Used for handling navigation between different pages in the application.
- **Axios:** Used for making HTTP requests to fetch data from an API.

## Running the App

To run the application locally:

1. Clone the repository:

```
git clone https://github.com/shreyaspathak11/dashboard-Assignment.git
```

2. Navigate to the project directory:

```
cd dashboard
```

3. Install dependencies:

```
npm install
```
4. Create a .env file in root directory and add:

```
REACT_APP_SERVER_URL="https://auth-server-assignment.vercel.app"
```

5. Start the development server:

```
npm start
```

5. Open your browser and visit `http://localhost:3000` to view the application.


## Additional Notes

- The application is optimized and responsive to both desktop and mobile screens.
- All components and layouts are designed to ensure a smooth user experience across different devices and screen sizes.
