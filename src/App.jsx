import { useState } from "react";
import Heading from "./component/Heading-section/Heading";
import RecipeCard from "./component/Recipe/RecipeCard";
import RecipeTable from "./component/Recipe/RecipeTable";
import Hero from "./component/navbar/hero-section/Hero";
import Navbar from "./component/navbar/navbar/Navbar";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const [wantToCookTable, setWantToCookTable] = useState([]);
  const [cookingItem, setCookingItem] = useState([]);

  const notify = () => {
    toast.warn("Product already added.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };
  const handleWantToCook = (recipe) => {
    const isExist = wantToCookTable.find((item) => item.id === recipe.id);
    if (!isExist) {
      setWantToCookTable([...wantToCookTable, recipe]);
    } else {
      notify();
    }
  };
  const handleCookingItem = (item) => {
    setCookingItem([...cookingItem, item]);
    let filteredItem = wantToCookTable.filter((recipe) => recipe.id != item.id);
    setWantToCookTable([...filteredItem]);
  };
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Heading></Heading>
        <div className="grid grid-cols-12 gap-4 container mx-auto">
          <div className="col-span-7 grid gap-4 grid-cols-2">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                handleWantToCook={handleWantToCook}
              />
            ))}
          </div>
          <div className="col-span-5">
            <RecipeTable
              handleCookingItem={handleCookingItem}
              wantToCookItems={wantToCookTable}
              cookingItem={cookingItem}
            ></RecipeTable>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default App;
