import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {} from './registrationSlice';
import styles from './Product.module.css';
import { incrementAsyncProduct } from './productSlice';
import { Navigate, useNavigate } from 'react-router-dom';
export function Product(){
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const [name, SetName] = useState();
    const [company, SetCompany] = useState();
    const [fullPrice, SetFullPrice] = useState();
    const [categoryId, SetCategoryId] = useState();
    return(
        <>
        <div className={styles.maxCenter}>
            <div className={styles.center}>
                <p>Product</p>
                <input onChange={ (e)=>{
                    SetName(e.target.value);
                }} className={styles.inputColor} placeholder='Name' type='text'></input>
                <input onChange={ (e)=>{
                    SetCompany(e.target.value);
                }} className={styles.inputColor} placeholder='Company' type='text'></input>
                <input onChange={ (e)=>{
                    SetFullPrice(e.target.value);
                }} className={styles.inputColor} placeholder='Full price' type='number'></input>
                <input onChange={ (e)=>{
                    SetCategoryId(e.target.value);
                }} className={styles.inputColor} placeholder='Category id' type='number'></input>
                <button onClick={
                    ()=>{
                        console.log(fullPrice);
                        dispatch(incrementAsyncProduct({name: name, company: company, fullPrice: fullPrice, categoryId: categoryId}));
                    }
                    
                }  className={styles.buttonType1}>Add product</button>
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