# dotnet-api-cra

This template project is a web application with .NET Core backend and React frontend.

It was created with a combination of the following:

1. `dotnew new webapi -o dotnet-api-cra`
    - https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new

2. `npx create-react-app clientapp`
    - https://create-react-app.dev/docs/getting-started

From there, it has been updated with:
- improved folder structure for both the backend and frontend, with more sample code
- corrected file naming conventions
- proxy to handle .NET API requests (made by the React app with the same host and port, for development environment
  - https://create-react-app.dev/docs/proxying-api-requests-in-development
- .NET unit test project
- Docker support

## Development

### Non-Containerized

Build and run the .NET backend
```sh
cd src
dotnet build
dotnet run
```

The backend will be running on https://localhost:7056

Once the above URL is visited, the frontend will be running on https://localhost:44406

### Containerized

```sh
cd src
docker-compose build
docker-compose up
```

The backend and frontend will be running on http://localhost:44406
