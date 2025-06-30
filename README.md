# TravelTrucks

TravelTrucks is a web application designed for a camper rental company. This
project implements the frontend of the application using modern web technologies
to provide an intuitive and user-friendly experience. Users can browse available
campers, filter them based on specific criteria, view detailed camper pages with
reviews, and book campers directly through the website.

## Features

### General Features

- **Dynamic Filtering:** Filter campers based on location, body type, and
  features like AC, kitchen, bathroom, etc.
- **Favorites List:** Save preferred campers for later viewing; data persists
  even after refreshing the page.
- **Detailed Camper Pages:** View comprehensive camper details, user reviews,
  and a booking form.
- **Interactive Notifications:** Real-time success or error notifications using
  _react-hot-toast_.

## Key Functionalities

1. **Home Page:**

- Includes a banner and a "View Now" button for navigating to the catalog page.

2. **Catalog Page:**

- Displays a list of available campers with filters.
- Supports lazy loading of additional campers using a "Load More" - button.
- Includes a "Show More" button on camper cards to view detailed information on
  a new page.

3. **Camper Details Page:**

- Showcases detailed specifications, photos, and user reviews (5-star rating
  system).
- Includes a booking form with notifications on successful submissions.

4. **Not Found Page**

- Includes user-friendly message indicating the requested page was not found.
- A button to redirect users go back.

## Backend Integration

**API Endpoints:**

- GET /campers: Retrieve all campers (with server-side filtering).
- GET /campers/:id: Retrieve specific camper details.

## Technologies Used

- **Frontend Framework:** React (bundled with Vite).
- **Language:** TypeScript (migrating from JavaScript)
- **State Management:** Redux.
- **Routing:** React Router.
- **HTTP Requests:** Axios.
- **Styling:** CSS Modules.
- **Form:** Formik.
- **Notifications:** react-hot-toast.

## Installation

1. Clone the repository: git clone
   `https://github.com/PrysiazhnaIra/CamperHire.git`

2. Install dependencies: `npm install`

3. Start the development server: `npm run dev`

4. Open your browser and navigate to `http://localhost:5173.`

## Deployment

The project is deployed and accessible at:

- Live Demo: [TravelTrucks on Vercel](https://camper-hire.vercel.app/)

## Author

- Name: Ira Prysiazhna
- [My GitHub Profile URL](https://github.com/PrysiazhnaIra)
- [My LinkedIn Profile URL](https://www.linkedin.com/in/ira-prysiazhna/)
