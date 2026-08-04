import type { CSSProperties } from "react";
import Link from "next/link";
import { sitePath } from "../site-path";
import type { Album } from "./data";

type ArchivePageProps = {
  artist: string;
  label: string;
  headline: string;
  intro: string;
  officialHref: string;
  officialLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  albums: Album[];
  variant: "taylor" | "twice";
};

function eraKey(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ArchivePage({
  artist,
  label,
  headline,
  intro,
  officialHref,
  officialLabel,
  secondaryHref,
  secondaryLabel,
  albums,
  variant,
}: ArchivePageProps) {
  const heroAlbum = albums.at(-1)!;

  return (
    <main className={`archive-page archive-${variant}`}>
      <nav className="archive-nav section-shell" aria-label={`${artist} archive navigation`}>
        <Link className="wordmark" href={sitePath("/")} aria-label="Back to Alison's home">A<span>/</span>L</Link>
        <div className="archive-nav-links">
          <Link href={sitePath("/music/taylor")}>Taylor Swift</Link>
          <Link href={sitePath("/music/twice")}>TWICE</Link>
        </div>
        <Link className="archive-back" href={sitePath("/")}>← personal lab</Link>
      </nav>

      <header className="exhibit-hero section-shell">
        <div className="exhibit-hero-copy">
          <p className="exhibit-label">{label}</p>
          <h1>{headline}</h1>
          <div className="exhibit-intro">
            <p>{intro}</p>
            <div className="exhibit-links">
              <a href={officialHref} target="_blank" rel="noreferrer">{officialLabel} ↗</a>
              {secondaryHref && secondaryLabel ? <Link href={sitePath(secondaryHref)}>{secondaryLabel} ↗</Link> : null}
            </div>
          </div>
        </div>
        <figure className="exhibit-hero-art">
          <img src={sitePath(heroAlbum.cover)} alt={`${heroAlbum.title} album cover`} />
          <figcaption><span>{heroAlbum.year} / current chapter</span><strong>{heroAlbum.title}</strong></figcaption>
        </figure>
        <div className="exhibit-hero-foot" aria-hidden="true">
          <span>{String(albums.length).padStart(2, "0")} chapters</span>
          <span>select a chapter below ↓</span>
        </div>
      </header>

      <section className="exhibit-wrap section-shell" aria-label={`${artist} albums`}>
        <aside className="exhibit-rail">
          <p>chapters</p>
          <nav aria-label={`${artist} era index`}>
            {albums.map((album, index) => <a href={`#${eraKey(album.title)}`} key={album.title}><span>{String(index + 1).padStart(2, "0")}</span>{album.title}</a>)}
          </nav>
        </aside>

        <div className="exhibit-stage-list">
          {albums.map((album, index) => (
            <article
              className={`exhibit-stage era-font-${album.font}`}
              data-era={eraKey(album.title)}
              id={eraKey(album.title)}
              key={album.title}
              style={{
                "--era-bg": album.background,
                "--era-accent": album.accent,
                "--era-ink": album.ink,
                "--stage-index": index,
              } as CSSProperties}
            >
              <div className="exhibit-cover">
                <img loading={index > 1 ? "lazy" : "eager"} decoding="async" src={sitePath(album.cover)} alt={`${album.title} album cover`} />
                <span>{album.year}</span>
              </div>
              <div className="exhibit-copy">
                <div className="exhibit-kicker"><span>{album.mood}</span><span>{String(index + 1).padStart(2, "0")} / {String(albums.length).padStart(2, "0")}</span></div>
                <h2>{album.title}</h2>
                <div className="exhibit-tracks">{album.songs.map((song) => <span key={song}>{song}</span>)}</div>
                <p className="exhibit-note">{album.note}</p>
              </div>
            </article>
          ))}
          <p className="archive-credit">Album artwork via Apple Music · used here as visual identification.</p>
        </div>
      </section>

      <footer className="archive-footer section-shell">
        <span>ALISON / MUSIC ARCHIVE</span>
        <Link href={sitePath("/")}>back to personal lab ↑</Link>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
