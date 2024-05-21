import express from "express";

import { userSignUp, userLogIn } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js"
// import {createcheckoutsession} from "../controller/payemet.js"
import Stripe from "@stripe/stripe-js";

const router = express.Router();
// const stripe =Stripe.connect(process.env.STRIPE_SECRET_KEY);
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '15.7.0' });

router.post('/signup', userSignUp);
router.post('/login', userLogIn);
router.get('/products', getProducts);
router.get('/product/:id', getProductById)
// router.post('/login', createcheckoutsession);
router.post("/api/create-checkout-session",async(req,res)=>{
        const product = req.body;
        console.log(product)
    
        // const lineItems = product.map((product)=>({
        //     price_data:{
        //         currency:"inr",
           
        //         unit_amount:product.price * 100,
        //     },
        //     quantity:product.quantity
        // }));
    
        // const session = await stripe.checkout.sessions.create({
        //     payment_method_types:["card"],
        //     line_items:lineItems,
        //     mode:"payment",
        //     success_url:"http://localhost:8000/sucess",
        //     cancel_url:"http://localhost:8000/cancel",
        // });
    
        // res.json({id:session.id})
     
    })
    

export default router;