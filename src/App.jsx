import { useState } from "react";
import styles from "./App.module.css";
import {
  FaGift,
  FaExchangeAlt,
  FaCoins,
  FaShieldAlt,
  FaWallet,
  FaArrowRight,
  FaCheckCircle,
  FaRandom,
  FaTrophy,
  FaTimes,
  FaShareAlt,
} from "react-icons/fa";

const banners = [
  {
    title: "Refer & Earn",
    category: "MEMBER REFERRALS",
    text: "Invite friends and earn rewards on eligible referrals.",
    button: "Refer & Earn",
    accent: "#f4c95d",
    value: "Earn rewards when referral milestones complete",
    image: "/image.png",
    theme: "referBanner",
    icon: <FaGift />,
  },
  {
    title: "Swap Center",
    category: "REWARD CONVERSION",
    text: "Convert eligible VEs into supported currencies, vouchers, or rewards.",
    button: "Open Swap Center",
    accent: "#8ab4f8",
    value: "Convert VEs into supported rewards",
    image: "/Futuristic%20Neon%20Swap%20Rewards%20Banner.png",
    theme: "swapBanner",
    icon: <FaExchangeAlt />,
  },
  {
    title: "Get Extra VEs",
    category: "BONUS OPPORTUNITIES",
    text: "Complete eligible activities and promotions to earn extra VEs.",
    button: "Explore Bonus",
    accent: "#e7b85c",
    value: "Earn extra VEs from eligible activities",
    image: "/Bonus%20VEs_%20Grow%20Faster,%20Earn%20More.png",
    theme: "bonusBanner",
    icon: <FaCoins />,
  },
  {
    title: "Captcha Tasks",
    category: "VERIFIED TASKS",
    text: "Complete captcha tasks accurately to verify, finish tasks, and earn eligible rewards.",
    button: "Start Task",
    accent: "#4ccfe5",
    value: "Task → Verify → Reward",
    image: "/Captcha%20Tasks_%20Verify,%20Complete,%20Earn.png",
    theme: "captchaBanner",
    icon: <FaShieldAlt />,
  },
  {
    title: "Exchange Center",
    category: "REDEEM REWARDS",
    text: "Explore available redemption options and exchange eligible VEs for supported rewards.",
    button: "Open Exchange Center",
    accent: "#4dd5d0",
    value: "Redeem VEs for eligible rewards",
    image: "/Neon%20Rewards%20Exchange%20Centre.png",
    theme: "exchangeBanner",
    icon: <FaWallet />,
  },
];

