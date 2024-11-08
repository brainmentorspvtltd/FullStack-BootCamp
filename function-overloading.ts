// define multiple signature for a single function
// type or number of arguments can be differ

function showValue(x:number);
function showValue(x:string);
function showValue(x:number|string){
    if(typeof x === 'number'){
        console.log('X is ', ++x);
    }
    else{
        console.log('X is ', x.toUpperCase());
    }
}
showValue(100);
showValue("Amit");


type ApiCallOptions = {
    url:string,
    method:string;
    body:string;
    headers?:string[]

}

// function overloading - realtime
function doApiCall(url:string); // Get
function doApiCall(options:ApiCallOptions); // Post 
function doApiCall(input:string| ApiCallOptions):Promise<any>{
    if(typeof input ==='string'){
        return fetch(input);
    }
    else{
        return fetch(input.url, {
            body: input.body, method:input.method
        })
    }
}

doApiCall('apiurl');
doApiCall({url:'', body:'', method:'POST'})
