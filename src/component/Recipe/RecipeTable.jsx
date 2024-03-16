const RecipeTable = ({ wantToCookItems, handleCookingItem, cookingItem }) => {
  return (
    <div className="shadow-xl  m-2 rounded-xl">
      <div className="text-center p-4">
        <h1 className="text-xl font-bold">
          Want to Cook: {wantToCookItems.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {wantToCookItems.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time_minutes} minutes</td>
                <td>{item.calories} calories</td>
                <td>
                  <button
                    onClick={() => handleCookingItem(item)}
                    className="btn bg-[#0be58a] rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center p-4">
        <h1 className="text-xl font-bold">
          Currently Cooking: {cookingItem.length}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingItem.map((item, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{item.recipe_name}</td>
                <td>{item.preparing_time_minutes} minutes</td>
                <td>{item.calories} calories</td>
              </tr>
            ))}
          </tbody>
          <tbody>
            <tr>
              <th></th>
              <td></td>
              <td>
                Total time:{" "}
                {cookingItem.reduce((accumulator, item) => {
                  return (accumulator += item.preparing_time_minutes);
                }, 0)}
              </td>
              <td>
                Total calories:{" "}
                {cookingItem.reduce((accumulator, item) => {
                  return (accumulator += item.calories);
                }, 0)}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeTable;
