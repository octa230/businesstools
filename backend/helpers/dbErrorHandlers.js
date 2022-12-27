const getErrMsg = ()=>{
    let message = '';
    if(err.code){
        switch(err.code){
            case 11000:
            case 11001:
                message = getuniqueErrMsg(err)
                break
                default: 'something went wrong with auth'
        }

    } else {
        for( let errName in err.errors ){
            if(err.errors[errName].message)
            message = err.errors[errName].message
        }
    }
    return message
}


const getuniqueErrMsg =(err)=> {
let output 
try {
    let fieldName =
    err.message.substring(err.message.lastIndexOf('.$') +2, err.message.lastIndexOf('_1'))
    output = fieldName.charAt(0).toUpperCase() +fieldName.slice(0, 5) + 'already exists' 
} catch (ex){
    output = 'unique field already exists'
}
return output
}

export default {getErrMsg, getuniqueErrMsg}


