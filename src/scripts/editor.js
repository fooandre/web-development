const runBtn = document.getElementById("container__run-btn");
const resetBtn = document.getElementById("container__reset-btn");

const editor = ace.edit("container__textarea");
const terminal = document.getElementById("container__terminal")

const defaultCode = `// write your code here\n\n`
const consoleMessages = []

const options = {
    clearConsole() {
        consoleMessages = []

        for (const li of terminal.children) {
            terminal.removeChild(li)
        }
    },
    printToConsole() {
        consoleMessages.forEach(log => {
            const newLogItem = document.createElement('li')
            const newLogText = document.createElement('pre')

            newLogText.textContent = log
            newLogItem.appendChild(newLogText)

            terminal.appendChild(newLogItem)
        })
    },
    init() {
        editor.setTheme("ace/theme/pastel_on_dark")
        editor.session.setMode("ace/mode/javascript")
        editor.setOptions({
            fontFamily: "Jetbrains Mono",
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true
        }),
        editor.setValue(defaultCode)
    }
}

runBtn.addEventListener("click", () => {
    const code = editor.getValue();

    try {
        new Function(code)();
    } catch (error) {
        console.error(error);
    }
})

resetBtn.addEventListener("click", () => {
    editor.setValue(defaultCode)
})

options.init()