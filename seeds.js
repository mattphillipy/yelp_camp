var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment")

var data = [
    {
        name: "Ohanapecosh",
        image: "http://nwtripfinder.com/wp-content/uploads/2011/05/Ohanapecoshbridge_TheGirlsNY.jpg",
        description:"we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way— in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only."
    },
    {
        name: "Nason Creek",
        image: "http://nwtripfinder.com/wp-content/uploads/2011/05/nasonsign.jpg",
        description:"There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever."
    },
    {
        name: "Kalaloch",
        image: "http://nwtripfinder.com/wp-content/uploads/2011/05/kalalochbeach.jpg",
        description:"It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster."
    }
]


function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else
        console.log("removed campgrounds!");
        //add a few campgrounds
    //     data.forEach(function(seed){
    //         Campground.create(seed, function(err, campground){
    //             if(err){
    //                 console.log(err)
    //             } else {
    //                 console.log("added a campground");
    //                 //create a comment
    //                 Comment.create(
    //                     {
    //                         text: "This place is great, but no bathrooms!",
    //                         author: "Homer"
    //                     }, function(err, comment){
    //                         if(err){
    //                             console.log(err);
    //                         } else {
    //                             campground.comments.push(comment._id);
    //                             campground.save();
    //                             console.log("new comment created!");
    //                         }
                            
    //                     });
    //             }
    //         });
    //     });
    });
    
    //add a few comments
}

// module.exports = seedDB;