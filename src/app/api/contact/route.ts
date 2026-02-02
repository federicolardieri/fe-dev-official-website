import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nome, email, servizio, website_url } = body;

        // 1. Honeypot check (Anti-spam)
        if (website_url) {
            console.warn('Bot detected: Honeypot field filled');
            return NextResponse.json({ success: true }); // Return fake success to bots
        }

        // 2. Validate environment variables
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        const webhookSecret = process.env.N8N_WEBHOOK_SECRET;

        if (!webhookUrl || !webhookSecret) {
            console.error('Server configuration error: Missing Webhook URL or Secret');
            return NextResponse.json({ error: 'Errore di configurazione interno' }, { status: 500 });
        }

        // 3. Robust Validation
        if (!nome || !email || !servizio) {
            return NextResponse.json({ error: 'Campi obbligatori mancanti: Nome, Email o Servizio.' }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: 'Formato email non valido.' }, { status: 400 });
        }

        // 4. Forward to n8n with Secret Header
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Webhook-Secret': webhookSecret,
            },
            body: JSON.stringify({
                ...body,
                _processed_at: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            throw new Error(`n8n submission failed with status: ${response.status}`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('API Contact Error:', error);
        // Return clean error to client
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
