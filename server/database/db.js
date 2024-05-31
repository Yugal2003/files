import mongoose from "mongoose";

const DBconnection = async() =>{
    const URL = "mongodb+srv://yugalramesh6832:XUGxEVCcrQKSjfaF@file-sharing.ertrejm.mongodb.net/";
    try {
        await mongoose.connect(URL, { useNewUrlParser : true});
        console.log("Database connect success");
    } 
    catch (error) {
        console.error("Error while connect with DB", error.message);    
    }
}

export default DBconnection;