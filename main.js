// setTimeout(() => {
//     alert('message 1')
// }, 1500);

// setInterval(() => {
//     alert('Interval message')
// }, 3000);


// 1



// const btn = document.querySelector('.btn__start')
// const number = document.querySelector('.number')

// const clock = () => {
//     let tick = 20
//     setInterval(() => {
//         if(tick>0){
//            tick--
//          number.textContent = tick 
//         }
//     }, 1000);

//     btn.removeEventListener('click', clock)
// }

// btn.addEventListener('click', clock)





// 2



// const btn = document.querySelector('.btn__start')
// const popUp = document.querySelector('.pop__up')

// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         popUp.classList.add('show__pop__up')
//         setTimeout(() => {
//             popUp.classList.remove('show__pop__up')
//         }, 5000)
//     }, 1500)
// })





// 3



// const btn = document.querySelector('.btn__start')
// const dateSpan = document.querySelector('.date')

// btn.addEventListener('click', () => {
    
//     setInterval(() => {
//        let today = new Date
//         let date = today.getDate()
//         let month = today.getMonth() +1
//         let year = today.getFullYear()
//         let hour = today.getHours()
//         let minutes = today.getMinutes()
//         let seconds = today.getSeconds()
//         let dateNow = `${date}/${month}/${year}    ${hour}:${minutes}:${seconds}` 
//         dateSpan.textContent = dateNow
//     })
   
// })



// 4


// const btn = document.querySelector('.btn__start')
// const img = document.querySelector('.img')

// btn.addEventListener('click', slider)

// function slider() {
//     let num = 1
//     setInterval(() => {
//         if (num == undefined || num == 4) {
//             num = 1
//         } else{
//             img.src = `${num}.png`
//             num++
//         }
//     }, 1000)
// }







const btn = document.querySelector('.btn__start')

btn.addEventListener('click', slider)

function slider() {
    setInterval(() => {
        const img1 = document.querySelector('.img1')
        const img2 = document.querySelector('.img2')
        const img3= document.querySelector('.img3')
        let temp = img1.src
        img1.src = img2.src
        img2.src = img3.src
        img3.src = temp
    }, 1000);
}