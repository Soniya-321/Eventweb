import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import signupImage from "../assets/signup-image.jpg"; // Replace with your actual image path
//import logo from "../assets/logo.png"; // Replace with your actual logo path
import { Wrapper, MobileLogo, DesktopLogo, ImageContainer, Img, FormContainer, Input, Label, Button, Error, Text, LinkButton } from "./StyledComponents";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!email || !username || !password) {
      setError("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ email, username, password }));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <Wrapper>
      <ImageContainer>
        <MobileLogo>BookUsNow</MobileLogo>
        <Img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png" alt="Signup" />
      </ImageContainer>
      <FormContainer>
        <DesktopLogo>BookUsNow</DesktopLogo>
        <form onSubmit={handleSignup}>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <Label>Username</Label>
          <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          
          <Label>Password</Label>
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          
          <Button type="submit">Signup</Button>
          {error && <Error>{error}</Error>}
        </form>
        <Text>Already have an account? <Link to="/login"><LinkButton>Login</LinkButton></Link></Text>
      </FormContainer>
    </Wrapper>
  );
};

export default Signup;
