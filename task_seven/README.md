# Task 7 :  Protected Routes in React with React Router v6 & 404 page

### Overview:
Create a system where users can only access the "Profile" page if they're logged in. If they're not logged in and try to access the profile page, they should be redirected to the login page.

### Steps:

1. **Set Up Authentication Context:**
   - Create an `AuthContext` to manage and share the login state.
   - Wrap your app with `AuthProvider` to make `isLoggedIn` and `setIsLoggedIn` available throughout the app.

2. **Login Component:**
   - Integrate `AuthContext` to toggle the `isLoggedIn` state.
   - Use the `Navigate` function from React Router v6 to programmatically navigate between routes.

3. **Private Route Component:**
   - Create a `PrivateRoute` component that wraps protected routes.
   - Within `PrivateRoute`, use the `isLoggedIn` state from `AuthContext` to decide whether to display the route or redirect to the login page.

4. **Integrate into App:**
   - Use the `PrivateRoute` component to wrap the `/profile` route.
   - Make sure to provide all routes within the `AuthProvider` context.
5. **404 Page:** 
   - Create a NotFound component.   
   - If a user navigates to a route that doesn't exist, display the NotFound component.

Demo : https://vimeo.com/878197495/d972cf1397?share=copy
---
