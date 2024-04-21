import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './OrderStatus.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { incrementAsyncOrderStatus } from './orderStatusSlice';
export function OrderStatus(){
    const [pId, SetPId] = useState();
    const [type, SetType] = useState();
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Order Status</p>
                <input onChange={ (e)=>{
                    SetPId(e.target.value);
                }} className={styles.inputColor} placeholder='Please, enter your Id' type='number'></input>
                <input onChange={ (e)=>{
                    SetType(e.target.value);
                }} className={styles.inputColor} placeholder='Type' type='text'></input>
                <button onClick={
                    ()=>{
                        dispatch(incrementAsyncOrderStatus({pId: pId, type: type}));
                    }
                    
                }  className={styles.buttonType1}>Add new order status</button>
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