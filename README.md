
# Sign In with google

Sign In with google in nest JS. This authentication using passport and JWT (Json Web Token). After login with google account, refresh and access token will generated. Refresh token will stored at cookie and database. Refresh token at cookie will expire in 3 days. For more secure, refresh token at database is hashed before stored.






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_CLIENT_ID : <YOUR_CLIENT_ID>`

`GOOGLE_CLIENT_SECRET : <YOUR_CLIENT_SECRET>`

`CALLBACK_URL : /auth/oauth/google/redirect`

`ACCESS_TOKEN_SECRET : <YOUR_ACCESS_TOKEN_SECRET>`

`ACCESS_TOKEN_SECRET : <YOUR_REFRESH_TOKEN_SECRET>`

`DATABASE_URL : "mysql://=your_user:your_password@your_host:your_port/db_name"`





## Installation

```bash
  git clone https://DanarCahyadi12/github.com/nestjs-google-oauth
```
```bash
  cd nestjs-google-oauth
```
    
```bash
  npm install
```

```bash
  npx prisma migrate --name <your_migration_file_name>
```
    




## API Reference

#### Sign in with google 

```http
  GET /auth/oauth/google
```

#### Callback URL

```http
  GET /auth/oauth/google/redirect
```

