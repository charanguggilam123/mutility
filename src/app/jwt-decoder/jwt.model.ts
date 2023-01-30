

export interface JWT{
  headers: {
    alg: string
},
payload: {
    sub: string
    iat: number,
    exp: number
},
signValid?: boolean
}
