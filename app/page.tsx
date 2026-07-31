import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alison's Personal Lab",
  description:
    "A small personal lab for research, ideas, and the songs that keep Alison moving.",
};

const experiments = [
  {
    number: "01",
    title: "Research field notes",
    description:
      "把复杂的问题拆成可以理解、可以分享、也可以继续追问的小块。",
    tag: "in progress",
  },
  {
    number: "02",
    title: "Pop culture archive",
    description:
      "记录 Taylor Swift 与 TWICE 带来的情绪、灵感和那些突然被点亮的时刻。",
    tag: "collecting",
  },
  {
    number: "03",
    title: "Tiny life systems",
    description:
      "为学习、生活和下一次出发做一些轻盈的小型实验。",
    tag: "testing",
  },
];

const signals = [
  ["01", "currently", "研二在读，持续研究中"],
  ["02", "on repeat", "Taylor Swift / TWICE"],
  ["03", "collecting", "漂亮的句子、灵感和夜晚"],
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Alison home">
          A<span>/</span>L
        </a>
        <div className="nav-links">
          <a href="#about">about</a>
          <a href="#experiments">experiments</a>
          <a href="#signals">signals</a>
        </div>
        <a className="nav-status" href="#contact">
          <span className="status-dot" aria-hidden="true" /> available for a hello
        </a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> personal laboratory / 2026</p>
          <h1>
            Hi, I&apos;m <em>Alison.</em>
            <br />
            Still becoming.
          </h1>
          <p className="hero-intro">
            研二在读。喜欢把问题想深一点，也喜欢把生活过得闪亮一点。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experiments">
              enter the lab <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#about">a little about me</a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="A visual badge reading curious, in progress">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-core">
            <span>curious</span>
            <strong>✦</strong>
            <span>in progress</span>
          </div>
          <span className="orbit-label orbit-label-top">keep looking</span>
          <span className="orbit-label orbit-label-bottom">make it yours</span>
        </div>
        <div className="hero-index">scroll to explore <span>↓</span></div>
      </section>

      <section className="marquee" aria-label="Personal motto">
        <div className="marquee-track">
          <span>soft power</span><i>✦</i><span>loud ideas</span><i>✦</i><span>small experiments</span><i>✦</i><span>soft power</span><i>✦</i>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> the person behind the tabs</p>
          <p className="section-note">A work in progress, with good playlists.</p>
        </div>
        <div className="about-grid">
          <h2>
            Somewhere between
            <span>the question</span>
            and the next song.
          </h2>
          <div className="about-copy">
            <p>
              我是 Alison，一名正在读研二的学生。这里不是一份冷冰冰的履历，而是一个会持续更新的小空间：放研究，放灵感，放那些让我想继续往前走的东西。
            </p>
            <p className="muted-copy">
              If you found your way here, stay for a while. There is probably a thought, a tab, or a song waiting for you.
            </p>
            <a className="text-link" href="#contact">leave a signal <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="experiments section-shell" id="experiments">
        <div className="section-heading">
          <p className="eyebrow"><span>03</span> open tabs / active experiments</p>
          <p className="section-note">No final answers yet. That&apos;s the point.</p>
        </div>
        <div className="experiment-list">
          {experiments.map((experiment) => (
            <article className="experiment-card" key={experiment.number}>
              <div className="experiment-topline">
                <span>{experiment.number}</span>
                <span className="experiment-tag">{experiment.tag}</span>
              </div>
              <h3>{experiment.title}</h3>
              <p>{experiment.description}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="signals section-shell" id="signals">
        <div className="section-heading">
          <p className="eyebrow"><span>04</span> signal board</p>
          <p className="section-note">A snapshot of the current season.</p>
        </div>
        <div className="signals-grid">
          {signals.map(([number, label, value]) => (
            <div className="signal-row" key={number}>
              <span className="signal-number">{number}</span>
              <span className="signal-label">{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="playlist-card">
          <div>
            <p className="eyebrow"><span>now playing</span></p>
            <h2>main character energy</h2>
          </div>
          <div className="sound-bars" aria-hidden="true">
            <i /><i /><i /><i /><i /><i /><i /><i />
          </div>
          <p className="playlist-meta">Taylor Swift / TWICE / repeat</p>
        </div>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-inner">
          <p className="eyebrow"><span>05</span> end of current session</p>
          <h2>Have a thought<br /><em>worth sharing?</em></h2>
          <p>Send a signal. The lab door is usually open.</p>
          <a className="button button-light" href="#top">back to the beginning <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-star" aria-hidden="true">✦</div>
      </section>

      <footer className="footer section-shell">
        <span>ALISON / PERSONAL LAB</span>
        <span>made with curiosity + good music</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
