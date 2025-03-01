# Event Manager by The Bug Catcher

A comprehensive event management platform with separate views for adults and children, built with React, Tailwind CSS, Express, and MongoDB.

## Overview
Event Manager is a full-stack web application designed to streamline event planning and execution. It provides different views for adults and children, allowing parents/organizers to track budgets and progress while children can easily view event schedules.

## Features

### For Everyone
- **Event Timeline**: Interactive timeline showing all scheduled events with details
- **AI Chatbot**: Intelligent assistant to answer questions about events and provide help
- **Mobile-Responsive Design**: Seamless experience across all devices

### For Adults (Organizers/Parents)
- **Budget Tracking**: Manage and monitor event expenses in real-time
- **Progress Dashboard**: View comprehensive progress metrics for all event planning tasks
- **Admin Controls**: Manage user permissions and content visibility

### For Children
- **Simplified Timeline**: Kid-friendly interface showing only event times and basic information
- **Interactive Elements**: Engaging design elements to make the schedule more appealing

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux (for state management)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Installation

```bash
# Clone the repository
git clone https://github.com/the-bug-catcher/event-manager.git

# Change into the project directory
cd event-manager

# Install backend dependencies
npm install

# Change into the frontend directory
cd client

# Install frontend dependencies
npm install

# Return to root directory
cd ..
```

## Configuration
Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
NODE_ENV=development
```

## Running the Application

```bash
# Run backend and frontend concurrently (from root directory)
npm run dev

# Run backend only
npm run server

# Run frontend only
npm run client
```

The application will be available at `http://localhost:3000`, and the API at `http://localhost:5000`.

## API Reference

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event
- `GET /api/events/:id` - Get a specific event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

### Budget
- `GET /api/budget/:eventId` - Get budget for a specific event
- `POST /api/budget/:eventId` - Add a budget item
- `PUT /api/budget/:eventId/:itemId` - Update a budget item
- `DELETE /api/budget/:eventId/:itemId` - Delete a budget item

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## About The Bug Catcher
The Bug Catcher is a dedicated team of developers focused on creating intuitive and reliable web applications. We believe in clean code, user-centered design, and continuous improvement.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Future Enhancements
- Calendar integration with Google Calendar and Outlook
- Payment processing for event registration
- Event templates for quicker setup
- Enhanced analytics for event performance
