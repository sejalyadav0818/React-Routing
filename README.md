# React-Routing 

### Task 1: Basic Route Setup
1. Create a new React app using Create React App (CRA).
2. Install `react-router-dom`.
3. Set up three components: `Home`, `About`, and `Contact`.
4. Implement basic routes to navigate between these components.

### Task 2: Nested Routing
1. Create a new component called `Services`.
2. Inside the `Services` component, create three more components: `WebDevelopment`, `AppDevelopment`, and `SEO`.
3. Implement nested routes inside the `Services` route to navigate between these service types.

### Task 3: Route Parameters
1. Modify the `Contact` component to display user-specific messages based on a user ID passed in the URL (e.g., `/contact/1`).
2. Display a message like "Hello user with ID: 1" based on the URL parameter.

### Task 4: Query Parameters
1. In the `Services` component, add filters to sort services by price, rating, etc.
2. Use query parameters to handle these filters. For example, navigating to `/services?sort=price` should display services sorted by price.

### Task 5: Redirects
1. Create a "Profile" page that only renders if a user is "logged in".
2. Create a fake login mechanism (e.g., a button that toggles a `isLoggedIn` state).
3. If a user is not logged in and tries to access the profile page, redirect them to the home page.

### Task 6: Route Protection with Guards
1. Protect the "Profile" page using route guards. It should check if the user is logged in before rendering the profile component.
2. If not logged in, redirect to a new `Login` page where the user can "log in" (using the fake login mechanism).

### Task 7: 404 Page
1. Create a `NotFound` component.
2. If a user navigates to a route that doesn't exist, display the `NotFound` component.

### Task 8: Programmatic Navigation
1. On the `Contact` page, add a button that says "Go Home".
2. When this button is clicked, programmatically navigate the user to the home page using React Router's `useHistory` hook.

### Task 9: Breadcrumbs
1. Implement a breadcrumb navigation at the top of the page. For example, if a user is on the `AppDevelopment` page inside `Services`, the breadcrumbs should display: `Home > Services > App Development`.

### Task 10: Scroll Restoration
1. When navigating between pages, make sure the new page starts at the top, not preserving the scroll position from the previous page. You can use React Router's history to detect route changes and scroll to the top.
