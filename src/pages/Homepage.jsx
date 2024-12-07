import { showConnect, UserSession } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";
import stackslogo from "../assets/stacks.png";

function Homepage() {
  const userSession = new UserSession()
  const testnet = new StacksTestnet()

  function connectWallet() {
    showConnect({
      appDetails: {
        name: "Simple Stacks Wallet Connect",
        icon: stackslogo
      },
      onFinish: () => {
        window.location.reload()
        console.log(userSession.loadUserData().profile)
      }
    })
  }
  function disconnectWallet() {
    userSession.signUserOut("/");
  }

  return ( 
    <header className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-black text-[10rem]">Stacks Connect</h1>
      <a href="https://www.stacks.co/" target="_blank" rel="noreferrer">
        <img
          src={stackslogo}
          alt="Stacks"
          className="w-[10rem] h-[10rem] mt-[2rem] hover:scale-110 transition duration-700 ease-in-out delay-300 mb-[2rem]"
        />
      </a>

      {userSession.isUserSignedIn() ? 
        (
          <>
          <div className="flex flex-col items-center justify-center mt-[2rem] mb-[2rem]">
            <p className="text-[2rem]"><span className="text-[2rem] ">TESTNET: </span> {userSession.loadUserData().profile.stxAddress.testnet}</p>
            <p className="text-[2rem]"><span className="text-[2rem] ">MAINNET: </span>{userSession.loadUserData().profile.stxAddress.mainnet}</p>
          </div>
            
            <button
              className="px-[3rem] py-[1rem] bg-gray-300 text-[2rem] rounded-[50rem] hover:translate-y-[-1rem] transition duration-700 ease-in-out delay-300"
              onClick={disconnectWallet}>
                Disconnect Wallet
            </button>
          </>
        ) : (
          <button
            className="px-[3rem] py-[1rem] bg-gray-300 text-[2rem] rounded-[50rem] hover:translate-y-[-1rem] transition duration-700 ease-in-out delay-300 margin-top-[2rem]"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )
      }
    </header>
  );
}

export default Homepage;
