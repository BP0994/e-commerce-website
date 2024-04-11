import { Avatar, Badge, Input } from "@nextui-org/react";
import React from "react";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { PiShoppingBagOpen } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import { VscError } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Exclusive</a>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4 justify-end items-center">
          <div className="form-control sm:block hidden">
            <Input
              type="text"
              placeholder={`What are you looking for ?`}
              className="  w-24 md:w-auto h-unit-xl"
              endContent={<FaSearch />}
            />
          </div>
          <div>
            <FaRegHeart size={20} />
          </div>
          <div className="mt-2">
            <Badge content="2" color="danger">
              <SlBasket size={20} className=" cursor-pointer " />
            </Badge>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className=" rounded-full">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  <span>
                    <RiContactsLine />
                  </span>
                  Manage My account
                </a>
              </li>
              <li className="justify-between">
                <a className="flex justify-between">
                  <span>
                    <PiShoppingBagOpen />
                  </span>
                  <span>My Order</span>
                </a>
              </li>
              <li className="justify-between">
                <a className="flex justify-between">
                  <span>
                    <VscError />
                  </span>
                  <span>My Cancellations</span>
                </a>
              </li>
              <li className="justify-between">
                <a className="flex justify-between">
                  <span>
                    <MdOutlineStarBorderPurple500 />
                  </span>
                  <span>My Reviews</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
