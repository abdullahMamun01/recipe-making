import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import AllRecipes from "@/components/recipes/AllRecipes";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <div className="col-span-12 md:col-span-3">
            <Sidebar />
          </div>

          <div className="col-span-12 md:col-span-9">
            <AllRecipes />
          </div>
        </div>
      </section>
    </main>
  );
}
