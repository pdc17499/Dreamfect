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
import { useDispatch } from 'react-redux';
import { setDataSignup } from '@redux';

interface SignUpInfoProp { }

interface screenNavigationProp {
    navigate: any;
}

export function useModel(props: any) {
    const navigation = useNavigation<screenNavigationProp>();
    const formRef = useRef<any>();
    const dispatch = useDispatch()

    const formInitialValues = {
        first_name: '',
        last_name: '',
        phone: '',
        error: '',
    };

    const validationSign = yup.object().shape({
        first_name: yup
            .string()
            .required('This field is required'),

        last_name: yup
            .string()
            .required('This field is required'),
        phone: yup
            .string()
            .min(9, 'Phone number at least 9 numbers')
            .max(15, 'Phone number no longer than 15 numbers')

            .required('This field is required'),

    });
    const handleSubmit = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
        }
    };

    const onSubmit = (first_name: any, last_name: any, phone: any) => {
        dispatch(setDataSignup({ first_name: first_name, last_name: last_name, phone: phone }))
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