import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
    // 로컬 스토리지에서 JWT 토큰을 삭제하는 함수
    const clearToken = () => {
        localStorage.removeItem('TOKEN');
    };

    useEffect(() => {
        clearToken(); // JWT 토큰 삭제
        navigate('/'); // 페이지 이동
    }, []);

    return null;
};

export default Logout;