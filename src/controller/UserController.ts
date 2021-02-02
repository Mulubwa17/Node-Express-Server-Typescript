import * as mongoose from "mongoose";
import User, { IUser } from "../model/User.model"
import {Request, Response} from "express";



export class UserController {

newUser = async(req:Request, res: Response) => {
    try {
    const {firstname,lastname,email} = req.body;
    let user: IUser = await User.findOne({firstname})
    if(user){
        return res.status(404).json({error : "User already exists!"})
    }
    const newUser = new User({firstname,lastname,email});
    user = newUser
    await user.save();
    res.status(200).json({data: newUser,
    message: "User created"})
   console.log(newUser)
    } catch (error) {
        console.log(error)
       res.status(500).json({error :"something went wrong"})
    }
   
}

getUsers = async(req:Request, res: Response) => {
    User.find({},(err,user) => {
        if(err){
            res.status(404).json({message : "Users not found"})
        }
    res.status(200).json(user)
})
}

getUser = async(req:Request, res: Response) => {
    try {
        const user = await User.findOne({user: req.params.userId})
            if(!user){
                res.status(404).json({message: "User not found"});
            }
            res.status(200).json({data : user});
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong,try again"})
    }
}

updateUser = async(req:Request, res: Response) => {
    try {
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.status(404).json({ message: "User not found"});
            }
            res.status(200).json({ data: user });
        })
    } catch (error) {
        res.status(500).json({message: "Something went wrong,try again"})
    }
}

deleteUser = async(req:Request, res:Response) => {
    try {
        const user = await User.deleteOne({ _id: req.params.userId })
        if(!user){
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json({data : user,message: "User successfully deleted!"});

    
    } catch (error) {
        res.status(500).json({message: "Something went wrong,try again"})
    }
}

}