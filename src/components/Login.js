import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/fonts/circular-std/style.css';
import '../assets/libs/css/style.css';
import '../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 요청 처리
  };

  function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

  const idInputRef = useRef();
  const pwInputRef = useRef();
  const [isAlertPopId, setIsAlertPopId] = useState(false);
  const [isAlertPopPw, setIsAlertPopPw] = useState(false);

  const validateId = () => {
    const idValue = idInputRef.current.value;
    const isIdValid = idValue;
    return isIdValid;
  };

  const validatePw = () => {
    const pwValue = pwInputRef.current.value;
    const isPwValid = pwValue;
    return isPwValid;
  };

  const alertEachValid = () => {
    setIsAlertPopId(!validateId());
    setIsAlertPopPw(!validatePw());
  };

  const navigate = useNavigate();

  const onValidation = () => {
    if (validateId() && validatePw()) {
      if (idInputRef.current.value === 'dev') {
        navigate('/dash_dev')
      }
      else if (idInputRef.current.value === 'admin') {
        navigate('/dash_admin')
      }
      else if (idInputRef.current.value === 'ops') {
        navigate('/dash_op')
      }
      alert('로그인 되었습니다! 환영합니다 :)');
    } else {
      alertEachValid();
    }
  };


  const onSignIn = () => {
    const csrftoken = getCookie('csrftoken');
    // django 로 로그인 데이터 전송
    fetch('http://localhost:8000/user/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
      body: JSON.stringify({
        id: idInputRef.current.value,
        pw: pwInputRef.current.value,
      }),
    })
      .then(response => response.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          localStorage.setItem('TOKEN', res.access_token);
          onValidation();
        } else {
          alertEachValid();
        }
      });
  };
    

  return (
      <div className="login-container">
    <div className="splash-container">
      <div className="card ">
        <div className="card-header text-center">
          <br/>
          <h2>TTeog-Ip</h2>
          <span className="splash-description">
            Please enter your user information.
          </span>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="username"
                type="text"
                placeholder="Username"
                autoComplete="off"
                ref={idInputRef}
                isalertpop={isAlertPopId ? 'true' : 'false'}
                alertword="아이디를 입력하세요."
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-lg"
                id="password"
                type="password"
                placeholder="Password"
                ref={pwInputRef}
                isalertpop={isAlertPopPw ? 'true' : 'false'}
                alertword="비밀번호를 입력하세요."
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={onSignIn}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
      </div>
  );
};

export default LoginForm;