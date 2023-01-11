import React,{useState, useCallback, useRef} from 'react';
import {Text, View, TextInput, Pressable, Alert, StyleSheet} from 'react-native';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type SignInScreenProps=NativeStackScreenProps<RootStackParamList, "SignIn">;
function SignIn({navigation}:SignInScreenProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef=useRef<TextInput | null>(null);
    const passwordRef=useRef<TextInput | null>(null);
    const onChangeEmail=useCallback((text)=>{
        setEmail(text)
    },[])
    const onChangePassword=useCallback((text)=>{
        setPassword(text)
    },[])
    const onSubmit=useCallback(()=>{
        if(!email || !email.trim()){
            return Alert.alert("알림","이메일을입력해주세요")
        }
        if(!password || !password.trim()){
            return Alert.alert("알림","비밀번호를 입력해주세요")
        }
        Alert.alert("알림", "로그인이되었습니다")
    },[email,password])

    const canGoNext=email && password

    const toSignUp = useCallback(()=>{
        navigation.navigate("SignUp")
    },[navigation])

    return (
        <View style={style.inputWrapper}>
            <View style={style.label}>
                <Text>이메일</Text>
                <TextInput placeholder="이메일을 입력해주세요" onChangeText={onChangeEmail} style={style.textInput}
                    value={email}
                    importantForAutofill="yes"
                    autoComplete="email"
                    textContentType='emailAddress'
                    returnKeyType="next"
                    onSubmitEditing={()=>{
                        passwordRef.current?.focus()
                    }}
                    blurOnSubmit={false}
                    ref={emailRef}
                    clearButtonMode="while-editing"
                    keyboardType='email-address'
                
                />
            </View>

            <View style={style.label}>
                <Text>비밀번호</Text>
                <TextInput placeholder="비밀번호을 입력해주세요" onChangeText={onChangePassword} style={style.textInput} 
                    ref={passwordRef}
                    value={password}
                    importantForAutofill="yes"
                    autoComplete="password"
                    textContentType='password'
                    secureTextEntry
                    onSubmitEditing={onSubmit}
                    keyboardType="decimal-pad"
                    
                    
                    />
            </View>

            <View style={style.buttonZone}>
                <Pressable style={!canGoNext ? style.loginButton : StyleSheet.compose(style.loginButton, style.loginButtonActive)} onPress={onSubmit} disabled={!canGoNext}>
                    <Text style={style.loginButtonText}>로그인</Text>
                </Pressable>
                <Pressable onPress={toSignUp}>
                    <Text>회원가입하기</Text>
                </Pressable>
            </View>

        </View>
    )
}

const style=StyleSheet.create({
    inputWrapper:{
        padding:20,
    }
    ,
    loginButton:{
        backgroundColor:"grey",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5,
        marginBottom:10,
    },
    loginButtonActive:{
        backgroundColor:"blue"
    },
    loginButtonText:{
        color:"white",
    },
    buttonZone:{
        alignItems:"center",
    },
    label:{
        fontWeight:"bold",
        fontSize:16,
        marginBottom:20,

    },
    textInput:{
        padding:5,
        borderBottomWidth:StyleSheet.hairlineWidth,
    }
})

export default SignIn