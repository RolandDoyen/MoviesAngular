# Movies Webapp (Angular)
This is a modern **Angular 18** single-page application built with standalone components. It is designed to be a robust, enterprise-grade consumer for the Movies API, showcasing seamless integration between an Angular frontend and a .NET REST API backend with JWT authentication.

> **Note:** This public repository is a polished version of the project for showcase purposes. Development and automated CI/CD pipelines to Azure are managed through a private repository, which explains the simplified commit history here.


## 📌 Table of Contents
- [Movies Webapp (Angular)](#movies-webapp-angular)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Live Demo](#-live-demo)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [✨ Key Features](#-key-features)
  - [🏛️ Architecture \& Philosophy](#️-architecture--philosophy)
  - [⚙️ Environment Configuration](#️-environment-configuration)
  - [🚀 Deployment](#-deployment)
  - [⚙️ Installation \& Local Setup](#️-installation--local-setup)


## 🚀 Live Demo
**[👉 Visit Movies Webapp (Angular)](https://brave-forest-0e7abf903.1.azurestaticapps.net)**


## 🛠️ Tech Stack
- **Frontend**: Angular 18 with standalone components architecture.
- **Build Tool**: Angular CLI for development and optimized production builds.
- **Routing**: Angular Router for client-side navigation and dynamic routing.
- **UI/UX**: Bootstrap 5 for responsive design and consistent data-centric interfaces.
- **State Management**: RxJS Observables and service-based state management.
- **Communication**: REST API integration using Angular HttpClient with centralized JWT token management.
- **DevOps**: GitHub Actions for automated CI/CD pipelines and continuous deployment.


## ✨ Key Features
- **Standalone Components**: Modern Angular architecture with modular, reusable components.
- **State Management**: Centralized JWT token handling and session management across the application.
- **Responsive Design**: Mobile-first approach using Bootstrap 5 for consistent rendering across devices.
- **Async API Communication**: Clean implementation of HttpClient with RxJS Observables and centralized error handling.
- **Client-Side Routing**: Fast navigation without page reloads using Angular Router.
- **Automated CI/CD**: Live deployment workflow ensuring the site is updated via GitHub Actions.


## 🏛️ Architecture & Philosophy
- **Frontend**: Built with Angular 18 standalone components, emphasizing modularity and type safety.
- **Component Structure**:
  - `components/` - Reusable UI components (Navbar, Footer, Forms, Alerts)
  - `pages/` - Route-specific page components
  - `services/` - API communication layer with centralized fetch logic
  - `utils/` - Helper functions and utilities
  - `models/` - TypeScript interfaces for type safety
**Communication**: Consumes REST services via Angular HttpClient with automatic JWT injection.
**UI/UX**: Follows Bootstrap 5 design patterns for a clean, professional, and accessible interface.


## ⚙️ Environment Configuration
The app automatically detects the hosting environment and configures API endpoints accordingly:
- **Development (localhost)**: Points to `https://localhost:XXX/api/v2`
- **Production**: Points to `https://moviesapi-rd.azurewebsites.net/api/v2`
Configuration is handled in `src/app/services/token.ts` via hostname detection.


## 🚀 Deployment
- **Platform**: Hosted on **Azure Static Web Application (Windows/Linux)**.
- **CI/CD**: Fully automated deployment via **GitHub Actions** (triggered on push) for seamless integration.
- **CORS Configuration**: Backend API is configured to authorize requests from the frontend domain.


## ⚙️ Installation & Local Setup
**Prerequisites**: Node.js 18+, npm/yarn, and Angular CLI.

1. **Install Angular CLI globally (if not already installed)**
  ```bash
  npm install -g @angular/cli
  ```
  
2. **Clone the repository**
  ```bash
  git clone https://github.com/RolandDoyen/MoviesAngularPublic.git
  ```

3. **Install dependencies**
  ```bash
   npm install
  ```
  
4. **Configure the API Endpoint**
   - The application automatically switches to `localhost:XXX` when detecting a local environment in `token.ts`.
   - Ensure your Movies API is running at the address specified in `src/app/services/token.ts`.
  
5. **Run development server**
  ```bash
  ng serve
  ```

6. **Build for production**
  ```bash
  ng build
  ```

7. **Preview production build**
  ```bash
  ng serve --configuration production
  ```