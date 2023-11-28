import jwt from 'jsonwebtoken'

export interface JwtPayload {
  sub: string | undefined | null
  id_token: string | undefined | null
  role: string | undefined | null
  email: string | undefined | null
  access_token: string | undefined | null
  expires_at: number | undefined | null
}

export const signJwt = async (payload: JwtPayload, expiresIn = '1h') => {
  const token = jwt.sign(payload, process.env.APP_JWT_SECRET ?? '', {
    algorithm: 'HS512',
    expiresIn
  })
  return token
}

export const verifyJwt = (token: string) => {
  const data = jwt.verify(token, process.env.APP_JWT_SECRET ?? '', {
    algorithms: ['HS512']
  })
  return data
}
