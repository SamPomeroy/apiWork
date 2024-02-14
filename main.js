const url = 'https://dog.ceo/api/breeds/image/random'
//click listener on button
fetch(url)
.then((response)=>{
    console.log('response received')
    return response.json()

})
.then((object)=>{
    console.log('response processed')
    //do ssomething wih data
    // console.log(object.message)


    //logic in here
})