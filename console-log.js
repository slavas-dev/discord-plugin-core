const fs = require('fs'), path = require('path');
const colors = { reset: '\x1b[0m', bright: '\x1b[1m', dim: '\x1b[2m', red: '\x1b[31m', green: '\x1b[32m', yellow: '\x1b[33m', blue: '\x1b[34m', magenta: '\x1b[35m', cyan: '\x1b[36m', white: '\x1b[37m' };
const LOG_DIR = path.join(__dirname, 'logs'), LOG_FILE = path.join(LOG_DIR, 'bot.log');

fs.existsSync(LOG_DIR) || fs.mkdirSync(LOG_DIR, { recursive: true });
if (process.env.CLEAR_LOGS_ON_START === 'true' && fs.existsSync(LOG_FILE)) {
    try { fs.unlinkSync(LOG_FILE); console.log(`${colors.bright}${colors.yellow}console-log.js:${colors.reset}${colors.yellow}Old logs cleared${colors.reset}`); } catch (error) { console.log(`${colors.bright}${colors.red}console-log.js:${colors.reset}${colors.red}Failed to clear old logs: ${error.message}${colors.reset}`); }
}

function log(fileName, message, type = 'info') {
    const c = { info: colors.green, error: colors.red, warn: colors.yellow, debug: colors.blue, success: colors.green };
    console.log(`${colors.bright}${c[type] || colors.green}${fileName}:${colors.reset}${c[type] || colors.green}${message}${colors.reset}`);
    try { fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] [${type.toUpperCase()}] ${fileName}: ${message}\n`, 'utf8'); } catch (e) { console.log(`${colors.bright}${colors.red}console-log.js:${colors.reset}${colors.red}Failed to write to log file: ${e.message}${colors.reset}`); }
}

['info','error','warn','success','debug'].forEach(type=>exports[type]=(f,m)=>log(f,m,type));
module.exports = { log, ...exports, colors };
