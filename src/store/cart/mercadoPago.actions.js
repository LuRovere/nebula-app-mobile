import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '../../../configs'


import { Linking } from 'react-native';

const payment = createAsyncThunk(
    "payment",
    async ({data, token}) => {
        try {
            const url = `${API_URL}payment`
            let headers = {headers: {'Authorization':`Bearer ${token}`}}
            const response = await axios.post(url, data, headers)
            console.log(response);

            // Abrir la URL en el navegador del dispositivo
            Linking.openURL(response.data.url);

            return {
                success: true,
                response: response.data
            }
        } catch (error) {
            return {
                success: false,
                response: console.log(error)
            }
        }
    }
);

const paymentActions = {payment}

export default paymentActions