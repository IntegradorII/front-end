import jwt from 'jsonwebtoken'

export interface JwtPayload {
  sub: string | undefined
  id_token: string | undefined
  access_token: string | undefined
  expires_at: number | undefined
}

export const signJwt = async (payload: JwtPayload, expiresIn = '1d') => {
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
