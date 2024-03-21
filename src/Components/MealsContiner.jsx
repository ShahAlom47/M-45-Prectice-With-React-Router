import { useLoaderData, useNavigation } from "react-router-dom";
import DisplayMelsCard from "./DisplayMelsCard";


const MealsContiner = () => {
    const {meals} = useLoaderData();
    const { state } = useNavigation();
  
    return (
        <>
        {
           state === 'loading' &&(

            <h1></h1>
           )
        }
        
        <div className=" w-10/12 m-auto grid gap-4 grid-cols-1 lg:grid-cols-3 py-6">

          
            {
              
                meals.map((meal)=> <DisplayMelsCard key={meal.idMeal} meal={meal} ></DisplayMelsCard>)
            }
          
        </div>
        </>
    );
};

export default MealsContiner;