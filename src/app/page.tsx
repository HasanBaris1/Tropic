"use client";

import { useState } from "react";
import Navbar from "./components/navbar";


export default function Home() {
  const cardsData = [
    { id: 1, title: "Island Tour", price: 12000, category: "Tours", activity: "Snorkelling" },
    { id: 2, title: "Land Tour", price: 15000, category: "Tours", activity: "Safari" },
    { id: 3, title: "Safari Adventure", price: 18000, category: "Tours", activity: "Elephant Care" },
    { id: 4, title: "Luxury Car Rental", price: 25000, category: "Rent", activity: "Driving" },
    { id: 5, title: "Boat Ticket", price: 5000, category: "Tickets", activity: "Cruise" },
    { id: 6, title: "Airport Transfer", price: 8000, category: "Transfers", activity: "Transport" },
  ];

  const [category, setCategory] = useState(""); 
  const [maxPrice, setMaxPrice] = useState(25000); 
  const [activity, setActivity] = useState("");

  const filteredCards = cardsData.filter((card) => {
    return (
      (category ? card.category === category : true) &&
      card.price <= maxPrice &&
      (activity ? card.activity === activity : true)
    );
  });

  return (
    <div className="flex">
      <Navbar />

      <aside className="w-1/4 p-4 border-r border-gray-200 bg-white">
        <h2 className="text-xl font-bold text-primary-500 mb-4">Filtreleme</h2>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Kategori</h3>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Tüm Kategoriler</option>
            <option value="Tours">Tours</option>
            <option value="Rent">Rent</option>
            <option value="Tickets">Tickets</option>
            <option value="Transfers">Transfers</option>
          </select>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Maksimum Fiyat</h3>
          <input
            type="range"
            min="0"
            max="25000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right">{maxPrice} TL</div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Aktivite</h3>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">Tüm Aktiviteler</option>
            <option value="Snorkelling">Snorkelling</option>
            <option value="Safari">Safari</option>
            <option value="Elephant Care">Elephant Care</option>
            <option value="Driving">Driving</option>
            <option value="Cruise">Cruise</option>
            <option value="Transport">Transport</option>
          </select>
        </div>

        <button
          onClick={() => {
            setCategory("");
            setMaxPrice(25000);
            setActivity("");
          }}
          className="w-full px-4 py-2 bg-gray-300 rounded"
        >
          Filtreyi Sıfırla
        </button>
      </aside>

      <main className="flex-1 p-12">
        <h1 className="text-3xl font-bold mb-6 text-primary-500">Turlar</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((item) => (
            <div
              key={item.id}
              className="border p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <img className="rounded-lg mb-4" src="resim3.jpg" alt={item.title} />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500">Fiyat: {item.price} TL</p>
              <p className="text-gray-500">Kategori: {item.category}</p>
              <p className="text-gray-500">Aktivite: {item.activity}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
