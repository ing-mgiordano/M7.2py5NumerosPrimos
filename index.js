function calculatePrime() {
  
    const userNum = parseInt(document.getElementById('user-number').value)

    if(isNaN(userNum) || userNum <= 0){
        alert('Numero incorrecto')
        return
    }

    const arrayNumber = []
    let end = userNum
    let factorial = 1

    for(let cont = 0; cont < end; cont++) { 
        arrayNumber.push(cont+1)
    }
    arrayNumber.pop()

    for(let cont = 0; cont < end-1; cont++) {
        factorial = factorial * parseInt(arrayNumber[cont])   
    }
    
    let isPrime = (factorial + 1) % userNum === 0
    let isNotPrime = (factorial + 1) % userNum !== 0

    if(isPrime) {
        document.getElementById('result').innerHTML = `El número ${userNum} es primo!`
    }
    if(isNotPrime) {
        document.getElementById('result').innerHTML = `El número ${userNum} no es primo!`
    }


    

}   