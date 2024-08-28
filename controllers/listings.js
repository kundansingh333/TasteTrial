const Listing=require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

//index route
module.exports.index = async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    // console.log(listing.image.url);
    };
//new form
module.exports.renderNewForm = (req,res)=>{
    res.render("./listings/new.ejs");
};
//show Listing
module.exports.showListings = async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id)
    .populate({
        path:"reviews",
        populate:{
            path:"author",
        },
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing you requested doesn't exist!");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("./listings/show.ejs",{listing});
};
//create Listing
module.exports.createListings = async(req,res,next)=>{

let response = await geocodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
    })
.send();
  

    let url=req.file.path;
    let filename=req.file.filename;
    
    let newListing=new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    // console.log(savedListing);
    req.flash("success","New Listing Added!");
    res.redirect("/listings");
};
//edit Listing
module.exports.editListings = async(req,res)=>{
    let{id}=req.params;
    const listing=await Listing.findById(id);

    if(!listing){
        req.flash("error","Listing yor requested doesn't exist!");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/e_blur:50/w_250");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};
//update
module.exports.updateListings = async(req,res)=>{
    let{id}=req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    ////
    let response = await geocodingClient
        .forwardGeocode({
            query: req.body.listing.location,
            limit: 1,
        })
    .send();
  
    listing.geometry = response.body.features[0].geometry;
    await listing.save();
    


/////
    if(typeof req.file !=="undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image={url,filename};
        await listing.save();
    };
    req.flash("success","Listing Edited !");
    res.redirect(`/listings/${id}`);
};
//delete
module.exports.destroyListings = async(req,res)=>{
    let{id}=req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted !");
    res.redirect("/listings");
};