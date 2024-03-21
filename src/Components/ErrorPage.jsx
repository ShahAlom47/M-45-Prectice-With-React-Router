import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
    
const error = useRouteError()

    return (
        <div className=' text-white'>

<div id="error-page " className=' text-center min-h-screen flex justify-center items-center'>
    <div>

   
      <h1 className='text-3xl mb-5 font-bold'>Oops!</h1>
      <p className='text-lg mb-4'>Sorry, an unexpected error has occurred.</p>
      <p>
       <i> {error.statusText || error.message}</i>
      </p>
           
    </div>
    </div>
            
        </div>
    );
};

export default ErrorPage;