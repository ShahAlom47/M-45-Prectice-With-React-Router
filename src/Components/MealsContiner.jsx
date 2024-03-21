import { useLoaderData, useNavigation } from "react-router-dom";
import DisplayMelsCard from "./DisplayMelsCard";
import { RotatingLines } from "react-loader-spinner";


const MealsContiner = () => {
    const { meals } = useLoaderData();
    const { state } = useNavigation();

    return (
        <>
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

            <div className=" w-10/12 m-auto grid gap-4 grid-cols-1 lg:grid-cols-3 py-6">


                {

                    meals.map((meal) => <DisplayMelsCard key={meal.idMeal} meal={meal} ></DisplayMelsCard>)
                }

            </div>
        </>
    );
};

export default MealsContiner;