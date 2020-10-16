import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
// hoc :  high order function 으로 컴포넌트를 wrap한 다음 enhanced component를 리턴한다. 여기서는 인증 처리 로직을 담당하여 로그인한 사람만 들어갈 수 있도록 컴포넌트를 제작한다.
// api/users/auth에 유저 정보를 담아놓았다.

// option 은 3가지 경우
// null : 아무나 출입가능
// true : 로그인한 유저만 출입 가능한 페이지
// false : 로그인한 유저는 출입 불가능한 페이지
const authHoc = (SpecificComponent, option , adminRoute = null) => {
    function AuthenticationCheck(props){
        const distpatch = useDispatch()
        useEffect(()=>{
            distpatch(auth()).then((res) => {
                console.log(res.payload)
                //로그인하지 않은 상태
                if(!res.payload.isAuth){
                    if(option){
                        window.location.href = "/login"
                    }
                }else{
                    //로그인한 상태
                    if(adminRoute && !res.payload.userRole){
                        window.location.href = "/"
                    }else{
                        if(option == false){
                            window.location.href = "/"
                        }
                    }
                }
            })
        },[])
        return (
            <SpecificComponent/>
        )
    }
    return AuthenticationCheck
}

export default authHoc;