
// const express = require("express");
// const app = express();

// //routes
// app.get("/", function(req, res, next){
//     res.sendFile(__dirname + "/index.html");
// });
// app.get("/about", function(req, res, next){
//     res.sendFile(__dirname +"/about.html");
// });
// app.listen(3000, () => {
//     console.log("server running");
// });

// var btn = document.querySelector("nav-part1 button")

gsap.from("nav",{
    x: 100,
    opacity:0,
    duration:2,
    delay:0,
    stagger:0.4
  })
  gsap.from("nav button",{
    x:200,
     scale:0,
     opacity:0,
     duration:1,
     scrollTrigger:{
       trigger:"button",
       scroll:"body",
       // markers:true,
       start:"top 80%",
       end:"top 40",
       scrub:0,
       strugger:0.4
     }
   })
  //  gsap.from("#footer",{
  //   x:200,
  //    scale:0,
  //    opacity:0,
  //    duration:2,
  //    scrollTrigger:{
  //      trigger:"#footer",
  //      scroll:"body",
  //      // markers:true,
  //      start:"top 90%",
  //      end:"top 10%",
  //      scrube:3,
  //      strugger:0.4
  //    }
  //  })