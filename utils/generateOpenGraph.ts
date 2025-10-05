const generateOpenGraph = <OG extends { title: string; description: string }>({
  title,
  description,
}: OG) => ({
  // metadataBase: new URL(""),
  title: `롤링페이퍼 - ${title}`,
  description,
  icons: { icon: "/icon.svg" },
  additionalLinkTags: [{ rel: "icon", href: "/icon.svg" }],
  openGraph: {
    type: "website",
    title: `롤링페이퍼 - ${title}`,
    description,
    images: "/meta-image.png",
  },
  other: {
    "og:image": "/meta-image.png",
  },
});

export default generateOpenGraph;
