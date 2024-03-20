
import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';

const DisplayMelsCard = ({meal}) => {
    const {idMeal,strMeal,strMealThumb , strInstructions}=meal;

    // const Meals=useLoaderData();
    return (
        <div className="card card-compact  bg-gray-300 shadow-lg shadow-pink-100 border-4">
            <figure><img src={strMealThumb} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title bg-[#363e4a] rounded-lg p-2 text-white">{strMeal}</h2>
                <p className='text-lg'>{strInstructions.slice(0,70)} ......</p>
                <div className="card-actions justify-end">
                  <Link to={`/Details/${idMeal}`}>  <button className="btn btn-outline">Show Details</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayMelsCard;

DisplayMelsCard.propTypes={

   meal : PropTypes.object.isRequired,
}