import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";

const techStartups = [
  {
    name: "bKash",
    description:
      "bKash is a leading mobile financial service provider in Bangladesh, offering mobile wallet services.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bkash_logo.svg/1200px-Bkash_logo.svg.png",
  },
  {
    name: "Pathao",
    description:
      "Pathao is a Bangladeshi on-demand ride-sharing and logistics platform that connects people and businesses through technology.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Pathao_logo.png",
  },
  {
    name: "Sheba.xyz",
    description:
      "Sheba.xyz is a Bangladeshi digital services platform offering a variety of services, from home maintenance to beauty services.",
    image:
      "https://sheba.xyz/static/media/logo.4e47e238.svg",
  },
  {
    name: "Aamra Technologies",
    description:
      "Aamra Technologies is a Bangladeshi IT company providing digital transformation solutions, including software development and cloud computing services.",
    image:
      "https://www.aamra.com/wp-content/uploads/2022/01/aamra-logo-1.png",
  },
  {
    name: "Chaldal",
    description:
      "Chaldal is an online grocery delivery service in Bangladesh, delivering groceries and household items through their mobile app.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/aa/Chaldal_logo.png",
  },
];

export default function TechPage() {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-2">
        <h1 className="text-3xl font-bold">Tech Startups in Bangladesh</h1>
        <nav className="space-x-4">
          <Button variant="ghost">Business</Button>
          <Button variant="ghost">Tech</Button>
          <Button variant="ghost">Markets</Button>
          <Button variant="ghost">Leadership</Button>
        </nav>
      </header>

      {/* Tech Startups List */}
      <section>
        <h3 className="text-xl font-semibold mb-4">Top Tech Startups</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techStartups.map((startup, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <img
                src={startup.image}
                alt={startup.name}
                className="w-full h-40 object-cover rounded-t-2xl"
              />
              <CardContent className="p-4">
                <h4 className="font-bold text-lg mb-1">{startup.name}</h4>
                <p className="text-sm text-gray-600">{startup.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
