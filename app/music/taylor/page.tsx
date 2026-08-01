import type { Metadata } from "next";
import { ArchivePage } from "../ArchivePage";
import { taylorAlbums } from "../data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Taylor Swift Archive / Alison's Personal Lab",
  description: "Alison's visual archive of Taylor Swift eras, albums, and songs.",
};

export default function TaylorArchive() {
  return (
    <ArchivePage
      artist="Taylor Swift"
      label="01 / songwriting, eras, reinvention"
      headline="The diary became a universe."
      intro="Taylor Swift / twelve eras / songs I return to."
      officialHref="https://www.taylorswift.com/swiftiearchive/"
      officialLabel="official Taylor archive"
      albums={taylorAlbums}
      variant="taylor"
    />
  );
}
