import { AppConfig, UserSession } from "@stacks/auth";
import { showConnect } from "@stacks/connect";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function Homepage() {
  const navigate = useNavigate("");
  const { setUserProfile, setSenderKey } = UserContext();
  const appConfig = new AppConfig(["store_write", "publish_data"]);
  const userSession = new UserSession({ appConfig });

  function connectWallet() {
    showConnect({
      appDetails: {
        name: "New",
        icon: "New",
      },

      onFinish: function () {
        const userData = userSession.loadUserData();
        setUserProfile(userData);
        setSenderKey(userData.appPrivateKey);
        sessionStorage.setItem("address", JSON.stringify(userData));

        console.log(userSession);

        navigate("/invoice");
      },

      userSession,
    });
  }

  return (
    <header className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-white text-[10rem]"></h1>

      <button
        className="px-[3rem] py-[1rem] bg-gray-300 text-[2rem] rounded-[50rem] hover:translate-y-[-1rem] transition duration-700 ease-in-out delay-300"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
    </header>
  );
}

export default Homepage;
