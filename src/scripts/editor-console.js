const console = ((oldConsole) => {
    return {
        log: (...texts) => {
            oldConsole.log(...texts)
            consoleMessages.push(...texts)
        },
        info: (...texts) => {
            oldConsole.info(...texts)
            consoleMessages.push(...texts)
        },
        warn: (...texts) => {
            oldConsole.warn(...texts)
            consoleMessages.push(...texts)
        },
        error: (...errors) => {
            oldConsole.error(...errors)
            consoleMessages.push(...errors)
        }
    }
})(window.console)