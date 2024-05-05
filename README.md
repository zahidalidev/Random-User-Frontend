# Random User Frontend Coding Challenge

## Table of Contents
1. [Project Setup and Running Steps](#project-setup-and-running-steps)
2. [Developer Notes](#developer-notes)
3. [API Documentation](#api-documentation)
4. [Project Structure](#project-structure)
5. [Technologies and Libraries Used](#technologies-and-libraries-used)

## Project Setup and Running Steps

### Prerequisites

- Node.js (20) and npm installed on your machine

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/zahidalidev/Random-User-Frontend.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Random-User-Frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

5. **Open your web browser and visit `http://localhost:3000` to view the application.**

## Developer Notes

### Component Structure and Thought Process

- **Listing Page**: The Listing page component fetches random user data from the provided API endpoint. It includes pagination, persisting filters by gender, and a search functionality. The page structure is organized into separate components for better maintainability and reusability.

- **Profile Page**: The Profile page component displays detailed information about a specific user. It includes the user's profile picture, name, location, contact details, Nationality flag, and a Google Maps iframe showing the user's coordinates.

- **Components**: Each UI component is designed to be reusable and modular. They are organized into separate folders based on their functionality.

### Approach for Search Feature

The search functionality on the Listing page allows users to filter users based on their name or phone number. When the user types in the search input field, a **debounce** mechanism is applied to limit the frequency of API calls. The search term is used to filter the list of users fetched from the API, and the filtered results are displayed in real-time.

## API Documentation

The project uses the following API to fetch random user data:

- Base URL: `https://randomuser.me/api/`

## Project Structure

The project structure is organized as follows:

```
frontend-coding-challenge/
│
├── src/
│   ├── components/
│   │   ├── filters/
│   │   ├── search/
│   │   ├── userCard/
│   │   ├── pagination/
│   │   ├── loadingIndicator/
│   │   ├── profile/
│   │   └── index.ts
│   ├── pages/
│   │   ├── listingPage/
│   │   └── profilePage.tsx
│   ├── services/
│   │   ├── userService/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
│
├── public/
│   ├── index.html
├── README.md
└── package.json
```

## Technologies and Libraries Used
- **React:** Used as the frontend library for building UI components and managing state.
- **React Router DOM**: Used for client-side routing to navigate between different pages in the application.
- **Axios**: Used for making HTTP requests to fetch data from the API.
- **Tailwind CSS**: Used for styling the components with utility-first CSS classes for rapid development.
- **React Icons**: Used for including icons in the application for better user experience.
- **React Country Flag**: Used for displaying nationality flag icons based on user data.
- **TypeScript**: Used for adding static typing to JavaScript code, providing better code quality and developer experience.
