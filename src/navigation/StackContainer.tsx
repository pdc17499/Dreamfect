import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import UnAuthenStack from './unauthenstack';
import AuthenStack from './authenstack';
import { resetDataSignup } from '@redux';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  let token: any = useSelector((state: any) => state?.auth?.token);
  const dispatch = useDispatch();
  console.log({ token });
  // React.useEffect(() => {
  //   dispatch(resetDataSignup());
  // }, [token]);

  const renderStackApp = () => {


    if (!token) {
      return <UnAuthenStack />;
    } else {
      return <AuthenStack />;
    }
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export default NavigationApp;
