import {
  FaGift,
  FaExchangeAlt,
  FaCoins,
  FaShieldAlt,
  FaWallet,
} from "react-icons/fa";

function RewardBanner({ icon, title, text, button, accent }) {
  return (
    <div
      className="reward-banner"
      style={{
        minHeight: "420px",
        background: "linear-gradient(135deg, #202238, #161827)",
        color: "white",
        borderRadius: "24px",
        marginBottom: "24px",
        overflow: "hidden",
      }}
    >
      <div className="row h-100 align-items-center px-4 px-lg-5">
        <div className="col-lg-7">
          <div
            style={{
              fontSize: "55px",
              color: accent,
              marginBottom: "20px",
            }}
          >
            {icon}
          </div>

          <h1 className="banner-title mb-3"
          style={{color: "white"}}>
            {title}
            </h1>

          <p
            className="banner-text mb-4"
            style={{
              color: "#b8bbca",
              fontSize: "18px",
              maxWidth: "600px",
            }}
          >
            {text}
          </p>

          <button
          onClick={() => alert(`${button} feature coming soon!`)}
            className="reward-button"
            style={{
              background: accent,
              color: "#161827",
              borderRadius: "12px",
              border: "none",
            }}
          >
            {button} →
          </button>
        </div>

        <div className="col-lg-5 text-center mt-4 mt-lg-0">
          <div
            style={{
              fontSize: "130px",
              color: accent,
              opacity: 0.9,
            }}
          >
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        background: "#161827",
        minHeight: "100vh",
        padding: "30px 15px",
      }}
    >
      <RewardBanner
        icon={<FaGift />}
        title="Refer & Earn"
        text="Invite your friends and earn VEs when they join and complete eligible activities."
        button="Refer and Earn"
        accent="#f4c95d"
      />

      <RewardBanner
        icon={<FaExchangeAlt />}
        title="Swap Center"
        text="Swap your eligible VEs between supported options and manage your rewards easily."
        button="Swap"
        accent="#8ab4f8"
      />

      <RewardBanner
        icon={<FaCoins />}
        title="Get Extra VEs"
        text="Complete eligible activities and discover available opportunities to earn additional VEs."
        button="Explore Bonus"
        accent="#e7b85c"
      />

      <RewardBanner
        icon={<FaShieldAlt />}
        title="Captcha Tasks"
        text="Complete available captcha tasks accurately and earn rewards for eligible submissions."
        button="Start Task"
        accent="#9da7ff"
      />

      <RewardBanner
        icon={<FaWallet />}
        title="Exchange Center"
        text="Explore available redemption options and exchange eligible VEs for supported rewards."
        button="Open Exchange Center"
        accent="#d8c6ff"
      />
    </div>
  );
}

export default App;