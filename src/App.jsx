import Heading from "./component/Heading-section/Heading";
import RecipeCard from "./component/Recipe/RecipeCard";
import RecipeTable from "./component/Recipe/RecipeTable";
import Hero from "./component/navbar/hero-section/Hero";
import Navbar from "./component/navbar/navbar/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Heading></Heading>
        <div className="grid grid-cols-12 gap-4 container mx-auto">
          <div className="col-span-7 grid grid-cols-2">
            <RecipeCard></RecipeCard>
            <RecipeCard></RecipeCard>
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
