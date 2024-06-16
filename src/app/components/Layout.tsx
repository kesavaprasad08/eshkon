"use client";
import { useAppSelector } from "@/lib/store";
import { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  const isLoaded = useAppSelector((state) => state.app.isLoaded);
  return (
    <div className="page">
      <header className="header">{title}</header>
      <main>{children}</main>
      <footer className="header">
        {isLoaded ? "The has fully loaded" : ""}
      </footer>
    </div>
  );
};

export default Layout;
