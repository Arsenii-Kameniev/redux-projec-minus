import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MainMenu.module.css';
import { Navigate, useNavigate } from 'react-router-dom';



export function MainMenu(){
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Menu</p>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/reg`);
                    }
                }>Registration</button>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/card`);
                    }
                }>Card</button>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/product`);
                    }
                }>Add product</button>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/order`);
                    }
                }>Add order</button>
                <p className={styles.Ad}>For admins</p>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/orderStat`);
                    }
                }>Add order status</button>
                <button className={styles.buttonType1} onClick={
                    ()=>{
                        Navigate(`/category`);
                    }
                }>Add category</button>
            </div>
            <button className={styles.buttonType2} onClick={
                    ()=>{
                        Navigate(`/workPlace`);
                    }
                }>Go To Work Place</button>
        </div>
        </>
    );
}