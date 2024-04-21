import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './Order.module.css';
import { incrementAsyncOrder } from './orderSlice';
import { Navigate, useNavigate } from 'react-router-dom';
export function Order(){
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [payment, SetPayment] = useState();
    const [statusId, SetStatusId] = useState();
    const [productId, SetProductId] = useState();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Order</p>
                <input onChange={ (e)=>{
                    SetPayment(e.target.value);
                }} className={styles.inputColor} placeholder='Payment' type='number'></input>
                <input onChange={ (e)=>{
                    SetStatusId(e.target.value);
                }} className={styles.inputColor} placeholder='Id of the status' type='number'></input>
                <input onChange={ (e)=>{
                    SetProductId(e.target.value);
                }} className={styles.inputColor} placeholder='Id of the product' type='number'></input>
                <button onClick={
                    ()=>{
                    
                        dispatch(incrementAsyncOrder({payment: payment, statusId: statusId, productId: productId}));
                    }
                    
                } className={styles.buttonType1}>Add order</button>
                <button className={styles.Menu}  onClick={
                    ()=>{
                        Navigate(`/menu`);
                    }
                }>Main Menu</button>
            </div>
        </div>
        </>
    );
}