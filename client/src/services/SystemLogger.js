/**
 * @file SystemLogger.js
 * @description Advanced telemetry and system logging utility for the Antigravity Project.
 * Implements high-visibility console output for system-level events.
 */

const SYMBOLS = {
  INFO: '📡',
  SUCCESS: '✅',
  WARNING: '⚠️',
  ERROR: '🚨',
  SYNC: '🧠',
  VAULT: '🔒'
};

const COLORS = {
  PRIMARY: '#A855F7', // Neon Purple
  SECONDARY: '#22D3EE', // Neon Blue
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444'
};

const log = (type, message, data = null) => {
  const timestamp = new Date().toLocaleTimeString();
  const style = `color: white; background: ${COLORS[type] || COLORS.PRIMARY}; padding: 2px 6px; border-radius: 4px; font-weight: bold;`;
  const timeStyle = `color: #666; font-size: 10px;`;

  console.groupCollapsed(`%c${SYMBOLS[type] || ''} [SYSTEM_${type}]%c ${message}`, style, 'color: inherit; font-weight: medium;');
  console.log(`%cTimestamp: ${timestamp}`, timeStyle);
  if (data) {
    console.log('Payload:', data);
  }
  console.groupEnd();
};

export const SystemLogger = {
  info: (msg, data) => log('INFO', msg, data),
  success: (msg, data) => log('SUCCESS', msg, data),
  warn: (msg, data) => log('WARNING', msg, data),
  error: (msg, data) => log('ERROR', msg, data),
  sync: (msg, data) => log('SYNC', msg, data),
  vault: (msg, data) => log('VAULT', msg, data),
};
