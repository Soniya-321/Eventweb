import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper, ImageContainer, Img, FormContainer, MobileLogo, DesktopLogo, Input, Label, Button, Error, Text, LinkButton } from "./StyledComponents";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || email !== storedUser.email || password !== storedUser.password) {
      setError("Invalid email or password!");
      return;
    }

    localStorage.setItem("isAuthenticated", "true");
    navigate("/home");
  };

  return (
    <Wrapper>
      <ImageContainer>
      <MobileLogo>BookUsNow</MobileLogo>
      <Img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="Signup" />
      </ImageContainer>
      <FormContainer>
        <DesktopLogo>BookUsNow</DesktopLogo>
        <form onSubmit={handleLogin}>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit">Login</Button>
          {error && <Error>{error}</Error>}
        </form>
        <Text>Don't have an account? <Link to="/signup"><LinkButton>Signup</LinkButton></Link></Text>
      </FormContainer>
    </Wrapper>
  );
};

export default Login;
