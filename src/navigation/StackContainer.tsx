import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import UnAuthenStack from './unauthenstack';
import { resetDataSignup } from '@redux';

//main stack app
const NavigationApp = () => {
  // let { token, role }: any = useSelector((state: any) => state?.auth);
  // const dispatch = useDispatch();
  // console.log({ token });
  // React.useEffect(() => {
  //   dispatch(resetDataSignup());
  // }, [token]);

  const renderStackApp = () => {
    console.log('hi');
    return <UnAuthenStack />

    // if (!token) {
    //   return <UnAuthenStack />;
    // } else {
    //   return <UnAuthenStack />;
    // }
  };
  return (
    <NavigationContainer>{renderStackApp()}</NavigationContainer>
  );
};

export default NavigationApp;
