import React from 'react';
import dash from '../assets/dash_icon.svg';
import addPro from '../assets/add_product_icon.svg';
import product from '../assets/product_icon.svg';
import orders from '../assets/orders_icon.svg';
import users from '../assets/users_icon.svg';
import { NavLink } from 'react-router-dom';
const SideBar = () => {
  const menu = [
    {
      title: 'Dashboard',
      icon: dash,
      to: '/dashboard',
    },
    {
      title: 'Products',
      icon: product,
      to: '/products',
    },
    {
      title: 'Add Product',
      icon: addPro,
      to: '/addProduct',
    },
    {
      title: 'Users',
      icon: users,
      to: '/users',
    },
    {
      title: 'Orders',
      icon: orders,
      to: '/orders',
    },
  ];

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg m-2';
  return (
    <div className=" flex flex-col gap-1 w-24 sm:w-24 md:w-72 lg:w-72 h-screen py-9 px-3">
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-hubballi font-medium invisible sm:invisible md:visible lg:visible mb-10 ">
          VINTAGE
        </h2>
      </div>
      {menu.map((item) => {
        return (
          <NavLink
            key={item.title}
            to={item.to}
            className={normalLink}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#00ACA2ed' : '',
            })}
          >
            <img src={item.icon} alt="" />
            <p className="hidden sm:hidden md:block lg:block">{item.title}</p>
          </NavLink>
        );
      })}
    </div>
  );
};

export default SideBar;
