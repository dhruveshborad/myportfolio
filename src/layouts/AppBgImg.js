import Image from "next/image";
import bgImage from "../../public/assets/me.png"

export default function AppBgImg() {
  return (
    <Image
      src={bgImage}
      placeholder="blur"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
}
