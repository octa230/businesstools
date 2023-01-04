import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EditProfileScreen from "./screens/user/EditProfileScreen";
import SignupUser from "./screens/welcomeScreen/SignupUser";
import Dashboard from "./screens/user/Dashboard";
import Profile from "./components/Profile";
import Team from "./screens/user/Team";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="signup" element={<SignupUser />}/>
      <Route path="/edit-profile" element={<EditProfileScreen />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/team" element={<Team />}/>
      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
