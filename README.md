# QuickLink: URL Hashing and Shortener

QuickLink is a simple URL Hashing and Shortening service that allows users to shorten URLs, limit access, and generate QR codes for easy sharing. This project features a complete backend for hashing and a user-friendly frontend for seamless interaction.

## Live Demo

Check out the live site: [QuickLink URL Shortener](https://quicklinkurls.netlify.app/)

## Table of Contents
- [QuickLink: URL Hashing and Shortener](#quicklink-url-hashing-and-shortener)
  - [Live Demo](#live-demo)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
    - [Frontend:](#frontend)
    - [Backend:](#backend)
    - [Deployment:](#deployment)
  - [Installation](#installation)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
  - [Usage](#usage)

## Features

- **URL Shortening**: Convert long URLs into short, hashed URLs.
- **Access Limiting**: Set a maximum number of accesses for each shortened URL.
- **QR Code Generation**: Automatically generate a QR code for each shortened URL.
- **Database Storage**: All URLs and access data are stored securely in MongoDB.
- **Cross-Origin Support**: CORS enabled for frontend and backend communication.

## Tech Stack

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast development environment for React applications.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **QRCode.react**: React library to generate QR codes.

### Backend:
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing URLs and metadata.
- **Mongoose**: MongoDB object modeling for Node.js.
- **CORS**: Middleware for Cross-Origin Resource Sharing.
- **dotenv**: For managing environment variables.

### Deployment:
- **Frontend**: Hosted on [Netlify](https://quicklinkurls.netlify.app/).
- **Backend**: Deployed on [Render](https://uhs-hhwc.onrender.com/).
- **GitHub Repositories**:
    - [Frontend Repository](https://github.com/Prashant1510/UHSF.git)
    - [Backend Repository](https://github.com/Prashant1510/UHS.git)

## Installation

### Frontend Setup

1. Clone the frontend repository:

    ```bash
    git clone https://github.com/Prashant1510/UHSF.git
    cd UHSF
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project with the following:

    ```env
    VITE_FETCH_URL=https://your-backend-url.com
    ```

4. Start the frontend development server:

    ```bash
    npm run dev
    ```

The frontend will now be running at `http://localhost:5173`.

### Backend Setup

1. Clone the backend repository:

    ```bash
    git clone https://github.com/Prashant1510/UHS.git
    cd UHS
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project with the following:

    ```env
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/quicklink
    ```

    Replace `MONGODB_URI` with your MongoDB connection string if using MongoDB Atlas.

4. Start the backend server:

    ```bash
    npm start
    ```

The backend will now be running at `http://localhost:3001`.

## Usage

1. **Shortening a URL**:
    - Open the [live site](https://quicklinkurls.netlify.app/).
    - Enter a URL to shorten.
    - Optionally, set the maximum number of accesses for the URL.
    - Click **Submit**.
    - A shortened URL and a QR code will be generated.
    - First time it will take time to generate because the server is free so also slow.

2. **Copying the Shortened URL**:
    - Click **Copy Hashed URL** to copy the shortened URL to your clipboard.

3. **Downloading the QR Code**:
    - Click **Download QR Code** to download the QR code as a PNG image.



