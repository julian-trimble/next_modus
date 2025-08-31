# Project Overview

This is a comprehensive showcase and a boilerplate of UI components built with **Next.js 15**, **ShadCN**, and **Tailwind CSS**. The project serves as a visual library and a starting point for building modern, responsive, and themeable web applications.

## Key Technologies

*   **Framework**: Next.js 15
*   **Styling**: Tailwind CSS v3
*   **UI Components**: ShadCN/UI
*   **Icons**: Modus Icons
*   **Theming**: next-themes
*   **Charts**: Recharts
*   **Calendars**: React Day Picker
*   **Toasts**: Sonner
*   **Language**: TypeScript
*   **Linting**: ESLint with custom rules for color enforcement
*   **Git Hooks**: Husky for pre-commit validation

# Building and Running

## Prerequisites

*   Node.js (version 18.x or higher)
*   npm

## Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Application

*   **Development mode:**
    ```bash
    npm run dev
    ```
*   **Production build:**
    ```bash
    npm run build
    ```
*   **Start production server:**
    ```bash
    npm run start
    ```

The application will be available at `http://localhost:3000`.

# Development Conventions

## Quality Assurance & Linting

This project enforces strict code quality standards through automated linting and validation systems that prevent hardcoded colors and ensure compliance with the Modus design system.

### Available Commands

*   **Full style validation (ESLint + color check):**
    ```bash
    npm run validate:styles
    ```
*   **Check for hardcoded colors only:**
    ```bash
    npm run lint:colors
    ```
*   **Standard ESLint check:**
    ```bash
    npm run lint
    ```
*   **Development with strict validation:**
    ```bash
    npm run dev:strict
    ```

## Project Structure

The project follows a standard Next.js App Router structure with some added conventions for organizing components and styles, plus comprehensive Cursor AI integration for enhanced development experience.

*   `@/app`: **Next.js App Router** - Contains all the routes, layouts, and pages for the application.
*   `@/components`: **Reusable React Components** - Houses all UI components and custom implementations.
*   `@/hooks`: **Custom React Hooks** - Shared stateful logic and utilities.
*   `@/lib`: **Utility Functions** - Helper functions and shared utilities.
*   `@/public`: **Static Assets** - Images, icons, and other public resources.
*   `@/.cursor`: **Cursor AI Configuration** - Contains project rules for AI assistance and MCP server configurations.
