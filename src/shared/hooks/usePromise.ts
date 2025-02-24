import { useState } from 'react'

export function usePromise() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handle = async (fn: () => Promise<void>) => {
    setLoading(true)

    try {
      await fn()
    } catch (error) {
      const { message } = error as Error
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return { handle, loading, error }
}
