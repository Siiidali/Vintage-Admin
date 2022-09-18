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

  const normalLink =
    'flex items-center justify-center md:justify-start md:pl-3 md:py-3 gap-5  py-2.5 rounded-lg mb-3';
  return (
    <div className=" flex flex-col gap-1 w-16 sm:w-24 md:w-72 lg:w-72 h-screen sticky top-0 py-9 px-3 border-r-2 border-gray-400 border-solid ">
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
