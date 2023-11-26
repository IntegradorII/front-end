declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string
      APP_JWT_SECRET: string
      NEXTAUTH_SECRET: string

      AUTH0_CLIENT_ID: string
      AUTH0_CLIENT_SECRET: string
      AUTH0_ISSUER: string
      DATABASE_URL: string
      NEXT_PUBLIC_BACKEND_URL: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
