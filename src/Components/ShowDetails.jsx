import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const ShowDetails = () => {
  const navigate = useNavigate();
  const { meals } = useLoaderData();
  const { state } = useNavigation();

  const datas = meals[0];
  const { strYoutube, strMeal, strMealThumb, strInstructions } = datas;
  const backhndel = () => {
    navigate(-1)
  }

  return (
    <div>
      {
        state === 'loading' && (
          <div className="flex justify-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        )
      }

      <div className="flex gap-4 w-10/12 m-auto p-7">
        <div className="w-4/12 bg-slate-200 p-4 rounded-lg ">
          <img
            src={strMealThumb} alt=""
            className="rounded-lg" />
          <h1 className="text-2xl mb-5 font-semibold">{strMeal}</h1>
          <a className="  flex items-center gap-1" target="blank" href={strYoutube}>
            <img className="w-[40px]" src="https://www.svgrepo.com/show/13671/youtube.svg" alt="" />
            <span className="text-lg font-semibold btn btn-link">Youtube </span></a>
          <div className="flex justify-center py-6">
            <button onClick={() => backhndel()} className=" btn btn-outline  ">Go Back</button>

          </div>
        </div>


        <div className=" flex-1 text-gray-300 ">
          <h2 className="text-2xl mb-5 font-semibold">Instructions </h2>
          <p> {strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;