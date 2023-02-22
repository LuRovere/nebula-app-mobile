import { createReducer } from "@reduxjs/toolkit";
import paymentActions from "./mercadoPago.actions";

const {payment} = paymentActions

const initialState = {
    order: []
}

const paymentReducers = createReducer(
    initialState,
    (builder) => {
        builder
            .addCase(payment.fulfilled,
                (state, action) => {
                    console.log(action)
                    let newState = {
                        mercadopago: action.payload.response
                    }
                    return newState
                }
            )
    }
)

export default paymentReducers