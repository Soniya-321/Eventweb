import styled from "styled-components";

// Wrapper for responsive layout
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
  background-color: #f8f9fa;
  font-family: "Inter";
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 20px;
  }
`;

// Label styling
export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin:5px;
  color: #333;
`;

// Image container
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

// Form container
export const FormContainer = styled.div`
    max-width: 450px;
  padding: 20px 40px;
  margin-top: 0px;
  background: white;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  @media (min-width: 768px) {
    min-width: 320px;
    padding: 20px;
  }
`;

//Img 
export const Img = styled.img`
    height: 300px;
    width: 400px;
    margin-top: 20px;
    margin-bottom: 20px;
    @media (min-width: 768px) {
        min-width: 350px;
    }
`

// Logo styling
export const MobileLogo = styled.h1`
  font-size: 30px;
  color:rgb(247, 7, 7);
  margin-bottom: 10px;
  
  display:flex;
  @media (min-width:768px) { 
    display: none !important;
}
`;
export const DesktopLogo = styled.h1`
    display: none;
    color:rgb(247, 7, 7);
    font-size: 30px;
    margin-bottom: 10px;
    @media (min-width: 768px) { 
        display: block !important;
    }
    `;

// Input fields
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  font-family: "Inter";
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

// Button styling
export const Button = styled.button`
  width: 95%;
  padding: 10px;
  background: #007bff;
  margin-top: 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

// Error message
export const Error = styled.p`
  color: red;
  font-size: 14px;
  text-align: left;
  margin-left: 7px;
  margin-top: 4px;
`;

// Text links
export const Text = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

export const LinkButton = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
