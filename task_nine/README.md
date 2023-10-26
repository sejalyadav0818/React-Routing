# Task 9: Breadcrumbs

-Implement a breadcrumb navigation at the top of the page. For example, if a user is on the             AppDevelopment page inside Services, the breadcrumbs should display: Home > Services > App Development.
- Create a new component called Services.
- Inside the Services component, create three more components: WebDevelopment, AppDevelopment, and SEO.
- Implement nested routes inside the Services route to navigate between these service types.

Demo : https://vimeo.com/878198192/4bba560684?share=copy

## Extra
When navigating between pages, make sure the new page starts at the top, not preserving the scroll position from the previous page. You can use React Router's history to detect route changes and scroll to the top.
https://www.youtube.com/watch?v=8c5eMyJR9Js