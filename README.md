
# Cakrawala Client

This is the frontend repository for Cakrawala, an open-source Q&A app platform similar to Stack Overflow. It is built using Next.js, Tailwind CSS, and TypeScript.

## Prerequisites

Make sure you have the following installed before proceeding:

- Node.js
- npm or yarn

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/pancarona-dev/cakrawala-client.git
```

2. Install the dependencies:

```bash
cd cakrawala-client
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory and configure the following variables:

```
BASE_URL=http://localhost:8000/api
```

Replace `http://localhost:8000/api` with the base URL of your backend API.

4. Start the development server:

```bash
npm run dev
```

This will start the Next.js development server, and you can access the app in your browser at `http://localhost:3000`.

## Build

To build the production-ready version of the app, run the following command:

```bash
npm run build
```

This will generate an optimized production build in the `out` directory.

## Deployment

You can deploy the app to your preferred hosting platform. Next.js supports various deployment options like Vercel, Netlify, and more. Refer to the Next.js documentation for deployment instructions.

## Contributing

Contributions to this open-source project are welcome! Please follow the guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md) to contribute to the project.

## License

This project is licensed under the [MIT License](./LICENSE).
