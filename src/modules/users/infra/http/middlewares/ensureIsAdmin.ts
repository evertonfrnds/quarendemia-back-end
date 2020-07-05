import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import authConfig from '@config/auth'
import AppError from '@shared/errors/AppError'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
  type: string
}

export default function ensureAuthorizated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT não foi enviado na requisição.', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decode = verify(token, authConfig.jwt.secret)

    const { sub, type } = decode as ITokenPayload

    if (type !== 'admin') {
      throw new Error()
    }

    request.user = { id: sub }

    return next()
  } catch {
    throw new AppError(
      'Você não possui permissões para acessar esta rota.',
      401,
    )
  }
}
