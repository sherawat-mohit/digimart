import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart, deleteFromCart, deleteProduct } from '../store/reducer';

const AllProductsPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart);
    const [productList, setProductList] = useState([]);
    const [is_sort_asc, set_is_sort_asc] = useState(false);
    const [deletingModalProduct, setdeletingModalProduct] = useState(null);

    // handling editing of product info
    const handleProductEdit = (productId) => {
        navigate(`/create?id=${productId}`);
    };

    // handling deleting of product
    const handleProductDelete = (productId) => {
        // Implement the logic to delete the product
        dispatch(deleteProduct(productId));
        setdeletingModalProduct(null);
        // Show alert/notification after deletion
        toast("Item Deleted successfully!");
    };

    // handing sorting of product
    const handleSort = () => {
        is_sort_asc ?
            setProductList(productList.slice().sort((a, b) => b.price - a.price)) :
            setProductList(productList.slice().sort((a, b) => a.price - b.price));

        set_is_sort_asc(!is_sort_asc);
    };

    // Add the product to the cart 
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        // Show alert/notification after adding product to the cart
        toast("Item Added successfully!");
    };

    // Removing the product from the cart  
    const handleRemoveFromCart = (id) => {
        dispatch(deleteFromCart(id));
        // Show alert/notification after removing the product from the cart
        toast("Item Removed successfully!");
    };

    useEffect(() => {
        setProductList(products);
    }, [products]);

    return (
        <div style={{ margin: 20 }}>
            {/* Delete modal confirmation */}
            {deletingModalProduct &&
                <div className='confirm-modal'>
                    <div className='modal-box'>
                        <h4>Are you sure you want to Delete "{deletingModalProduct?.name}"</h4>
                        <div className='modal-btns'>
                            <button onClick={() => { handleProductDelete(deletingModalProduct?.id) }}>Yes</button>
                            <button onClick={() => { setdeletingModalProduct(null); }}>No</button>
                        </div>
                    </div>
                </div>}
            {/* Render the product list */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="sort-btn" onClick={handleSort}>Sort by Price</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {productList.map((product) => {

                    const isInCart = cart?.find(_ => _.id === product?.id);
                    return <div key={product.id} className="product">

                        <div className='product_left'>
                            <img src={product.imageUrl} alt={product.name} />
                            <div>
                                <p className="product-name">{product.name}</p>
                                <p className="product-price">${product.price}</p>
                            </div>
                        </div>

                        <div className='product_right'>
                            <p className="product-description">{product.description}</p>
                            <div>
                                <button onClick={() => handleProductEdit(product.id)}><img src='https://cdn-icons-png.flaticon.com/512/9356/9356210.png' /></button>
                                <button onClick={() => setdeletingModalProduct(product)}><img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' /></button>
                                <button onClick={() =>
                                    isInCart ? handleRemoveFromCart(product.id) : handleAddToCart(product)
                                }>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
                            </div>
                        </div>

                    </div>
                })}
            </div>

        </div >
    );
};

export default AllProductsPage;


