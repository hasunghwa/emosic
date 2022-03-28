import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

const MainContainer = styled.main``;
export default App;
