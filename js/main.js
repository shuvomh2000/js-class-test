let counter = document.querySelector(".counter")
let type = document.querySelector(".type")
let btncounter = document.querySelector(".btn_counter")
let btntype = document.querySelector(".btn_type")
let err = document.querySelector(".err")
let err2 = document.querySelector(".err2")
let count = 0
let count2 = -1

btncounter.addEventListener("click", function () {


    if (counter.value == '') {
        err.innerHTML = 'give a number'
    } else {
        function counting() {
            count++
            err.innerHTML = count
            if (count == counter.value) {
                clearInterval(stop)
            }
        }
        let stop = setInterval(function () {
            counting()
        }, 200)
    }
})

// type js

btntype.addEventListener("click", function () {
    if (type.value == "") {
        err2.innerHTML = " write a text"
    } else {
        function typejs() {
            count2++
            err2.innerHTML += type.value.charAt(count2)
            if (count == type.value.lenght) {
                err2.innerHTML = ''
                count2 = -1
                clearInterval(stop)
            }
        }
        let stop = setInterval(function () {
            typejs()
        }, 500)
    }
})