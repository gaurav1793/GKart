// export const createcheckoutsession = async (request, response) => {
//     const product = req.body;
//     console.log(product)

//     const lineItems = product.map((product)=>({
//         price_data:{
//             currency:"inr",
       
//             unit_amount:product.price * 100,
//         },
//         quantity:product.quantity
// }));
// const session = await stripe.checkout.sessions.create({
//     payment_method_types:["card"],
//     line_items:lineItems,
//     mode:"payment",
//     success_url:"http://localhost:8000/sucess",
//     cancel_url:"http://localhost:8000/cancel",
// });
// }

// export const createcheckoutsession = async (request, response) => {
//     try {
//         const product = req.body;
//     console.log(product)

//     const lineItems = product.map((product)=>({
//         price_data:{
//             currency:"inr",
       
//             unit_amount:product.price * 100,
//         },
//         quantity:product.quantity
//     }));
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types:["card"],
//         line_items:lineItems,
//         mode:"payment",
//         success_url:"http://localhost:8000/sucess",
//         cancel_url:"http://localhost:8000/cancel",
//     });
//     } catch (error) {
//         response.status(500).json('Error: ', error.message);
//     }
// }

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment =async (req, res) => {
    const product = req.body;
        console.log(product)
    
        const lineItems = product.map((product)=>({
            price_data:{
                currency:"inr",
           
                unit_amount:product.price * 100,
            },
            quantity:product.quantity
    }));
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:8000/sucess",
        cancel_url:"http://localhost:8000/cancel", });
}

