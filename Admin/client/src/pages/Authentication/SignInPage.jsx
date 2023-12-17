import { Link } from 'react-router-dom';
import Signin from '../../components/authentication/Signin';
import { Fragment } from 'react';

const SignInPage = () => {
  return (
    <Fragment>
    <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <Signin/>
    </main>

    
    </Fragment>
  );
};

export default SignInPage;
