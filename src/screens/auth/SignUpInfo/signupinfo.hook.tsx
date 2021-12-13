import { AppButton, AppInput, AppText, Footer, Header } from '@component';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { scaleWidth, SIZE } from '@util';
import React, { useRef, useState } from 'react';
import { ImageBackground, Pressable, View } from 'react-native';
import { styles } from './style';
import { Formik } from 'formik';
import * as yup from 'yup';
import { background_signup, IconCheck } from '@assets';
import { SIGNUP_USER_ACCOUNT, VERIFICATION } from '@routeName';

interface SignUpInfoProp { }

interface screenNavigationProp {
    navigate: any;
}

export function useModel(props: any) {
    const navigation = useNavigation<screenNavigationProp>();
    const formRef = useRef<any>();

    const formInitialValues = {
        first_name: '',
        last_name: '',
        phone: '',
        error: '',
    };

    const validationSign = yup.object().shape({
        // first_name: yup
        //   .string()
        //   .required('This field is required'),

        // last_name: yup
        //   .string()
        //   .required('This field is required'),
        // phone: yup
        //   .string()
        //   .required('This field is required'),

    });
    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    };

    const onSubmit = () => {
        navigation.navigate(SIGNUP_USER_ACCOUNT)
    };

    return {
        formRef,
        formInitialValues,
        validationSign,
        handleSubmit,
        onSubmit,
    }

}