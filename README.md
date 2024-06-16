# Next.js App with TypeScript, Contentful CMS, and Statsig

This is a Next.js application built with TypeScript, integrated with Contentful CMS for content management, and Statsig for feature flags and experimentation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js** for server-side rendering and static site generation.
- **TypeScript** for type safety and improved developer experience.
- **Contentful CMS** for content management.
- **Statsig** for feature flags and experimentation.

## Prerequisites

- Node.js >= 12.x
- npm or yarn
- Contentful account and space
- Statsig account

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    CONTENTFUL_SPACE_ID=your_space_id
    CONTENTFUL_ACCESS_TOKEN=your_access_token
    CONTENTFUL_ENVIRONMENT=your_environment

    STATSIG_CLIENT_KEY=your_client_key
    ```

## Configuration

### Contentful

1. Log in to your Contentful account.
2. Create a new space and add content models as needed.
3. Generate an API key and add it to the `.env.local` file.

### Statsig

1. Log in to your Statsig account.
2. Obtain your client key and add it to the `.env.local` file.

## Usage

1. Run the development server:

    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `dev`: Runs the application in development mode.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for linting errors.
- `type-check`: Runs TypeScript type checks.

## Folder Structure

```plaintext
├── components    # React components
├── lib           # Utility functions and libraries
├── pages         # Next.js pages
├── public        # Public assets
├── styles        # Styling files
├── types         # TypeScript types
├── .env.local    # Environment variables
├── next.config.js# Next.js configuration
├── package.json  # Project dependencies and scripts
├── README.md     # Project documentation
└── tsconfig.json # TypeScript configuration