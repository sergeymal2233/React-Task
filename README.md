## Getting Started

Follow these steps to run the project locally:

1. Clone the repository.
2. Navigate to the project directory.
3. Create a `.env` file in the root of the project.

   ```env
   VITE_BASE_API_URL="https://api.github.com/"
   VITE_GH_TOKEN
   ```

4. Install project dependencies.

   ```bash
   npm install
   ```

5. Start the development server.

   ```bash
   npm run dev
   ```

The development server should now be running locally. Open your browser and navigate to `http://localhost:3000` to view the application.

### Environment Variables

- `VITE_BASE_API_URL`: The URL of the API server.
- `VITE_GH_TOKEN`: Your [GitHub Personal access token](https://github.com/settings/tokens).

Make sure to keep your `.env` file secure, especially if it contains sensitive information. Do not commit it to version control systems.
