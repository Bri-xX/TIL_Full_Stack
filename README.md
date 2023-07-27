# Today I Learned: Full-Stack Website

Today I Learned is a full-stack website that allows users to share, learn, and discover short, concise pieces of information or knowledge they learned each day. This project is a single-page application (SPA) developed using ReactJS and Create-React-App boilerplate, with Supabase serving as the backend.

## Overview

**Frontend:** ReactJS, built on top of the Create-React-App boilerplate.
- This setup allows for rapid development and a modular approach to building user interfaces.
- ReactJS is used for its component-based architecture, state management, and its robust ecosystem.

**Backend:** Supabase, an open-source alternative to Firebase.
- Supabase provides user authentication, real-time databases, instant APIs, and many more features.
- It's an excellent option for serverless applications and fits well with the ReactJS frontend.

## Getting Started

To run this project locally, follow the instructions below.

**Prerequisites**

Ensure that you have the following installed on your local development machine:
- Node.js >= 14.0.0
- NPM >= 5.6.0
- Git

**Clone the Repository**

First, clone this repository to your local machine using `https://github.com/Bri-xX/TIL_Full_Stack.git`.

```bash
git clone https://github.com/Bri-xX/TIL_Full_Stack.git
```

**Installation**

Inside the cloned repository, install the required npm packages:

```bash
npm install
```

**Environment Variables**

Next, create a `.env` file in the root of your project folder. Update this file with your Supabase URL and public anon key:

```env
REACT_APP_SUPABASEURL=your_supabase_url
REACT_APP_SUPABASEKEY=your_supabase_anon_key
```

**Run the Application**

Now, you can run the application in your local development environment:

```bash
npm start
```

Visit `http://localhost:3000` in your web browser. The application should be up and running.

## Testing

Run the tests using the command below:

```bash
npm test
```

## Deployment

You can deploy the app using any hosting platform of your choice like Vercel, Netlify, AWS, etc. Make sure to set the environment variables as per your hosting provider's instructions.


## Contact

If you have any questions, feel free to contact me. Enjoy coding!

Remember, this documentation is a guide to get you started. It may not cover all the functionalities of the application. You're encouraged to explore and expand upon this documentation.