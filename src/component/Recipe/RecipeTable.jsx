const RecipeTable = ({ wantToCookItems, handleCookingItem }) => {
  // console.log(handleCookingItem);
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
                <td>{item.calories}</td>
                <td>{item.preparing_time_minutes}</td>
                <td>
                  <button
                    onClick={() => handleCookingItem(item)}
                    className="btn btn-primary"
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
        <h1>Currently cooking: 02</h1>
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
            <tr>
              <th></th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th></th>
              <td></td>
              <td>Total time:200</td>
              <td>Total calories:200</td>
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
