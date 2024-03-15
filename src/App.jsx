import { useState } from "react";
import Heading from "./component/Heading-section/Heading";
import RecipeCard from "./component/Recipe/RecipeCard";
import RecipeTable from "./component/Recipe/RecipeTable";
import Hero from "./component/navbar/hero-section/Hero";
import Navbar from "./component/navbar/navbar/Navbar";
import { useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Heading></Heading>
        <div className="grid grid-cols-12 gap-4 container mx-auto">
          <div className="col-span-7 grid gap-4 grid-cols-2">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="col-span-5">
            <RecipeTable></RecipeTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
