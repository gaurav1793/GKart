import express from "express";

import { userSignUp, userLogIn } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js"

import Stripe from "@stripe/stripe-js";

const router = express.Router();


router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/products', getProducts);
router.get('/product/:id', getProductById)
// router.post('/login', createcheckoutsession);
router.post("/api/create-checkout-session",async(req,res)=>{
        const product = req.body;
        console.log(product)
    
        
     
    })
    

export default router;