import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {

    const {meals} =useLoaderData();
   const datas= meals[0];
 const {strYoutube,strMeal,strMealThumb , strInstructions}=datas;
    return (
        <div className="flex gap-4 w-10/12 m-auto p-7">
          <div className="w-4/12 bg-slate-200 p-4 rounded-lg ">
            <img
             src={strMealThumb} alt=""
             className="rounded-lg" />
            <h1 className="text-2xl mb-5 font-semibold">{strMeal}</h1>
            <a  className="  flex items-center gap-1" target="blank"  href={strYoutube}> 
            <img className="w-[40px]" src="https://www.svgrepo.com/show/13671/youtube.svg" alt="" />
             <span className="text-lg font-semibold btn btn-link">Youtube </span></a>
          </div>
          
          
          <div className=" flex-1 text-gray-300 ">
          <h2 className="text-2xl mb-5 font-semibold">Instructions </h2>
          <p> {strInstructions}</p>
          </div>
        </div>
    );
};

export default ShowDetails;