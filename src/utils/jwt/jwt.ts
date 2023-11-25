import jwt from 'jsonwebtoken'

export interface JwtPayload {
  name: string | null | undefined
  email: string | null | undefined
  image: string | null | undefined
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
