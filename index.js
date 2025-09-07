const express=require("express");
const arg=express();
const port=8080;
const path=require("path");
const methodoverride=require("method-override");
const { v4:uuidv4 }=require('uuid');

arg.use(express.urlencoded({extended:true}));//using middle ware beacuse if the data is coming to server then it should be parse....
arg.use(methodoverride('_method'));
arg.set("view engine","ejs");

arg.use(express.static("public"));
arg.listen(port,()=>{
    console.log(`Listening at the port ${port}`);
})
//data of post
let posts=[
    {
        id:uuidv4(),
        username:"Sarthak",
        content:"I love Coding",
    },
    {
        id:uuidv4(),
        username:"Shweta",
        content:"Dr",
    },
    {
        id:uuidv4(),
        username:"Aarti",
        content:"Mother",
    },
    {
        id:uuidv4(),
        username:"Ashok",
        content:"Father",
    }
]
arg.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
arg.get("/posts/new",(req,res)=>{ //get request will go
    res.render("form.ejs"); //After filling new post it will give to /posts
})
arg.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    //ok now to give proper id we should get match with the requiredata
    let post=posts.find((p)=>p.id===id);
    res.render("show.ejs",{post});
})

arg.post("/posts",(req,res)=>{ //Now whatever the content came we have to add this to post array
    let {username,content}=req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})
arg.patch("/posts/:id",(req,res)=>{ //patch is for updating the data of the post
    let {id}=req.params;
    let {content}=req.body;
    let post=posts.find((p)=>p.id===id);
    post.content=content;//this should be
    res.redirect("/posts");


})
arg.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});

})
arg.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id); //from id we are getting post
    //it will give all that filter post where id is not equals 
    //we will store that in our posts array only...
    res.redirect("/posts");
})