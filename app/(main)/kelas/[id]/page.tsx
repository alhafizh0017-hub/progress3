'use client';

import { useParams } from "next/navigation";

export default function KelasIdPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the kelas {id}</h1>
      <h2 className="text-gray-600">This is a subheading</h2>
    </div>
  );
}