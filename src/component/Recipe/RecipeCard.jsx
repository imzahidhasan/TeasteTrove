const RecipeCard = () => {
  return (
    <div>
      <div className="card w-96  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="divider"></div>
          <div>
            <p>hello</p>
          </div>
          <div>
            <ul className="list-disc ml-7">
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
              <li>hi</li>
            </ul>
          </div>
          <div className="flex gap-16 items-center">
            <div>
              <p>cokking time</p>
            </div>
            <div>
              <p>calories</p>
            </div>
          </div>
          <div className="card-actions p-4">
            <button className="btn btn-primary rounded-full">Want to cock</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
