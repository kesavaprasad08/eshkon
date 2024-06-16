"use client"
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useAppDispatch, setLoaded } from "@/lib/store";
import { fetchCard, fetchContent } from "@/lib/contentful";
import Card from "../components/card";

const AbTestCard = ({ params }: { params: { id: string } }) => {

let [page,setPage]=useState<any>();


  // res();
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoaded());
    fetchCard('Cards').then(response =>{
      setPage(response)
    }).catch(e =>{
    console.log(e)
      })
    
  }, [dispatch]);

  

  return <Layout title="Ab Test Card">
    
    {page?.title!==undefined && 
    <Card  title={page?.title} description={page?.description} imgUrl={page?.thumbnailImage?.fields?.file?.url} bgColor={page?.backgroundColor}/>}
  </Layout>
};
export default AbTestCard;
