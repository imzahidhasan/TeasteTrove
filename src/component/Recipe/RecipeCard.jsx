const RecipeCard = ({ recipe, handleWantToCook }) => {
 
  return (
    <div>
      <div className="card   bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-xl text-[#282828]">
            {recipe.recipe_name}
          </h2>
          <p className="text-[#878787]">{recipe.short_description}</p>
          <div className="divider"></div>
          <div>
            <p className="font-bold text-lg text-[#282828]">
              Ingredients: {recipe.ingredients.length}
            </p>
          </div>
          <div>
            <ul className="list-disc ml-7 text-[#878787]">
              {recipe.ingredients.map((item,idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="flex gap-16 items-center">
            <div>
              <p>{recipe.preparing_time_minutes} minutes</p>
            </div>
            <div>
              <p>{recipe.calories} calories</p>
            </div>
          </div>
          <div className="card-actions p-4">
            <button onClick={()=>handleWantToCook(recipe)} className="btn bg-[#0BE58A] text-[#150B2B] text-base rounded-full">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
