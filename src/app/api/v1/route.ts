import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    console.log('GET METHOD --------- ',request)
    return NextResponse.json({status: 200, data: 'message'})
}

export async function POST(request: Request) {
    console.log(request.body)
}
