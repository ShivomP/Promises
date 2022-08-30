// const emailRef = document.querySelector(".email");

// 1. Then Method

// const emailRef = document.querySelector(".email")
// console.log(emailRef)

// fetch ("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     console.log(response.json()) 
//     response.json().then(data => {
//         console.log(data)
//         emailRef.innerHTML = data.email
//     })
// })

// fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         emailRef.innerHTML = data.email
//     });

// 2. Async/Await

// async function main(){
//     const response = await fetch ("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     console.log(data)
//     emailRef.innerHTML = data.email
// }

// main()

// Creating a Promise
const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function getSubscriptionStatus(){
    return new Promise ((resolve , reject) => {
        resolve("VIP")
    })
}

//  Using Then

// getSubscriptionStatus().then(response => console.log(response))

// Using Async/Await

async function main(){
    console.log(getSubscriptionStatus())
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
}

// main()

function getVideo(subscriptionStatus) {
    return new Promise ((resolve , reject) => {
        if (subscriptionStatus === "VIP")
            resolve("show video")
        
        else if (subscriptionStatus === "FREE")
            resolve("show trailer")
        
        else {
            reject("no video")
        }
    })
}

async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status
    // Using the Error
    try{
        console.log(await getVideo(status))
    }
    catch (e){
        console.log(e)
        videoRef.innerHTML = e
    }
}

main()