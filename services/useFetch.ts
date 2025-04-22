// services/useFetch.ts
import { useState, useCallback } from 'react';

interface FetchError {
  message: string;
  timestamp?: number;
}

const useFetch = (mood: string) => {
  const [data, setData] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FetchError | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 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`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `Generate one creative conversation starter for someone feeling ${mood}. 
              or having, ${mood} in the conversation , break the ice using this starter make it the best for
              people to use on app`
            },
            {
              role: "user",
              content: `Please suggest conversation starters for ${mood} mood`
            }
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const result = await response.json();

      if (result.error || !response.ok) {
        throw new Error(result.error?.message || 'Failed to fetch');
      }

      const message = result.choices?.[0]?.message?.content ?? "No response.";
      setData(message.trim().replace(/^\s*\d+\.\s*/gm, '• ')); // Convert numbers to bullets
    } catch (err: any) {
      console.error("API error:", err);
      setError({
        message: 'Please try again later',
        timestamp: Date.now()
      });
    } finally {
      setLoading(false);
    }
  }, [mood]);

  return { data, isLoading, error, refetch };
};

export default useFetch;