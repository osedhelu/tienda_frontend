import Head from "next/head";
import { FC } from "react";
import { ShopNavbar, SideMenu } from "@/components/index";

interface props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children?: JSX.Element | JSX.Element[];
}

export const ShopLayout: FC<props> = ({
  imageFullUrl,
  pageDescription,
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      <nav>
        <ShopNavbar />
      </nav>
      <SideMenu />
      {/* TODO: Sidebar */}
      <main
        style={{ margin: "80px auto", maxWidth: "1440px", padding: "0 30px" }}
      >
        {children}
      </main>
      <footer>{/* TODO: FOOTER */}</footer>
    </>
  );
};
