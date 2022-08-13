let calc = (a,b,c) =>{
    if(c == '+'){
        console.log(a+b)
    }else if(c == '-'){
        console.log(a-b)
    }else if(c == '*'){
        console.log(a*b)
    }else if (c == '/'){
        console.log(a/b)
    }else{
        console.log('operator is missing')
    }
}
calc(1,2)

// default parameter

let defaultPara = (a,b,c=0) =>{
    console.log(a+b+c)
}

defaultPara(1,2,3)
defaultPara(1,2)
defaultPara(1)