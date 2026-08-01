import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders Alison's personal lab", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Alison&#x27;s Personal Lab<\/title>/i);
  assert.match(html, /Hi, I&#x27;m.*Alison\./i);
  assert.match(html, /研二在读/);
  assert.match(html, /Taylor Swift/);
  assert.match(html, /TWICE/);
  assert.match(html, /id="music"/);
  assert.match(html, /href="\/music\/taylor"/);
  assert.match(html, /href="\/music\/twice"/);
  assert.doesNotMatch(html, /id="experiments"|id="signals"|available for a hello/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the Taylor era archive with album art", async () => {
  const response = await render("/music/taylor");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The diary became a universe/);
  assert.match(html, /The Life of a Showgirl/);
  assert.match(html, /\/albums\/taylor\/showgirl\.jpg/);
  assert.equal(new Set(html.match(/\/albums\/taylor\/[^"']+\.jpg/g)).size, 12);
  assert.match(html, /exhibit-rail/);
  assert.match(html, /href="#reputation"/);
  assert.match(html, /era-font-typewriter/);
  assert.doesNotMatch(html, /NAYEON/);
});

test("server-renders the TWICE archive with albums and members", async () => {
  const response = await render("/music/twice");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Nine colors keep moving together/);
  assert.match(html, /TEN: The Story Goes On/);
  assert.match(html, /\/albums\/twice\/ten\.jpg/);
  assert.equal(new Set(html.match(/\/albums\/twice\/[^"']+\.jpg/g)).size, 12);
  assert.match(html, /href="\/music\/twice\/members"/);
});

test("server-renders the TWICE members exhibition", async () => {
  const response = await render("/music/twice/members");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /The people inside/);
  assert.match(html, /archive-member-grid/);
  for (const member of ["NAYEON", "JEONGYEON", "MOMO", "SANA", "JIHYO", "MINA", "DAHYUN", "CHAEYOUNG", "TZUYU"]) {
    assert.match(html, new RegExp(member));
  }
  assert.match(html, /twice\.jype\.com\/Default\/Profile/);
});
