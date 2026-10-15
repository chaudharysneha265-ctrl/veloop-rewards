import { useState } from "react";
import styles from "./App.module.css";
import {
  FaGift,
  FaExchangeAlt,
  FaCoins,
  FaShieldAlt,
  FaWallet,
  FaBolt,
  FaArrowRight,
  FaCheckCircle,
  FaRandom,
  FaTrophy,
  FaTimes,
  FaShareAlt,
  FaUsers,
  FaLock,
} from "react-icons/fa";

const banners = [
  {
    id: "refer",
    title: "Refer Friends, Earn Rewards",
    headlineFirst: "Refer Friends,",
    headlineAccent: "Earn Rewards",
    category: "REFER & EARN",
    text: "Share your referral link and earn rewards when friends join VELoop Rewards.",
    button: "Invite Now",
    accent: "#25bde1",
    headlineColor: "linear-gradient(100deg, #20cae9, #843dff)",
    image: "/image.png",
    theme: "referBanner",
    icon: <FaGift />,
    features: [
      { icon: <FaBolt />, title: "Easy to Share", text: "Invite with a link." },
      { icon: <FaGift />, title: "Eligible Rewards", text: "For qualifying referrals." },
      { icon: <FaLock />, title: "Clear Tracking", text: "Follow invite activity." },
      { icon: <FaUsers />, title: "More Opportunities", text: "Grow your community." },
    ],
  },
  {
    id: "swap",
    title: "Swap Center",
    headlineFirst: "Swap",
    headlineAccent: "Center",
    category: "REWARD CONVERSION",
    text: "Convert eligible reward balances between supported currencies.",
    button: "Open Swap Center",
    accent: "#d7ad68",
    headlineColor: "linear-gradient(100deg, #e6c98c, #ffffff)",
    image: "/Futuristic Neon Swap Rewards Banner.png",
    theme: "swapBanner",
    icon: <FaExchangeAlt />,
  },
  {
    id: "bonus",
    title: "Boost Your VE Balance",
    headlineFirst: "Boost Your",
    headlineAccent: "VE Balance",
    category: "BONUS OPPORTUNITIES",
    text: "Complete eligible activities to earn bonus VEs and grow your reward balance.",
    button: "Explore Bonuses",
    accent: "#c99d59",
    headlineColor: "linear-gradient(100deg, #f0d6a1, #c99d59)",
    image: "/Bonus VEs_ Grow Faster, Earn More.png",
    theme: "bonusBanner",
    icon: <FaCoins />,
  },
  {
    id: "captcha",
    title: "Solve Captchas. Earn Gems.",
    headlineFirst: "Solve Captchas.",
    headlineAccent: "Earn Gems.",
    category: "CAPTCHA REWARDS",
    text: "Complete available CAPTCHA tasks accurately to earn eligible Gems.",
    button: "Start Task",
    accent: "#a783ed",
    headlineColor: "linear-gradient(100deg, #d9c5ff, #9763e7)",
    image: "/Captcha Tasks_ Verify, Complete, Earn.png",
    theme: "captchaBanner",
    icon: <FaShieldAlt />,
  },
  {
    id: "exchange",
    title: "Convert Gems to VEs",
    headlineFirst: "Convert Gems to",
    headlineAccent: "VEs",
    category: "REWARD EXCHANGE",
    text: "Redeem eligible Gems for VEs and add more value to your reward balance.",
    button: "Open Exchange Center",
    accent: "#d9b56b",
    headlineColor: "linear-gradient(100deg, #ffffff, #9763e7 52%, #e7c87f)",
    image: "/Neon Rewards Exchange Centre.png",
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
    if (banner.id === "refer") {
      const referralText =
        "Join me on VELoop Rewards and explore ways to earn rewards!";
      try {
        if (navigator.share) {
          await navigator.share({
            title: "VELoop Rewards",
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

    if (banner.id === "swap") {
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

    if (banner.id === "bonus") {
      setCompleted(true);
      showMessage("Bonus marked as claimed for this demo.");
      return;
    }

    if (banner.id === "captcha") {
      setCompleted(true);
      showMessage("Captcha task started in demo mode.");
      return;
    }

    if (banner.id === "exchange") {
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
      style={{
        "--accent": banner.accent,
        "--headline-accent": banner.headlineColor,
      }}
    >
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
        <div className={styles.bannerBrand}>
          <FaBolt aria-hidden="true" />
          <span>VELoop Rewards</span>
        </div>
      </div>

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
            <p className={styles.bannerLabel}>{banner.category}</p>
          </div>

          <h2 className={styles.bannerTitle}>
            <span>{banner.headlineFirst}</span>
            {" "}
            <span className={styles.bannerTitleAccent}>{banner.headlineAccent}</span>
          </h2>
          <p className={styles.bannerText}>{banner.text}</p>

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

                  {banner.id === "swap" && (
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

                  {banner.id === "exchange" && (
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

                  {banner.id === "bonus" && (
                    <p>
                      Explore eligible activities to receive additional VEs.
                    </p>
                  )}

                  {banner.id === "captcha" && (
                    <p>
                      Start an available captcha task and follow its
                      instructions carefully.
                    </p>
                  )}

                  {banner.id === "refer" && (
                    <p>
                      Invite friends to explore VELoop Rewards and eligible
                      earning opportunities.
                    </p>
                  )}

                  <button
                    type="button"
                    className={styles.claimBonusButton}
                    style={{ "--accent": banner.accent }}
                    onClick={handleAction}
                  >
                    {banner.id === "refer" && <FaShareAlt />}
                    {banner.id === "swap" && <FaRandom />}
                    {banner.id === "bonus" && <FaCoins />}
                    {banner.id === "captcha" && <FaShieldAlt />}
                    {banner.id === "exchange" && <FaExchangeAlt />}
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

      </div>
      {banner.features && (
        <div className={styles.bannerFeatureStrip}>
          {banner.features.map((feature) => (
            <div className={styles.bannerFeature} key={feature.title}>
              <span className={styles.bannerFeatureIcon} aria-hidden="true">
                {feature.icon}
              </span>
              <span className={styles.bannerFeatureCopy}>
                <strong>{feature.title}</strong>
                <span>{feature.text}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function App() {
  return (
    <main className={styles.rewardPage}>
      {banners.map((banner) => (
        <RewardBanner key={banner.id} banner={banner} />
      ))}
    </main>
  );
}