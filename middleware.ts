import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { NextResponse } from 'next/server'




export async function middleware(request: NextRequest) {
  
  return await updateSession(request);



  

}

export const config = {
  matcher: [
    "/pages/home",
    "/dashboard/invoices",
    "/dashboard/customers",

    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};


