import pc from 'picocolors'

const symbol = {
  info: pc.blue('ℹ'),
  success: pc.green('✔'),
  warning: pc.yellow('⚠'),
  error: pc.red('✖'),
}

export const logInfo = (...args: unknown[]) => console.log(`${symbol.info} ${pc.blue(args.join(' '))}`)
export const logError = (...args: unknown[]) => console.log(`${symbol.error} ${pc.red(args.join(' '))}`)
export const logSuccess = (...args: unknown[]) => console.log(`${symbol.success} ${pc.green(args.join(' '))}`)
export const logWarning = (...args: unknown[]) => console.log(`${symbol.warning} ${pc.yellow(args.join(' '))}`)
