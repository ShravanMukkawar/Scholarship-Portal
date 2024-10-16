"use client";

import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Card({ title, description, image, route }) {

    console.log(title, description, image, route);
    const href = route || '/home';
  return (
    <Link href={href}>
      <div className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}