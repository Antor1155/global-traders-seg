import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminSecret = () => {
    return (
        <div>
            <nav>
                <Link to="/admin-secret"> Admin home</Link>
                <Link to="/admin-secret/catagory"> catagory</Link>
                <Link to="/admin-secret/products">All products</Link>
                <Link to="/admin-secret/add-product"> Add product</Link>
            </nav>

            <Outlet></Outlet>

        </div>
    );
};

export default AdminSecret;