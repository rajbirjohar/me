import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const officeQuote = await (
    await fetch('https://officeapi.dev/api/quotes/random')
  ).json()

  return res.status(200).json({
    id: officeQuote.data._id,
    quote: officeQuote.data.content,
    firstName: officeQuote.data.character.firstname,
    lastName: officeQuote.data.character.lastname,
  })
}
