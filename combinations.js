const combinations = input => {

    input = input.split("")

    let patterns = []
    let originalInput = input.slice(0)
    let counter = 0

    const patternRepeated = pattern => patterns.some(characters => characters === pattern)

    if(input.length === 2) {
        console.log((input.reverse()).join(""))
        return
    }
    else if(input.length === 1) {
        console.log(input.join(""))
        return
    }

    for(let i = 0; i < input.length; i++) {
        input = originalInput.slice(0)
        let firstCharacter = input[i]
        input.splice(i, 1)
        input.unshift(firstCharacter)

        top: for( ; ; ) {
            let currentCharacter = input[input.length - 1]

            while(input.indexOf(currentCharacter) !== 1) {
                let tempIndex = input.indexOf(currentCharacter)
                input.splice(input.indexOf(currentCharacter) - 1, 0, currentCharacter)
                input.splice(tempIndex + 1, 1)

                if(patternRepeated(input.join(""))) {
                    break top
                }
                else {
                    patterns.push(input.join(""))
                    counter++
                }

                console.log(counter + ": " + input.join(""))
            }
        }
    }
    console.log("\nThere are a total of " + counter + " combinations")
}

combinations("s")
