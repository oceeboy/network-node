import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" bg-customDark h-full  pt-10">
      <main>{children}</main>
    </section>
  );
}
