import HomeScreen from "./screens/HomeScreen";
import 'react-toastify/dist/ReactToastify.css';
import WelcomeScreen from "./screens/welcomeScreen/WelcomeScreen";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import EditProfileScreen from "./screens/user/EditProfileScreen";
import EditProduct from "./screens/admin/EditProduct";
import SignupUser from "./screens/welcomeScreen/SignupUser";
import Dashboard from "./screens/user/Dashboard";
import Profile from "./components/Profile";
import Team from "./screens/user/Team";
import Inventory from "./screens/user/Inventory";
import AddExpense from "./screens/user/AddExpense";
import CreateProduct from "./screens/admin/CreateProduct";
import Post from "./components/Post";
import EditExpense from "./screens/user/EditExpense";
import StatScreen from "./screens/admin/StatScreen";
import { ToastContainer} from "react-toastify";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="top-center" limit={2}/>
    <Routes>
      <Route path="/" element={<HomeScreen />}/>
      <Route path="/welcome" element={<WelcomeScreen />} />
      <Route path="/signup" element={<SignupUser />}/>
      <Route path="/edit-profile" element={<EditProfileScreen />}/>
      <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute> }/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/team" element={<Team />}/>
      <Route path="/create-product" element={<CreateProduct />}/>
      <Route path="/inventory" element={<Inventory />} /> 
      <Route path="/add-expense" element={<AddExpense />}/>
      <Route path="/post" element={<Post />}/>
      <Route path="/edit-expense" element={<EditExpense />}/>
      <Route path="/edit-product" element={<EditProduct />}/>
      <Route path="/statistics" element={<StatScreen />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
