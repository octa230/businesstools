import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SocialHomeScreen from "./screens/SocialBot/SocialHomeScreen";
import EditProfileScreen from "./screens/SocialBot/EditProfileScreen";
import UserHome from "./screens/welcomeScreen/userHome";
import SignupUser from "./screens/welcomeScreen/SignupUser";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="/socialbot" element={<SocialHomeScreen />}/>
      <Route path="/profile" element={<UserHome/>}/>
      <Route path="signup" element={<SignupUser />}/>
      <Route path="/edit-profile" element={<EditProfileScreen />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
