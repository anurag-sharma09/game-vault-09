import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageIcon } from 'lucide-react';

/**
 * A professional image component for Cloudinary.
 * Handles loading states, skeletons, and fallbacks gracefully.
 */
const CloudinaryImage = ({ 
  src, 
  alt = 'Image', 
  className = '', 
  aspectRatio = 'aspect-[2/3]',
  fallbackSrc = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&h=900&auto=format&fit=crop',
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Reset state when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-slate-900/50 ${aspectRatio} ${className}`}>
      {/* Skeleton Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-slate-800 animate-pulse"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-slate-700/50" />
              <div className="w-24 h-3 rounded bg-slate-700/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Image */}
      <motion.img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className={`h-full w-full object-cover ${props.isBanner ? 'object-center' : 'object-cover'}`}
        loading="lazy"
        {...props}
      />

      {/* Error State */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-500 p-4 text-center">
          <ImageIcon className="w-8 h-8 mb-2 opacity-20" />
          <span className="text-xs font-medium uppercase tracking-widest opacity-40">Asset Missing</span>
        </div>
      )}

      {/* Shine Effect when loading */}
      {isLoading && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
          />
        </div>
      )}
    </div>
  );
};

export default CloudinaryImage;
