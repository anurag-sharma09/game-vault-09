import { useState, useEffect, useRef } from 'react'
import { getGameImageUrl, getGameBannerUrl, getNewsImageUrl } from '../utils/cloudinary'

/**
 * useGameImage – robust image loading hook with multi-stage fallback and Cloudinary integration.
 *
 * Stages:
 *   1. 'loading'  – skeleton shimmer shown, waiting for primary src
 *   2. 'loaded'   – primary image loaded successfully, fade it in
 *   3. 'fallback' – primary failed, try fallbackSrc (if provided)
 *   4. 'gradient' – both images failed, CSS gradient art shown
 */
export function useGameImage(primarySrc, fallbackSrc = null, options = {}) {
  const [status, setStatus] = useState('loading')
  const [activeSrc, setActiveSrc] = useState(null)
  const imgRef = useRef(null)
  const attemptRef = useRef(0)
  const { onError, title, type = 'game', isBanner = false } = options

  useEffect(() => {
    let resolvedSrc = primarySrc

    // Resolve Cloudinary if src is local or missing and we have a title
    if (title && (!primarySrc || (typeof primarySrc === 'string' && primarySrc.startsWith('/images/')))) {
      if (type === 'news') {
        resolvedSrc = getNewsImageUrl(title)
      } else {
        resolvedSrc = isBanner ? getGameBannerUrl(title) : getGameImageUrl(title)
      }
    }

    if (!resolvedSrc) {
      setStatus('gradient')
      if (onError) onError()
      return
    }

    setStatus('loading')
    attemptRef.current = 0

    const img = new Image()
    imgRef.current = img

    img.onload = () => {
      setStatus('loaded')
      setActiveSrc(resolvedSrc)
    }

    img.onerror = () => {
      // Try fallback if we haven't yet
      if (fallbackSrc && attemptRef.current === 0) {
        attemptRef.current = 1
        const fallbackImg = new Image()
        imgRef.current = fallbackImg

        fallbackImg.onload = () => {
          setStatus('loaded-fallback')
          setActiveSrc(fallbackSrc)
        }
        fallbackImg.onerror = () => {
          setStatus('gradient')
          if (onError) onError()
        }
        fallbackImg.src = fallbackSrc
      } else {
        setStatus('gradient')
        if (onError) onError()
      }
    }

    img.src = resolvedSrc

    return () => {
      if (imgRef.current) {
        imgRef.current.onload = null
        imgRef.current.onerror = null
      }
    }
  }, [primarySrc, fallbackSrc, onError, title, type, isBanner])

  const isLoading = status === 'loading'
  const isLoaded = status === 'loaded' || status === 'loaded-fallback'
  const isGradient = status === 'gradient'

  return { activeSrc, isLoading, isLoaded, isGradient, status }
}
