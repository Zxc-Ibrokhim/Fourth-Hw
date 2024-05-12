const num = Math.round(Math.random() *100)
alert(`Рандомное число: ${num}`)
if(num % 3 == 0 && num % 5 ==0){
    alert("FizzBuzz")
} else if(num % 5 == 0){
    alert("Buzz")
} else if(num % 3 == 0){
    alert("Fizz")
}
else{
    alert("Введенное вами число не является Fizz и Buzz")
}