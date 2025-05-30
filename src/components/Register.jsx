// 회원 가입
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {

    const [input, setInput] = useState({
        nickname: "",
        birth: "",
        country: "",
        bio: ""
    })
    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if (input.nickname === "") {
            //빈 문자열일 때 입력하라고 포커스함
            inputRef.current.focus();
        }
    }

    return (
        <>
            <input ref={inputRef} name="nickname" value={input.nickname} onChange={onChange} placeholder="이름" />
            {input.nickname}

            <input name="birth" value={input.birth} onChange={onChange} type="date" />
            {input.birth}

            <select name="country" value={input.country} onChange={onChange}>
                <option></option>
                <option>한국</option>
                <option>미국</option>
                <option>영국</option>
            </select>
            {input.country}

            <textarea name="bio" value={input.bio} onChange={onChange} />
            {input.bio}

            < button onClick={onSubmit}>제출</button >
        </>
    )
}

export default Register;

