import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";


const techBusinesses = [
  {
    name: "bKash",
    description:
      "bKash is a leading mobile financial service provider in Bangladesh, offering mobile wallet services.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bkash_logo.svg/1200px-Bkash_logo.svg.png",
  },
  {
    name: "Robi Axiata",
    description:
      "Robi Axiata is one of the leading telecommunications service providers in Bangladesh with a strong focus on tech innovation.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Robi_logo.svg/800px-Robi_logo.svg.png",
  },
  {
    name: "Pathao",
    description:
      "Pathao is a Bangladeshi on-demand ride-sharing and logistics platform that connects people and businesses through technology.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pathao_logo.png",
  },
  {
    name: "Aamra Technologies",
    description:
      "Aamra Technologies is a Bangladeshi IT company providing digital transformation solutions, including software development and cloud computing services.",
    image:
      "https://www.aamra.com/wp-content/uploads/2022/01/aamra-logo-1.png",
  },
  {
    name: "Sheba.xyz",
    description:
      "Sheba.xyz is a Bangladeshi digital services platform offering a variety of services, from home maintenance to beauty services.",
    image:
      "https://sheba.xyz/static/media/logo.4e47e238.svg",
  },
];

export default function BusinessPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-2">
        <h1 className="text-3xl font-bold">Tech Businesses in Bangladesh</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Business</Button>
          <Button variant="ghost">Tech</Button>
          <Button variant="ghost">Markets</Button>
          <Button variant="ghost">Leadership</Button>
        </nav>
      </header>

      {/* Businesses List */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Top Tech Businesses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techBusinesses.map((business, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1">{business.name}</h4>
                <p className="text-sm text-gray-600">{business.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
