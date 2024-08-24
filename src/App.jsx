import React, { Fragment, memo } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layout'
import Home from './pages/home'
import Category from './pages/category'
import Products from './pages/products'
import ProductDetailes from './pages/product-detailes'
import NotFound from './pages/not-found'
import WishList from './pages/wish-list'
import Cart from './pages/cart'
import Login from './pages/login'
import Auth from './pages/auth'
import Admin from './pages/admin'
import Dashboard from './pages/admin/dashboard'
import CreateProduct from './pages/admin/create/CreateProduct'
import CreateCategory from './pages/admin/create/CreateCategory'
import ManageProduct from './pages/admin/manage/ManageProduct'
import ManageCategory from './pages/admin/manage/ManageCategory'
import Brands from './pages/brands'

const App = () => {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Products />} />
          <Route path="wish-list" element={<WishList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="brands" element={<Brands />} />
          <Route path="products/:id" element={<ProductDetailes />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Auth />} >
          <Route path='admin/' element={<Admin />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='create-product' element={<CreateProduct />} />
            <Route path='manage-product' element={<ManageProduct />} />
            <Route path='create-category' element={<CreateCategory />} />
            <Route path='manage-category' element={<ManageCategory />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default memo(App)