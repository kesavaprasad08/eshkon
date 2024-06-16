"use client";
import { fetchCard, fetchContent } from "@/lib/contentful";
import styles from "./page.module.css";
import { UseSelector, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import { setLoaded, useAppDispatch, useAppSelector } from "@/lib/store";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Link from "next/link";

export default function Home() {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector((state) => state.app.isLoaded);


  useEffect(() => {
    dispatch(setLoaded());
  }, [dispatch]);

  return (
    <Layout title="Home Page">
      <main className={styles.main}>
        <div className="card">
          <h3>Welcome</h3>
          <Link href='/ab-test-card'>Proceed to Ab Test Card</Link>
        </div>
        
      </main>
    </Layout>
  );
}
