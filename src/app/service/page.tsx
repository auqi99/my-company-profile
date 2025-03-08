"use client";

import React, { useEffect, useState } from "react";

interface Product {
  objectId: string;
  title: string;
  price: number;
  image_url: string;
  description: string;
  category: string;
}

const ServicePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const API_URL = "https://quirkystore-us.backendless.app/api/data/Service";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <section className="min-h-screen w-full justify-center p-6 text-center">
      <h1 className="mb-6 text-2xl font-bold">
        Premium Services, Just for You
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.objectId}
            className="rounded-lg bg-blue-950 p-4 shadow-lg"
          >
            <img
              src={product.image_url}
              alt={product.title}
              className="h-40 w-full rounded object-cover"
            />
            <h2 className="mt-2 text-xl font-bold">{product.title}</h2>
            <p className="text-white">{product.description}</p>
            <p className="mt-2 text-lg font-semibold">
              Rp {product.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;
