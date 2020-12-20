//1. constructor 
const getTodos = (callback) => {
   const request = new XMLHttpRequest()
    //3. addEventListener
    request.addEventListener('readystatechange',() => {
        if(request.readyState === 4 && request.status === 200 ){
            const data = JSON.parse(request.responseText)
            callback(undefined,data)//get properties
        } else if (request.readyState === 4){
            callback('could not fetch data',undefined)
    }
})
    //2. methods
    request.open('GET','todos.json')
    request.send()
}

getTodos((err,data)=>{
    console.log('callback fire')
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
    
})