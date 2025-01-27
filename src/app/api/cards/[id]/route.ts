import { NextResponse } from "next/server";

export async function GET(request: Request, context: { params: { id: string } }) {
    const params = await context.params; // Awaiting params before use
    const id = params.id;
    
    if (parseInt(id) > 3 || parseInt(id) < 1) {
        return NextResponse.json(
            { error: 'Card not found' },
            { status: 404 }
        );
    }

    return NextResponse.json({
        id: id,
        status: 200,
        message: `Response from Card ${id}`,
        timestamp: new Date().toISOString()
    });
}
