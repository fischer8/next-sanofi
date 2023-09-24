import { jwtVerify } from "jose";

export function getJwtSecretKey() {
  return new TextEncoder().encode(process.env.NEXT_JWT_SECRET);
}

export async function verifyJwtToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload;
  } catch (error) {
    return null;
  }
}
