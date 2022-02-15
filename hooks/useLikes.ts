import React from 'react'
import { useDebounce } from 'react-use'
import useSWR, { SWRConfiguration } from 'swr'

const API_URL = `/api/likes`

type MetricsPayload = {
  likes: number
  currentUserLikes: number
}

async function getPostLikes(): Promise<MetricsPayload> {
  const res = await fetch(API_URL)
  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return res.json()
}

async function updatePostLikes(count: number): Promise<MetricsPayload> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ count }),
  })

  if (!res.ok) {
    throw new Error('An error occurred while posting the data.')
  }

  return res.json()
}

// A custom hook to abstract away fetching and updating a user's likes
export const useLikes = (config?: SWRConfiguration) => {
  const { data, error, mutate } = useSWR(API_URL, () => getPostLikes(), {
    dedupingInterval: 60000,
    ...config,
  })

  const [batchedLikes, setBatchedLikes] = React.useState(0)

  const increment = () => {
    // Prevent the user from liking more than 10 times
    if (!data || data.currentUserLikes >= 10) {
      return
    }

    // Optimistic ui pattern
    // update the local swr cache so like count updates immediately for the user
    // while we update the database
    mutate(
      {
        likes: data.likes + 1,
        currentUserLikes: data.currentUserLikes + 1,
      },
      false
    )

    // use local state and debounce to batch updates
    setBatchedLikes(batchedLikes + 1)
  }

  useDebounce(
    () => {
      if (batchedLikes === 0) return

      // update the database and use the data updatePostLikes returns to update
      // the local cache with database data
      mutate(updatePostLikes(batchedLikes))
      setBatchedLikes(0)
    },
    1000,
    [batchedLikes]
  )

  return {
    currentUserLikes: data?.currentUserLikes,
    likes: data?.likes,
    isLoading: !error && !data,
    isError: !!error,
    increment,
  }
}
