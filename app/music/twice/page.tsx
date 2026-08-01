import type { Metadata } from "next";
import { ArchivePage } from "../ArchivePage";
import { twiceAlbums } from "../data";

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
      intro="早期的明亮俏皮、成熟期的自我确认、夏日感与更大的国际舞台，都被九个人的性格与默契串在一起。"
      officialHref="https://twice.jype.com/Default/Discography"
      officialLabel="official TWICE discography"
      secondaryHref="/music/twice/members"
      secondaryLabel="nine member profiles"
      albums={twiceAlbums}
      variant="twice"
    />
  );
}