function RewardBanner({ banner }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");
  const [completed, setCompleted] = useState(false);

  const showMessage = (text) => {
    setMessage(text);
  };

  const handleAction = async () => {
    if (banner.title === "Refer & Earn") {
      const referralText =
        "Join me on VELOOP Rewards and explore eligible earning opportunities!";
      try {
        if (navigator.share) {
          await navigator.share({
            title: "VELOOP Rewards",
            text: referralText,
          });
          showMessage("Referral shared successfully!");
        } else if (navigator.clipboard) {
          await navigator.clipboard.writeText(referralText);
          showMessage("Referral message copied!");
        } else {
          showMessage(referralText);
        }
      } catch {
        showMessage("You can invite friends using your referral message.");
      }
      return;
    }

    if (banner.title === "Swap Center") {
      if (!amount || Number(amount) <= 0) {
        showMessage("Please enter a valid amount of VEs.");
      } else {
        setCompleted(true);
        showMessage(
          `Swap request prepared for ${amount} VEs.`
        );
      }
      return;
    }

    if (banner.title === "Get Extra VEs") {
      setCompleted(true);
      showMessage("Bonus marked as claimed for this demo.");
      return;
    }

    if (banner.title === "Captcha Tasks") {
      setCompleted(true);
      showMessage("Captcha task started in demo mode.");
      return;
    }

    if (banner.title === "Exchange Center") {
      if (!selected) {
        showMessage("Please select a redemption option first.");
      } else {
        setCompleted(true);
        showMessage(`${selected} exchange request prepared.`);
      }
    }
  };

  return (
    <section
      className={`${styles.rewardBanner} ${styles[banner.theme]}`}
      style={{ "--accent": banner.accent }}
    >
      <div className={styles.bannerContent}>
        <div className={styles.bannerInfo}>
          <div className={styles.bannerEyebrow}>
            <span
              className={styles.bannerIcon}
              style={{ "--accent": banner.accent }}
              aria-hidden="true"
            >
              {banner.icon}
            </span>
            <p className={styles.bannerLabel}>
              VELOOP REWARDS <span aria-hidden="true">/</span> {banner.category}
            </p>
          </div>

          <h2 className={styles.bannerTitle}>{banner.title}</h2>
          <p className={styles.bannerText}>{banner.text}</p>

          <div className={styles.rewardHighlight}>
            <span>Reward value</span>
            <strong>{banner.value}</strong>
          </div>

          <button
            type="button"
            className={styles.rewardButton}
            style={{ "--accent": banner.accent }}
            onClick={() => {
              setOpen(!open);
              setMessage("");
            }}
            aria-expanded={open}
          >
            <span>{banner.button}</span>
            <FaArrowRight aria-hidden="true" />
          </button>

          {open && (
            <div
              className={styles.ctaMessage}
              style={{ "--accent": banner.accent }}
              role="status"
            >
              <div className={styles.ctaMessageContent}>
                <FaCheckCircle className={styles.ctaSuccessIcon} />

                <div>
                  <strong>{banner.title}</strong>

                  {banner.title === "Swap Center" && (
                    <div className={styles.swapPanel}>
                      <label htmlFor="swap-amount">
                        Amount of VEs
                      </label>
                      <input
                        id="swap-amount"
                        type="number"
                        min="1"
                        value={amount}
                        onChange={(event) => {
                          setAmount(event.target.value);
                          setCompleted(false);
                        }}
                        placeholder="Enter amount"
                      />
                      <p>From: VE Balance → To: Voucher / Reward</p>
                    </div>
                  )}

                  {banner.title === "Exchange Center" && (
                    <div className={styles.exchangePanel}>
                      <p>Select a redemption option:</p>
                      <div className={styles.exchangeOptions}>
                        {["Rewards", "Gift Card", "UPI"].map((option) => (
                          <button
                            type="button"
                            key={option}
                            className={`${styles.exchangeOption} ${
                              selected === option ? styles.selected : ""
                            }`}
                            aria-pressed={selected === option}
                            onClick={() => {
                              setSelected(option);
                              setCompleted(false);
                            }}
                          >
                            {option === "Rewards" && <FaTrophy />}
                            {option === "Gift Card" && <FaGift />}
                            {option === "UPI" && <FaWallet />}
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {banner.title === "Get Extra VEs" && (
                    <p>
                      Explore eligible activities to receive additional VEs.
                    </p>
                  )}

                  {banner.title === "Captcha Tasks" && (
                    <p>
                      Start an available captcha task and follow its
                      instructions carefully.
                    </p>
                  )}

                  {banner.title === "Refer & Earn" && (
                    <p>
                      Invite friends to explore VELOOP Rewards and eligible
                      earning opportunities.
                    </p>
                  )}

                  <button
                    type="button"
                    className={styles.claimBonusButton}
                    style={{ "--accent": banner.accent }}
                    onClick={handleAction}
                  >
                    {banner.title === "Refer & Earn" && <FaShareAlt />}
                    {banner.title === "Swap Center" && <FaRandom />}
                    {banner.title === "Get Extra VEs" && <FaCoins />}
                    {banner.title === "Captcha Tasks" && <FaShieldAlt />}
                    {banner.title === "Exchange Center" && <FaExchangeAlt />}
                    {completed ? "Completed" : "Continue"}
                  </button>

                  {message && <p>{message}</p>}
                </div>

                <button
                  type="button"
                  className={styles.ctaClose}
                  onClick={() => setOpen(false)}
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
            style={{ "--accent": banner.accent }}
            aria-hidden="true"
          />

          <div className={styles.visualCard}>
            <div className={styles.visualMain}>
              <img
                className={styles.bannerArtwork}
                src={banner.image}
                alt={`${banner.title} illustration`}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className={styles.rewardPage}>
      {banners.map((banner) => (
        <RewardBanner key={banner.title} banner={banner} />
      ))}
    </main>
  );
}