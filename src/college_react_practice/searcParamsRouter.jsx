import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './searcParams'

function searchParamsRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default searchParamsRouter;