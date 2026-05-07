import { useState, useEffect, useRef } from 'react'

/**
 * useGameImage – robust image loading hook with multi-stage fallback.
 *
 * Stages:
 *   1. 'loading'  – skeleton shimmer shown, waiting for primary src
 *   2. 'loaded'   – primary image loaded successfully, fade it in
 *   3. 'fallback' – primary failed, try fallbackSrc (if provided)
 *   4. 'gradient' – both images failed, CSS gradient art shown
 */
export function useGameImage(primarySrc, fallbackSrc = null) {
  const [status, setStatus] = useState('loading')
  const imgRef = useRef(null)
  const attemptRef = useRef(0)

  useEffect(() => {
    if (!primarySrc) {
      setStatus('gradient')
      return
    }
    setStatus('loading')
    attemptRef.current = 0

    const img = new Image()
    imgRef.current = img

    img.onload = () => {
      setStatus('loaded')
    }

    img.onerror = () => {
      // Try fallback if we haven't yet
      if (fallbackSrc && attemptRef.current === 0) {
        attemptRef.current = 1
        const fallbackImg = new Image()
        imgRef.current = fallbackImg

        fallbackImg.onload = () => {
          setStatus('loaded-fallback')
        }
        fallbackImg.onerror = () => {
          setStatus('gradient')
        }
        fallbackImg.src = fallbackSrc
      } else {
        setStatus('gradient')
      }
    }

    img.src = primarySrc

    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null
        imgRef.current.onerror = null
      }
    }
  }, [primarySrc, fallbackSrc])

  const activeSrc =
    status === 'loaded'
      ? primarySrc
      : status === 'loaded-fallback'
        ? fallbackSrc
        : null

  const isLoading = status === 'loading'
  const isLoaded = status === 'loaded' || status === 'loaded-fallback'
  const isGradient = status === 'gradient'

  return { activeSrc, isLoading, isLoaded, isGradient, status }
}
