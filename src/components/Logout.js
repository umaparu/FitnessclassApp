import { Link } from "react-router-dom";

function Logout() {

  const handleLogout = () => {
    localStorage.clear("login");
    window.location.reload()
  }

  return (
    <>
    <button onClick={handleLogout} className="logout">LogOut</button>
    </>
  );
}

export default Logout;