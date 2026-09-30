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
  const [bonusClaimed, setBonusClaimed] = useState(false);
  const [captchaStarted, setCaptchaStarted] = useState(false);
  const [swapAmount, setSwapAmount] = useState("");
  const [swapDone, setSwapDone] = useState(false);
  const [exchangeDone, setExchangeDone] = useState(false);

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

                <div className="cta-main-content">

                  <strong>{title}</strong>

                  {/* =========================
                      BONUS VEs
                  ========================= */}

                  {title === "Get Extra VEs" && (
                    <>
                      <p>
                        Complete eligible activities to unlock your bonus
                        reward.
                      </p>

                      <div className="bonus-progress">
                        <div className="bonus-progress-top">
                          <span>Bonus progress</span>
                          <span>
                            {bonusClaimed ? "100%" : "70%"}
                          </span>
                        </div>

                        <div className="progress-track">
                          <div
                            className={`progress-fill ${
                              bonusClaimed ? "completed" : ""
                            }`}
                          />
                        </div>
                      </div>

                      <button
                        className="claim-bonus-button"
                        style={{ "--accent": accent }}
                        onClick={() => setBonusClaimed(true)}
                        disabled={bonusClaimed}
                      >
                        {bonusClaimed ? (
                          <>
                            <FaCheckCircle />
                            Bonus Claimed
                          </>
                        ) : (
                          <>
                            <FaCoins />
                            Claim Bonus
                          </>
                        )}
                      </button>
                    </>
                  )}

                  {/* =========================
                      CAPTCHA TASKS
                  ========================= */}

                  {title === "Captcha Tasks" && (
                    <>
                      <p>
                        Complete the verification task to unlock the next
                        reward step.
                      </p>

                      <div className="captcha-task-box">

                        <div className="captcha-task-header">
                          <span>Verification Task</span>
                          <span>Task 1 of 1</span>
                        </div>

                        <div className="captcha-check">
                          <FaShieldAlt />

                          <span>
                            {captchaStarted
                              ? "Verification task started"
                              : "Ready to start verification"}
                          </span>
                        </div>

                        <button
                          className="claim-bonus-button"
                          style={{ "--accent": accent }}
                          onClick={() => setCaptchaStarted(true)}
                          disabled={captchaStarted}
                        >
                          {captchaStarted ? (
                            <>
                              <FaCheckCircle />
                              Task Started
                            </>
                          ) : (
                            <>
                              <FaShieldAlt />
                              Start Verification
                            </>
                          )}
                        </button>

                      </div>
                    </>
                  )}

                  {/* =========================
                      SWAP CENTER
                  ========================= */}

                  {title === "Swap Center" && (
                    <>
                      <p>
                        Enter the amount you want to swap between supported
                        reward options.
                      </p>

                      <div className="swap-panel">

                        <div className="swap-field">
                          <label htmlFor="swap-amount">
                            Amount
                          </label>

                          <input
                            id="swap-amount"
                            type="number"
                            min="1"
                            placeholder="Enter VEs"
                            value={swapAmount}
                            onChange={(e) => {
                              setSwapAmount(e.target.value);
                              setSwapDone(false);
                            }}
                          />
                        </div>

                        <div className="swap-options">

                          <div className="swap-option">
                            <span>From</span>
                            <strong>VEs</strong>
                          </div>

                          <FaExchangeAlt />

                          <div className="swap-option">
                            <span>To</span>
                            <strong>Rewards</strong>
                          </div>

                        </div>

                        <button
                          className="claim-bonus-button"
                          style={{ "--accent": accent }}
                          onClick={() => setSwapDone(true)}
                          disabled={!swapAmount || swapDone}
                        >
                          {swapDone ? (
                            <>
                              <FaCheckCircle />
                              Swap Ready
                            </>
                          ) : (
                            <>
                              <FaRandom />
                              Swap Now
                            </>
                          )}
                        </button>

                        {swapDone && (
                          <p className="swap-success">
                            <FaCheckCircle />
                            Swap request is ready for the next conversion
                            step.
                          </p>
                        )}

                      </div>
                    </>
                  )}

                  {/* =========================
                      EXCHANGE CENTER
                  ========================= */}

                  {title === "Exchange Center" && (
                    <>
                      <p>
                        Choose a reward option and continue to the next
                        redemption step.
                      </p>

                      <div className="exchange-panel">

                        <div className="exchange-options">

                          <button
                            className={`exchange-option ${
                              exchangeDone ? "selected" : ""
                            }`}
                            style={{ "--accent": accent }}
                            onClick={() => setExchangeDone(true)}
                          >
                            <FaWallet />
                            <span>Wallet Reward</span>
                          </button>

                          <button
                            className={`exchange-option ${
                              exchangeDone ? "selected" : ""
                            }`}
                            style={{ "--accent": accent }}
                            onClick={() => setExchangeDone(true)}
                          >
                            <FaCoins />
                            <span>VE Coins</span>
                          </button>

                        </div>

                        <button
                          className="claim-bonus-button"
                          style={{ "--accent": accent }}
                          onClick={() => setExchangeDone(true)}
                          disabled={exchangeDone}
                        >
                          {exchangeDone ? (
                            <>
                              <FaCheckCircle />
                              Redemption Ready
                            </>
                          ) : (
                            <>
                              <FaWallet />
                              Continue Redemption
                            </>
                          )}
                        </button>

                        {exchangeDone && (
                          <p className="exchange-success">
                            <FaCheckCircle />
                            Exchange option selected. Ready for the next
                            redemption step.
                          </p>
                        )}

                      </div>
                    </>
                  )}

                  {/* =========================
                      REFER & EARN
                  ========================= */}

                  {title === "Refer & Earn" && (
                    <p>
                      Referral interaction is ready for the next sharing
                      step.
                    </p>
                  )}

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

        {/* =========================
            VISUAL AREA
        ========================= */}

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

      {/* REFER & EARN */}

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

      {/* SWAP CENTER */}

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

      {/* GET EXTRA VEs */}

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

      {/* CAPTCHA TASKS */}

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

      {/* EXCHANGE CENTER */}

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