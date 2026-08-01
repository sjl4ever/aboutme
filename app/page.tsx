import type { Metadata } from "next";
import { sitePath } from "./site-path";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Alison's Personal Lab",
  description: "A small personal lab for research, ideas, and the songs that keep Alison moving.",
};

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Alison home">A<span>/</span>L</a>
        <div className="nav-links">
          <a href="#music">music archive</a>
        </div>
        <span className="nav-status"><span className="status-dot" aria-hidden="true" /> private collection</span>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> personal laboratory / 2026</p>
          <h1>Hi, I&apos;m <em>Alison.</em><br />Still becoming.</h1>
          <p className="hero-intro">研二在读 · Taylor Swift · TWICE</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#music">open the archive <span aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-label="A visual badge reading curious, in progress">
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-core"><span>curious</span><strong>✦</strong><span>in progress</span></div>
          <span className="orbit-label orbit-label-top">keep looking</span>
          <span className="orbit-label orbit-label-bottom">make it yours</span>
        </div>
        <div className="hero-index">scroll for music <span>↓</span></div>
      </section>

      <section className="marquee" aria-label="Personal motto">
        <div className="marquee-track"><span>soft power</span><i>✦</i><span>loud ideas</span><i>✦</i><span>small experiments</span><i>✦</i><span>soft power</span><i>✦</i></div>
      </section>

      <section className="music-gateway section-shell" id="music">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> music archive / personal collection</p>
          <p className="section-note">Just for me.</p>
        </div>
        <div className="gateway-grid">
          <a className="gateway-card gateway-taylor" href={sitePath("/music/taylor")}>
            <div className="gateway-art"><img src={sitePath("/albums/taylor/showgirl.jpg")} alt="The Life of a Showgirl album cover" /></div>
            <div className="gateway-copy"><span>01 / 12 eras</span><h2>Taylor<br /><em>Swift</em></h2><p>lyrics · eras · reinvention</p><strong>enter archive ↗</strong></div>
          </a>
          <a className="gateway-card gateway-twice" href={sitePath("/music/twice")}>
            <div className="gateway-art"><img src={sitePath("/albums/twice/ten.jpg")} alt="TEN: The Story Goes On album cover" /></div>
            <div className="gateway-copy"><span>02 / 12 chapters</span><h2>TWICE<br /><em>archive</em></h2><p>nine colors · one orbit</p><strong>enter archive ↗</strong></div>
          </a>
        </div>
      </section>

      <footer className="footer section-shell"><span>ALISON / PERSONAL LAB</span><span>TAYLOR SWIFT · TWICE</span><span>© 2026</span></footer>
    </main>
  );
}
