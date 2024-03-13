# activitywatch-leaderboard-ui

# ActivityWatch Leaderboard Frontend Specification

The specification outlined below focuses on the frontend architecture, UI components, and interactions, assuming a mocked backend during the development phase for testing and integration purposes.

### 1. Frontend Architecture

- **Framework**: React
- **UI Library**: Chakra UI for styling and layout
- **State Management**: Context API or Redux for managing global state, specifically for user authentication status, leaderboard data, and user preferences
- **API Communication**: Axios or Fetch API for handling requests to the mocked backend
- **Testing**: Jest for unit tests and React Testing Library for component tests
- **Routing**: React Router for navigation between different pages (dashboard, profile, settings)

### 2. Mocked Backend

- Define mock data structures for user stats, leaderboard rankings, and user profiles to ensure frontend components can handle real-world data complexities.

### 3. User Interface Components

#### Dashboard

- **Leaderboard Table**: A responsive table displaying the rankings, user names (or anonymized IDs based on privacy settings), and key metrics such as total productive time and categories of activity. Columns should be sortable.
- **Filters**: Dropdown menus or toggle buttons for filtering the leaderboard by time frame (daily, weekly, monthly) and activity category.
- **Search**: A search bar allowing users to find specific users in the leaderboard.

#### Profile Page

- **User Stats Summary**: Visual representations (charts, progress bars) of the user's productivity stats over time. Use Chakra UI's Box and Flex components for layout, and integrate a chart library compatible with React for data visualization.
- **Privacy Settings**: Toggle switches or checkboxes for users to opt-in to the leaderboard, anonymize their profile, and select what data is shared.
- **Data Sync**: A button to manually trigger data sync from the user's self-hosted ActivityWatch instance to the cloud, with visual feedback on sync status.

#### Settings Page

- **Leaderboard Settings**: Options to set leaderboard visibility (public, private, friends-only), define custom metrics for competition, and manage notification preferences.
- **Account Management**: Options for updating account information, changing passwords, and deleting the account.

### 4. Navigation

- Use Chakra UI's Drawer or Tabs component for a responsive navigation menu that includes links to the Dashboard, Profile Page, and Settings Page.
- Include a responsive design using Chakra UI's breakpoints for mobile, tablet, and desktop views, ensuring accessibility and usability across devices.

### 5. Security and Accessibility

- Implement form validation and error handling for user input fields, ensuring robustness and user feedback.
- Adhere to accessibility best practices, such as keyboard navigation, ARIA roles, and contrast ratios, leveraging Chakra UI's built-in accessibility features.

This specification aims to create a modern, engaging, and user-centric leaderboard frontend for ActivityWatch, leveraging React and Chakra UI's capabilities to deliver a high-quality user experience.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/activitywatch-leaderboard-ui.git
cd activitywatch-leaderboard-ui
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
