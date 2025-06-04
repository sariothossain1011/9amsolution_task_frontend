
import { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { isLoggedIn, removeUserInfo } from "../../services/authService";
import { Navigate, useNavigate } from "react-router-dom";
import { instance } from "../helpers/axios/axiosInstance";
import { ErrorToast } from "../helpers/FormHelper";

const UserDashboard = () => {
  const navigate = useNavigate();
  const auth = isLoggedIn();

  const [info, setInfo] = useState({});
  const [shopName, setShopName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBalance() {
      try {
        setLoading(true)
        const res = await instance.get("/user-info");
       setLoading(false)
        if (res?.error?.statusCode == 500) {
          ErrorToast(res?.error?.message)
        }
        
        setInfo(res?.data?.data);
      } catch (error) {
        ErrorToast("Error: ", error.toString());
      }
    }
    fetchBalance();
  }, []);
  const shopNames = info?.shops?.map((shop) => shop);


  const handleLogout = () => {
    removeUserInfo("token")
    navigate("/sign-in");
  };

  const handleShopClick = (shop) => {
    window.location.href = `http://${shop}.localhost:5173`;
  };


  useEffect(() => {
    const hostParts = window.location.hostname.split(".");
    const subdomain = hostParts[0];
    setShopName(subdomain);
  }, []);

  return auth ? (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-4 bg-slate-300 py-4 px-6">
        <h1 className="text-2xl font-bold">9AM Solution</h1>
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 bg-white rounded-full shadow hover:shadow-md transition"
          >
            <FiUser size={24} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg z-50">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold mb-2">Your Shops</h2>
                <ul className="text-md text-black font-semibold space-y-1">
                  {shopNames.map((shop, index) => (
                    <li key={index} className="pl-2 cursor-pointer" onClick={() => handleShopClick(shop)}>{index + 1 + " "}{shop}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    setShowConfirmLogout(true);
                  }}
                  className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Placeholder for dashboard content */}
      <div className="mt-10 text-center text-gray-600 ">
        Welcome to your dashboard.
        {shopName != "localhost" ? <p>This is {shopName} Shop</p> : " "}
        <p>{info?.email}</p>

      </div>


      {/* Logout Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center justify-items-center z-50">
          <div className="bg-white rounded-xl p-6 w-80 h-40 shadow-lg text-center">
            <h3 className="text-lg font-bold mb-4">Are you sure you want to logout?</h3>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowConfirmLogout(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (<Navigate to="/sign-in" />);
};

export default UserDashboard;
