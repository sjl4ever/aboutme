import type { Metadata } from "next";
import { ArchivePage } from "../ArchivePage";
import { twiceAlbums } from "../data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "TWICE Archive / Alison's Personal Lab",
  description: "Alison's visual archive of TWICE albums and songs.",
};

export default function TwiceArchive() {
  return (
    <ArchivePage
      artist="TWICE"
      label="02 / nine colors, one orbit"
      headline="Nine colors keep moving together."
      intro="TWICE / twelve chapters / nine voices, one orbit."
      officialHref="https://twice.jype.com/Default/Discography"
      officialLabel="official TWICE discography"
      secondaryHref="/music/twice/members"
      secondaryLabel="nine member profiles"
      albums={twiceAlbums}
      variant="twice"
    />
  );
}
