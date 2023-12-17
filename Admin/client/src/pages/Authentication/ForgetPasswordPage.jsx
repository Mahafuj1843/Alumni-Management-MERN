import { Fragment } from 'react';
import ForgetPassword from '../../components/authentication/ForgetPassword';

const ForgetPasswordPage = () => {
  return (
    <Fragment>
    <main class="main bg-white px-2 md:py-6 rounded-sm border border-stroke shadow-default dark:border-strokedark dark:bg-boxdark">
        <ForgetPassword/>
    </main>
</Fragment>
  );
};

export default ForgetPasswordPage;
