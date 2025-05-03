import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";

const dummyUsers = [
  { id: 1, name: "Admin One", role: "Super Admin", email: "admin1@example.com" },
  { id: 2, name: "Admin Two", role: "Moderator", email: "admin2@example.com" },
  { id: 3, name: "Admin Three", role: "Editor", email: "admin3@example.com" },
];

export default function AdminPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>Add New Admin</Button>
      </header>

      {/* Admin List */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Manage Admin Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {dummyUsers.map((user) => (
            <Card key={user.id} className="rounded-2xl shadow">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="secondary">Edit</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
