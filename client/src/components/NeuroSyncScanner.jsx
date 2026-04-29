/**
 * @file NeuroSyncScanner.jsx
 * @description Advanced biometric and neural intent mapping interface.
 * Uses simulated telemetry to match user intent with game data.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Fingerprint, Activity, Zap, CheckCircle, Cpu, Radio, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SystemLogger } from '../services/SystemLogger';

const NeuroSyncScanner = ({ onMatchFound }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('IDLE');

  const steps = [
    { icon: <Fingerprint />, text: "Biometric Identity Verified", color: "var(--neon-blue)", sub: "AES-256 Auth Node Active" },
    { icon: <Activity />, text: "Neural Oscillation Detected", color: "var(--neon-purple)", sub: "Alpha/Beta Wave Sync: 42Hz" },
    { icon: <Brain />, text: "Syncing Cognitive Load...", color: "var(--neon-pink)", sub: "Mapping Intent Vectors" },
    { icon: <Zap />, text: "Intent Mapping Complete", color: "var(--neon-green)", sub: "Target Identified" }
  ];

  const handleStartScan = () => {
    SystemLogger.sync('Starting Biometric Sequence...');
    setIsScanning(true);
    setScanStep(0);
    setProgress(0);
    setStatus('SCANNING');
  };

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1.5;
        });
      }, 40);

      const stepInterval = setInterval(() => {
        setScanStep(prev => {
          if (prev >= steps.length - 1) {
            clearInterval(stepInterval);
            setTimeout(() => {
              SystemLogger.success('Neural Link Established');
              setIsScanning(false);
              setStatus('COMPLETED');
              confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#A855F7', '#22D3EE', '#F472B6']
              });
              onMatchFound();
            }, 800);
            return prev;
          }
          SystemLogger.info(`Protocol Step ${prev + 1} finalized: ${steps[prev].text}`);
          return prev + 1;
        });
      }, 1500);

      return () => {
        clearInterval(interval);
        clearInterval(stepInterval);
      };
    }
  }, [isScanning]);

  return (
    <div className="neuro-scanner p-8 glass-card max-w-3xl mx-auto my-12 border-2 border-white/5 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-2 right-4 flex items-center gap-2 opacity-20">
        <Radio size={12} className="animate-pulse text-neon-blue" />
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase">Live_Feed_0x3</span>
      </div>

      <AnimatePresence mode="wait">
        {!isScanning ? (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-10"
          >
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-neon-blue/20 blur-2xl rounded-full" />
              <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 animate-float">
                <Brain size={64} className="text-neon-blue" />
              </div>
            </div>
            
            <h2 className="text-4xl font-outfit font-black mb-4 tracking-tighter uppercase italic">
              NEURO<span className="text-neon-blue">-</span>SYNC
            </h2>
            <p className="text-white/40 mb-10 text-lg max-w-md mx-auto font-medium leading-relaxed">
              Synchronize your neural patterns with our high-fidelity discovery engine. 
              Find the perfect digital experience in milliseconds.
            </p>
            
            <button 
              onClick={handleStartScan}
              className="btn-antigravity btn-neon-blue px-16 py-5 text-xl tracking-[0.2em] mx-auto group"
            >
              <Cpu className="group-hover:rotate-90 transition-transform duration-500" />
              INITIALIZE PROTOCOL
            </button>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            {/* Steps Column */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: scanStep >= index ? 0 : -20, 
                    opacity: scanStep >= index ? 1 : 0.1,
                    scale: scanStep === index ? 1.02 : 1
                  }}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all duration-500 ${scanStep === index ? 'bg-white/5 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'border-transparent'}`}
                >
                  <div className={`mt-1 p-2 rounded-lg ${scanStep >= index ? 'bg-neon-blue/10 text-neon-blue' : 'bg-white/5 text-white/20'}`}>
                    {scanStep > index ? <CheckCircle size={20} className="text-neon-green" /> : React.cloneElement(step.icon, { size: 20 })}
                  </div>
                  <div>
                    <div className={`text-sm font-black tracking-widest uppercase mb-0.5 ${scanStep >= index ? 'text-white' : 'text-white/20'}`}>
                      {step.text}
                    </div>
                    <div className="text-[10px] font-mono text-white/30 uppercase">
                      {scanStep >= index ? step.sub : 'WAITING_FOR_SIGNAL...'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Circular Progress Column */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Orbital Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-[1px] border-dashed border-white/10 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border-t-2 border-neon-blue rounded-full opacity-60"
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-b-2 border-neon-purple rounded-full opacity-40"
                />
                
                <div className="text-center z-10">
                  <div className="text-5xl font-black font-outfit text-white tracking-tighter">
                    {Math.floor(progress)}<span className="text-xs text-white/40 ml-1">%</span>
                  </div>
                  <div className="text-[10px] font-mono text-neon-blue font-bold tracking-[0.3em] mt-2">
                    SYNCING
                  </div>
                </div>
              </div>

              <div className="mt-8 w-full max-w-xs space-y-2">
                <div className="flex justify-between text-[9px] font-mono font-bold text-white/30 uppercase">
                  <span>Throughput</span>
                  <span className="text-white/60">{(progress * 1.2).toFixed(2)} GB/s</span>
                </div>
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NeuroSyncScanner;

