// Write all the code here
import React from "react";

const OrderDetails = () => {
    return (
        <>
            <section className="orderDetails">
                <main>
                    <h1>ORDER DETAILS</h1>
                    <div>
                        <h1>Shipping</h1>
                        <p>Address 1234 Foodie St</p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>Name Stuart</p>
                        <p>Phone 1234567890</p>
                    </div>
                    <div>
                        <h1>Status</h1>
                        <p>Order Status</p>
                        <p>Order Placed: 23-12-2023</p>
                        <p>Order Delivered: 23-12-2023</p>
                    </div>
                    <div>
                        <h1>Payment</h1>
                        <p>Payment Method: Credit</p>
                        <p>Payment Reference: P98765432</p>
                        <p>Paid On: 23-12-2023</p>
                    </div>
                    <div>
                        <h1>Amount</h1>
                        <p>Items Total Cost: $28.00 </p>
                        <p>Shipping Charges: 8.00</p>
                        <p>Tax: $5.00</p>
                        <p>Total Amount: $41.00</p>
                    </div>
                    
                    <article>
                        <h1>Ordered Items</h1>
                        <div>
                            <h4>Cheese Burger</h4>
                            <h4>1 x 5.00</h4>
                        </div>
                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <h4>1 x 8.00</h4>
                        </div>
                        <div>
                            <h4>Cheese Burger with Fries</h4>
                            <h4>1 x 15.00</h4>
                        </div>
                        <div>
                            <h4>Subtotal</h4>
                            <h4>$28.00</h4>
                        </div>

                    </article>

                </main>

            </section>
        </>
    )
}

export default OrderDetails;