// export default async function Fetcher(...args) {
//   const res = await fetch(...args)
//   return res.json()
// }

const Fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

export default Fetcher
