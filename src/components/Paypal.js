import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';





const Paypal = (props) => {
    let price1 = props.initialPrice;



    return (
        <div className='pa'>

            
            <div className='confirmHold2 absolute outline-none border-none'>


                <PayPalScriptProvider>
                    <PayPalButtons aria-label='BUY WITH PAYPAL' createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: price1,
                                    },
                                },
                            ],
                        });
                    }}>

                    </PayPalButtons>
                </PayPalScriptProvider>
            </div>

        </div>
    )
}


export default Paypal

