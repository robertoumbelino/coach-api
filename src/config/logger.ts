import { format } from 'winston'

/**
 * Logging level.
 */
const INFO_LOG = 'info'

const customFormat = format.printf(info => `${info.level} - ${info.message}`)

/**
 * Console options to dev logs.
 */
export const consoleOptions = { level: INFO_LOG, format: customFormat }
