import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './AllProducts.module.css';
import { incrementAsyncAllProducts, Delete } from './allProductsSlice';
import { selectArr } from './allProductsSlice';
import { Navigate, useNavigate } from 'react-router-dom';
export function AllProducts() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const products = useSelector(selectArr);
    const [needToDelete, SetNeedToDelete] = useState();
    useEffect(() => {
        dispatch(incrementAsyncAllProducts());
    }, []);
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want delete this product?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={
                                () => {
                                    dispatch(Delete(needToDelete))
                                }
                            }>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.maxCenter}>
                <div className={styles.center}>
                    {
                        products.map((item, index) => {
                            return <div className={styles.productCard}>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Company: {item.company}</p>
                                <p>Category: {item.category.name}</p>
                                <p>Price: {item.partlyPrice}/{item.fullPrice}</p>
                                <img onClick={
                                    () => {
                                        SetNeedToDelete(item.id);
                                    }
                                } className={styles.icon} src='./images/delete.png' data-bs-toggle="modal" data-bs-target="#exampleModal" />
                            </div>
                        })
                    }
                    <button className={styles.Menu} onClick={
                        () => {
                            Navigate(`/menu`);
                        }
                    }>Main Menu</button>
                </div>
            </div>
        </>
    );
}