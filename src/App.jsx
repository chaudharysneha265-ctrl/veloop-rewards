import { useState } from "react";
import {
  FaGift,
  FaExchangeAlt,
  FaCoins,
  FaShieldAlt,
  FaWallet,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaRandom,
  FaTrophy,
  FaTimes,
} from "react-icons/fa";

function RewardBanner({
  icon,
  title,
  text,
  button,
  accent,
  visual,
  visualLabel,
  theme = "default",
}) {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <section className={`reward-banner ${theme}`} tabIndex="0">
      <div className="banner-content">

        <div className="banner-info">
          <div
            className="banner-icon"
            style={{ color: accent }}
            aria-hidden="true"
          >
            {icon}
          </div>

          <p className="banner-label">VELOOP REWARDS</p>

          <h1 className="banner-title">{title}</h1>

          <p className="banner-text">{text}</p>

          <button
            className="reward-button"
            style={{ "--accent": accent }}
            onClick={handleClick}
            aria-label={button}
          >
            <span>{button}</span>
            <FaArrowRight aria-hidden="true" />
          </button>

          {showMessage && (
            <div
              className="cta-message"
              style={{ "--accent": accent }}
              role="status"
            >
              <div className="cta-message-content">

                <FaCheckCircle className="cta-success-icon" />

                <div>
                  <strong>{title}</strong>

                  <p>
                    {title === "Swap Center"
                      ? "Swap Center interaction is ready for the next conversion step."
                      : title === "Exchange Center"
                      ? "Exchange Center interaction is ready for the next redemption step."
                      : "This section is ready for the next interaction step."}
                  </p>
                </div>

                <button
                  className="cta-close"
                  onClick={() => setShowMessage(false)}
                  aria-label="Close message"
                >
                  <FaTimes />
                </button>

              </div>
            </div>
          )}
        </div>

        <div className="banner-visual-area">

          <div
            className="visual-glow"
            style={{ "--accent": accent }}
            aria-hidden="true"
          />

          <div className="visual-card">

            <div
              className="visual-main"
              style={{ color: accent }}
              aria-hidden="true"
            >
              {visual}
            </div>

            <div className="visual-badge">
              <FaCheckCircle />
              <span>{visualLabel}</span>
            </div>

          </div>

          <div
            className="floating-dot dot-one"
            style={{ background: accent }}
            aria-hidden="true"
          />

          <div
            className="floating-dot dot-two"
            style={{ background: accent }}
            aria-hidden="true"
          />

        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="reward-page">

      {/* =========================
          REFER & EARN
      ========================= */}

      <RewardBanner
        icon={<FaGift />}
        title="Refer & Earn"
        text="Invite your friends to VELOOP Rewards and unlock rewards when they complete eligible activities."
        button="Refer & Earn"
        accent="#f4c95d"
        visual={
          <div className="visual-composition">
            <FaGift className="main-visual-icon" />
            <FaUsers className="secondary-visual-icon" />
          </div>
        }
        visualLabel="Share & earn"
        theme="refer-banner"
      />

      {/* =========================
          SWAP CENTER
      ========================= */}

      <RewardBanner
        icon={<FaExchangeAlt />}
        title="Swap Center"
        text="Convert eligible reward balances between supported options and manage your rewards efficiently."
        button="Open Swap Center"
        accent="#8ab4f8"
        visual={
          <div className="visual-composition swap-visual">

            <FaRandom className="main-visual-icon" />

            <FaCoins className="secondary-visual-icon" />

          </div>
        }
        visualLabel="Convert rewards"
        theme="swap-banner"
      />

      {/* =========================
          BONUS VEs
      ========================= */}

      <RewardBanner
        icon={<FaCoins />}
        title="Get Extra VEs"
        text="Complete eligible activities and explore available opportunities to earn additional VEs."
        button="Explore Bonus"
        accent="#e7b85c"
        visual={
          <div className="visual-composition">

            <FaCoins className="main-visual-icon" />

            <FaTrophy className="secondary-visual-icon" />

          </div>
        }
        visualLabel="Bonus opportunities"
        theme="bonus-banner"
      />

      {/* =========================
          CAPTCHA TASKS
      ========================= */}

      <RewardBanner
        icon={<FaShieldAlt />}
        title="Captcha Tasks"
        text="Complete available captcha tasks accurately and earn rewards for eligible submissions."
        button="Start Task"
        accent="#9da7ff"
        visual={
          <div className="visual-composition captcha-visual">

            <FaShieldAlt className="main-visual-icon" />

            <FaCheckCircle className="secondary-visual-icon" />

          </div>
        }
        visualLabel="Verify & complete"
        theme="captcha-banner"
      />

      {/* =========================
          EXCHANGE CENTER
      ========================= */}

      <RewardBanner
        icon={<FaWallet />}
        title="Exchange Center"
        text="Explore available redemption options and exchange eligible VEs for supported rewards."
        button="Open Exchange Center"
        accent="#d8c6ff"
        visual={
          <div className="visual-composition exchange-visual">

            <FaWallet className="main-visual-icon" />

            <FaCoins className="secondary-visual-icon" />

          </div>
        }
        visualLabel="Redeem rewards"
        theme="exchange-banner"
      />

    </main>
  );
}

export default App;