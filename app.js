const generateButton = document.querySelector('.generate-btn')
const password = document.querySelector('.password')
const checkboxes = Array.from(document.querySelectorAll('#optionCheckbox'))
const passwordLength = document.getElementById('optionLength')

const abcUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const abcLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const symbols = ["!","@","#","$","%","^","&","*"]
let passwordOutput = []
let passwordLengthValue
let checkedBoxAmount = 0

passwordLength.addEventListener('input', () => {
    passwordLengthValue = Number(passwordLength.value)
})


checkboxes.forEach((checkbox, index) => {
    
    checkbox.addEventListener('click', () => {
        /* if (passwordLength.value === "" || passwordLength.value < 4) return */
        if (checkbox.checked === true) {
            checkedBoxAmount++
        } else {
            checkedBoxAmount--
        }
        console.log(checkedBoxAmount)
        
    })
})

let randomAlphabetIndex = Math.floor(Math.random() * abcUpper.length)
let randomNumberIndex = Math.floor(Math.random() * numbers.length)
let randomSymbolIndex = Math.floor(Math.random() * symbols.length)

generateButton.addEventListener('click', () => {
    let finalOutput = []

    let selectionAmount = passwordLengthValue / checkedBoxAmount
    console.log(checkedBoxAmount, passwordLengthValue)
    if (password.value !== "") {
        password.value = ""
        finalOutput = []
        passwordOutput = []
    } else {
        finalOutput = []
        passwordOutput = []
    }
    checkboxes.map((checkbox, index) => {
        if (index === 0 && checkbox.checked === true) {
            console.log(selectionAmount)
            for (let i = 0; i < selectionAmount; i++) {
                passwordOutput.push(abcUpper[randomAlphabetIndex])
                randomAlphabetIndex = Math.floor(Math.random() * abcUpper.length)
            }
        } else if (index === 0 && checkbox.checked === false) {
            console.log("false")
        }

        if (index === 1 && checkbox.checked === true) {
            for (let i = 0; i < selectionAmount; i++) {
                passwordOutput.push(abcLower[randomAlphabetIndex])
                randomAlphabetIndex = Math.floor(Math.random() * abcUpper.length)
            }
        } else if (index === 1 && checkbox.checked === false) {
            console.log("false")
        }

        if (index === 2 && checkbox.checked === true) {
            for (let i = 0; i < selectionAmount; i++) {
                passwordOutput.push(numbers[randomNumberIndex])
                randomNumberIndex = Math.floor(Math.random() * numbers.length)
            }
        } else if (index === 2 && checkbox.checked === false) {
            console.log("false")
        }

        if (index === 3 && checkbox.checked === true) {
            for (let i = 0; i < selectionAmount; i++) {
                passwordOutput.push(symbols[randomSymbolIndex])
                randomSymbolIndex = Math.floor(Math.random() * symbols.length)
            }
        } else if (index === 3 && checkbox.checked === false) {
            console.log("false")
        }
        console.log(passwordOutput)
        
        
        
    })
    for (let i = 0; i < passwordOutput.length; i++) {
        let random = Math.floor(Math.random() * passwordOutput.length)
        finalOutput.push(passwordOutput[random])
        console.log(finalOutput)
    }
    password.value = finalOutput.join("")
})