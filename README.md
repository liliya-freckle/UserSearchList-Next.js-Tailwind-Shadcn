#User Search Next.js Project
This is a Next.js 13 project demonstrating server-side data fetching and component-based UI for a user search list.

#Overview
This project fetches a list of users asynchronously on the server side, then displays the users in a searchable list. The application uses a header and footer layout and follows a clean component-based structure.

#Features
Server-side data fetching: Users data is fetched with fetchUsers() inside the Next.js server component.

Dynamic user search UI: Displays and filters user data (assumed functionality in SearchUserList).

#Technologies Used:

Next.js 13 (App Router, Server Components)
React 18
TypeScript
CSS Modules or your preferred styling approach

#Project Structure

src/
├── app/
│ ├── page.tsx # Main page rendering Header, SearchUserList, Footer
│ └── [id]/ # Dynamic user detail pages (if applicable)
├── components/
│ ├── layouts/
│ │ ├── Header.tsx
│ │ └── Footer.tsx
│ └── UserSearch.tsx # User search list UI component
├── api/
│ └── users.ts # API call: fetchUsers function
├── styles/ # CSS / styling files
├── lib/ # Utility functions
└── types/ # TypeScript interfaces/types
