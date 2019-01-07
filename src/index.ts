class ReversePolishNotationCalculator {
    private commandList: Array<number | string> = []

    constructor() { }

    public calculate(command: string) {
        if (command.indexOf(',') == -1) {
            throw 'Doesnt seem to be a list...'
        }

        // parse the command into an array of integers and instructions
        command.split(',').forEach(command => {
            if (this.isInteger(command)) {
                this.commandList.push(this.parseInt(command))
            } else {
                command = command.trim()
                if (command === '+') {
                    this.commandList.push(this.add(this.commandList.pop(), this.commandList.pop()))
                } else {
                    this.commandList.push(this.subtract(this.commandList.pop(), this.commandList.pop()))
                }
            }
            console.log(this.commandList)
        })

        return this.commandList.pop()
    }

    /**
     * Tells you if this string can be an integer
     * @param possibleInteger the thing you want to check
     */
    private isInteger(possibleInteger: string): boolean {
        return Number.isInteger(this.parseInt(possibleInteger))
    }

    private parseInt(commandInt: string): number {
        return parseInt(commandInt, 10)
    }

    private add(op1, op2): number {
        return op1 + op2;
    }

    private subtract(op1, op2): number {
        return op2 - op1;
    }
}

[
    '1, 1, 2, +, +',
    '1, 2, +, 3, -',
    '1,2,3,+,-'
].forEach(command => {
    const calc = new ReversePolishNotationCalculator()
    console.log(' ')

    console.log(`input: ${command}`, `output: ${calc.calculate(command)}`)
})
