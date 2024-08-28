const express=require("express");
const app=express();
const ExpressError=require("./ExpressError");
//#3. USING NEXT()

// app.use((req,res,next)=>{
//     console.log("hi i am 1st middleware");
//     next();
// });


// app.use((req,res,next)=>{
//     console.log("hi i am 2nd middleware");
//     next();
// });



//#4. CREATING UTILITY MIDDLEWARE
//logger-morgan

// app.use((req,res,next)=>{
//     req.time=Date.now()
//     console.log(req.method,req.hostname,req.path,req.time);
//     next();
// })


//#6.  token creations

// app.use("/api",(req,res,next)=>{     //MIDDDLEWARE BASIC IMPLICATIONS
//     let{token}=req.query;
//     if(token === "giveaccess"){
//         next();
//     }
//     res.send("ACCESS DENIED!")
// })

//7.  token creation but multiple

const checkToken = ("/api",(req,res,next)=>{     //MIDDDLEWARE BASIC IMPLICATIONS
    let{token}=req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!")
})


app.get("/api",checkToken ,(req,res)=>{
    res.send("data");
});

/////////////
app.get("/",(req,res)=>{
    res.send("I am root route");

    app.get("/error",(req,res)=>{
    abcd==abcd;
})

app.get((err,req,res,next)=>{
    console.log(err);
});
    
});
app.get("/random",(req,res)=>{
    res.status(404).send("hi i am random ");
});

app.get("/error",(req,res)=>{
    abcd=abcd;
})
//activity
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"ACCESS FORBIDDEN");
})


app.use((err,req,res,next)=>{
    let{status=500,message="some error occured"}=err;
    res.status(status).send(message);
    res.send(err);
});


// app.use((err,req,res,next)=>{
//     console.log("-------ERROR2 Middleware------");
//     next(err);
// });



//404
app.use((req,res)=>{
    res.send("Page not found!");
});










app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});