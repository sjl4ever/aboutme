import type { Metadata } from "next";
import { ArchivePage } from "../ArchivePage";
import { taylorAlbums } from "../data";

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
      intro="从乡村叙事到流行转向，再到森林里的虚构人物与舞台灯光，Taylor 的每一个时代都像一间拥有独立颜色、字体和天气的房间。"
      officialHref="https://www.taylorswift.com/swiftiearchive/"
      officialLabel="official Taylor archive"
      albums={taylorAlbums}
      variant="taylor"
    />
  );
}
