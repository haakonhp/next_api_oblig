import type { NextApiRequest, NextApiResponse } from 'next'

export default async function createPoll(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Logikk for å opprette en poll (lagre i database, etc.)
        res.status(201).json({ success: true })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }
}
