import type { Metadata } from "next";
import Link from "next/link";
import { twiceMembers } from "../../data";

export const metadata: Metadata = {
  title: "TWICE Members / Alison's Personal Lab",
  description: "Alison's visual archive of the nine TWICE members.",
};

export default function TwiceMembers() {
  return (
    <main className="archive-page archive-twice members-page">
      <nav className="archive-nav section-shell" aria-label="TWICE member navigation">
        <Link className="wordmark" href="/" aria-label="Back to Alison's home">A<span>/</span>L</Link>
        <div className="archive-nav-links"><Link href="/music/taylor">Taylor Swift</Link><Link href="/music/twice">TWICE</Link></div>
        <Link className="archive-back" href="/music/twice">← album archive</Link>
      </nav>

      <header className="members-hero section-shell">
        <p className="exhibit-label">03 / nine voices, one orbit</p>
        <h1>The people inside<br /><em>the picture.</em></h1>
        <p>从舞台中心到安静的镜头边缘，九个人共同组成 TWICE 不同章节里的光。</p>
        <a href="https://twice.jype.com/Default/Profile" target="_blank" rel="noreferrer">official JYP profiles ↗</a>
      </header>

      <section className="archive-members section-shell" aria-label="TWICE members">
        <div className="archive-member-grid">
          {twiceMembers.map((member) => (
            <article className="archive-member-card" key={member.name}>
              <div className="archive-member-photo">
                <img loading="lazy" decoding="async" src={member.photo} alt={`${member.name} official TWICE profile`} />
              </div>
              <div className="archive-member-copy">
                <div><h2>{member.name}</h2><span>{member.hangul}</span></div>
                <p>{member.keyword} / {member.birthday}</p>
                <small>{member.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="archive-footer section-shell"><span>ALISON / TWICE MEMBERS</span><Link href="/music/twice">back to archive ↑</Link><span>© 2026</span></footer>
    </main>
  );
}
