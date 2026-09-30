import { useState } from "react";
import styles from "./App.module.css";

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
  FaShareAlt,
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
  const [selectedExchange, setSelectedExchange] = useState("");
  const [exchangeDone, setExchangeDone] = useState(false);
  const [referralDone, setReferralDone] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  const handleReferral = async () => {
    const referralText =
      "Join me on VELOOP Rewards and explore eligible earning opportunities!";

    try {
      if (navigator.share) {
        await navigator.share({
          title: "VELOOP Rewards",
          text: referralText,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(referralText);
      }

      setReferralDone(true);
      setShowMessage(true);
    } catch {
      setShowMessage(true);
    }
  };

  const handleSwap = () => {
    if (!swapAmount || Number(swapAmount) <= 0) return;
    setSwapDone(true);
  };

  const handleCaptcha = () => {
    setCaptchaStarted(true);
    setShowMessage(true);
  };

  const handleExchange = () => {
    if (!selectedExchange) return;
    setExchangeDone(true);
  };

  return (
    <section
      className={`${styles.rewardBanner} ${styles[theme]}`}
      tabIndex="0"
    >
      <div className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          <div
            className={styles.bannerIcon}
            style={{ color: accent }}
            aria-hidden="true"
          >
            {icon}
          </div>

          <p className={styles.bannerLabel}>VELOOP REWARDS</p>

          <h1 className={styles.bannerTitle}>{title}</h1>

          <p className={styles.bannerText}>{text}</p>

          <button
            className={styles.rewardButton}
            style={{ "--accent": accent }}
            onClick={handleClick}
            aria-label={button}
          >
            <span>{button}</span>
            <FaArrowRight aria-hidden="true" />
          </button>

          {showMessage && (
            <div
              className={styles.ctaMessage}
              style={{ "--accent": accent }}
              role="status"
            >
              <div className={styles.ctaMessageContent}>
                <FaCheckCircle className={styles.ctaSuccessIcon} />

                <div>
                  <strong>{title}</strong>

                  {title === "Refer & Earn" && (
                    <>
                      <p>
                        Share VELOOP Rewards with your friends and invite them
                        to explore eligible earning opportunities.
                      </p>

                      <button
                        className={styles.claimBonusButton}
                        style={{ "--accent": accent }}
                        onClick={handleReferral}
                      >
                        {referralDone ? (
                          <>
                            <FaCheckCircle /> Referral Ready
                          </>
                        ) : (
                          <>
                            <FaShareAlt /> Share Referral
                          </>
                        )}
                      </button>
                    </>
                  )}

                  {title === "Swap Center" && (
                    <>
                      <p>
                        Enter the amount of VEs you want to convert between
                        supported reward options.
                      </p>

                      <div className={styles.swapPanel}>
                        <div className={styles.swapField}>
                          <label htmlFor="swapAmount">Amount of VEs</label>

                          <input
                            id="swapAmount"
                            type="number"
                            min="1"
                            value={swapAmount}
                            onChange={(e) => setSwapAmount(e.target.value)}
                            placeholder="Enter amount"
                          />
                        </div>

                        <div className={styles.swapOptions}>
                          <div className={styles.swapOption}>
                            <span>From</span>
                            <strong>VE Balance</strong>
                          </div>

                          <FaExchangeAlt />

                          <div className={styles.swapOption}>
                            <span>To</span>
                            <strong>Supported Reward</strong>
                          </div>
                        </div>

                        <button
                          className={styles.claimBonusButton}
                          style={{ "--accent": accent }}
                          onClick={handleSwap}
                        >
                          <FaRandom />
                          {swapDone ? "Swap Completed" : "Swap Now"}
                        </button>

                        {swapDone && (
                          <p className={styles.swapSuccess}>
                            <FaCheckCircle />
                            Swap request completed successfully.
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  {title === "Get Extra VEs" && (
                    <>
                      <p>
                        Complete eligible activities to unlock your bonus
                        reward.
                      </p>

                      <div className={styles.bonusProgress}>
                        <div className={styles.bonusProgressTop}>
                          <span>Bonus progress</span>
                          <span>{bonusClaimed ? "100%" : "70%"}</span>
                        </div>

                        <div className={styles.progressTrack}>
                          <div
                            className={`${styles.progressFill} ${
                              bonusClaimed ? styles.completed : ""
                            }`}
                          />
                        </div>
                      </div>

                      <button
                        className={styles.claimBonusButton}
                        style={{ "--accent": accent }}
                        onClick={() => setBonusClaimed(true)}
                        disabled={bonusClaimed}
                      >
                        {bonusClaimed ? (
                          <>
                            <FaCheckCircle /> Bonus Claimed
                          </>
                        ) : (
                          <>
                            <FaCoins /> Claim Bonus
                          </>
                        )}
                      </button>
                    </>
                  )}

                  {title === "Captcha Tasks" && (
                    <>
                      <p>
                        Complete available captcha tasks accurately and earn
                        rewards for eligible submissions.
                      </p>

                      <button
                        className={styles.claimBonusButton}
                        style={{ "--accent": accent }}
                        onClick={handleCaptcha}
                        disabled={captchaStarted}
                      >
                        {captchaStarted ? (
                          <>
                            <FaCheckCircle /> Task Started
                          </>
                        ) : (
                          <>
                            <FaShieldAlt /> Start Captcha Task
                          </>
                        )}
                      </button>
                    </>
                  )}

                  {title === "Exchange Center" && (
                    <>
                      <p>
                        Select an available redemption option for your
                        eligible VEs.
                      </p>

                      <div className={styles.exchangePanel}>
                        <div className={styles.exchangeOptions}>
                          <button
                            className={`${styles.exchangeOption} ${
                              selectedExchange === "Rewards"
                                ? styles.selected
                                : ""
                            }`}
                            onClick={() => setSelectedExchange("Rewards")}
                          >
                            <FaGift />
                            Rewards
                          </button>

                          <button
                            className={`${styles.exchangeOption} ${
                              selectedExchange === "Wallet"
                                ? styles.selected
                                : ""
                            }`}
                            onClick={() => setSelectedExchange("Wallet")}
                          >
                            <FaWallet />
                            Wallet
                          </button>
                        </div>

                        <button
                          className={styles.claimBonusButton}
                          style={{ "--accent": accent }}
                          onClick={handleExchange}
                        >
                          <FaExchangeAlt />
                          {exchangeDone
                            ? "Exchange Requested"
                            : "Continue Exchange"}
                        </button>

                        {exchangeDone && (
                          <p className={styles.exchangeSuccess}>
                            <FaCheckCircle />
                            Exchange request is ready for the next step.
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <button
                  className={styles.ctaClose}
                  onClick={() => setShowMessage(false)}
                  aria-label="Close message"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.bannerVisualArea}>
          <div
            className={styles.visualGlow}
            style={{ "--accent": accent }}
            aria-hidden="true"
          />

          <div className={styles.visualCard}>
            <div
              className={styles.visualMain}
              style={{ color: accent }}
              aria-hidden="true"
            >
              {visual}
            </div>

            <div className={styles.visualBadge}>
              <FaCheckCircle />
              <span>{visualLabel}</span>
            </div>
          </div>

          <div
            className={`${styles.floatingDot} ${styles.dotOne}`}
            style={{ background: accent }}
            aria-hidden="true"
          />

          <div
            className={`${styles.floatingDot} ${styles.dotTwo}`}
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
    <main className={styles.rewardPage}>
      <RewardBanner
        icon={<FaGift />}
        title="Refer & Earn"
        text="Invite your friends to VELOOP Rewards and unlock rewards when they complete eligible activities."
        button="Refer & Earn"
        accent="#f4c95d"
        visual={
          <div className={styles.visualComposition}>
            <FaGift className={styles.mainVisualIcon} />
            <FaUsers className={styles.secondaryVisualIcon} />
          </div>
        }
        visualLabel="Share & earn"
        theme="referBanner"
      />

      <RewardBanner
        icon={<FaExchangeAlt />}
        title="Swap Center"
        text="Convert eligible reward balances between supported options and manage your rewards efficiently."
        button="Open Swap Center"
        accent="#8ab4f8"
        visual={
          <div className={styles.visualComposition}>
            <FaRandom className={styles.mainVisualIcon} />
            <FaCoins className={styles.secondaryVisualIcon} />
          </div>
        }
        visualLabel="Convert rewards"
        theme="swapBanner"
      />

      <RewardBanner
        icon={<FaCoins />}
        title="Get Extra VEs"
        text="Complete eligible activities and explore available opportunities to earn additional VEs."
        button="Explore Bonus"
        accent="#e7b85c"
        visual={
          <div className={styles.visualComposition}>
            <FaCoins className={styles.mainVisualIcon} />
            <FaTrophy className={styles.secondaryVisualIcon} />
          </div>
        }
        visualLabel="Bonus opportunities"
        theme="bonusBanner"
      />

      <RewardBanner
        icon={<FaShieldAlt />}
        title="Captcha Tasks"
        text="Complete available captcha tasks accurately and earn rewards for eligible submissions."
        button="Start Task"
        accent="#9da7ff"
        visual={
          <div className={styles.visualComposition}>
            <FaShieldAlt className={styles.mainVisualIcon} />
            <FaCheckCircle className={styles.secondaryVisualIcon} />
          </div>
        }
        visualLabel="Verify & complete"
        theme="captchaBanner"
      />

      <RewardBanner
        icon={<FaWallet />}
        title="Exchange Center"
        text="Explore available redemption options and exchange eligible VEs for supported rewards."
        button="Open Exchange Center"
        accent="#d8c6ff"
        visual={
          <div className={styles.visualComposition}>
            <FaWallet className={styles.mainVisualIcon} />
            <FaCoins className={styles.secondaryVisualIcon} />
          </div>
        }
        visualLabel="Redeem rewards"
        theme="exchangeBanner"
      />
    </main>
  );
}

export default App;