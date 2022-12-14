import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  let error: any = useRouteError();

  return (
    <div className="bg-white" id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
