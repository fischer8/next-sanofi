import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { getJwtSecretKey } from "@/components/Auth/JWT";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const url = `${process.env.NEXT_ENDPOINT}${body.uf}&q=${body.crm}${process.env.NEXT_API_KEY}`;
  const auth = await fetch(url)
    .then(response => response.json())
    .then(data => data.item[0])

  if (auth.situacao !== "Ativo") {
    return NextResponse.json({ success: false });
  }

  const token = await new SignJWT({
    crm: body.crm,
    uf: body.uf,
  }).setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(getJwtSecretKey());

  const response = NextResponse.json(
    { success: true },
    { status: 200, headers: { "content-type": "application/json" } }
  );

  response.cookies.set({
    name: "token",
    value: token,
    path: "/",
    maxAge: 86400,
  });

  response.cookies.set({
    name: "data",
    value: JSON.stringify({ name: auth.nome, crm: body.crm }),
    path: "/",
    maxAge: 86400,
  });

  return response;
}
