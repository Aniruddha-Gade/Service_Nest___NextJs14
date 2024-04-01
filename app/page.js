"use client";
import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  return (
    <div>
      <Hero />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
