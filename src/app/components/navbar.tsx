"use client";

import { useState } from "react";

const Navbar = () => {
  return (
    <header className="bg-primary-500 text-white p-2 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/foto.png" alt="Site Logo" className="h-6 w-6" />
          <h1 className="text-base font-bold">Tripkolic</h1>
        </div>

        <nav>
          <ul className="flex space-x-4 items-center">
            <li className="relative group">
              <button className="hover:bg-primary-700 px-2 py-1 rounded text-sm">
                Menü
              </button>
              <div className="absolute left-0 hidden group-hover:block bg-primary-500 p-3 rounded shadow-lg text-sm">
                <ul className="space-y-1">
                  <li className="hover:text-gray-300">Tours</li>
                  <li className="hover:text-gray-300">Tickets</li>
                  <li className="hover:text-gray-300">Rent</li>
                  <li className="hover:text-gray-300">Transfer</li>
                  <li className="hover:text-gray-300">Favorites</li>
                  <li className="hover:text-gray-300">Cart</li>
                  <li className="hover:text-gray-300">Login</li>
                </ul>
              </div>
            </li>

            <li>
              <img
                src="/foto2.png"
                alt="Profil Resmi"
                className="h-6 w-6 rounded-full border border-white"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
