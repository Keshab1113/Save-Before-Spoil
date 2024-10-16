import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";



connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { ProductID, ProductName, Category, Price, Stock } = reqBody;
        const response = NextResponse.json({
            message: "Product Added successful",
            success: true,
        })
        //Now need to make a models and make same same to like signup page
        return response;
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
