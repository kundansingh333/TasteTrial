// function wrapAsync(fn){
//     return function(err,req,res,next){
//         fn(err,req,res,next).catch(next);
//     }
// }



module.exports= (fn)=>{           //same thing written above in this code
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    };
};