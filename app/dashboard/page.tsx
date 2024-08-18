"use client";

import { useState } from "react";
import SideBar from "./_components/sidebar";
import SearchDashboard from "./_components/searchDashboard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import TemplateList from "./_components/templateList";

export default function Dashoard() {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput}/>
      <TemplateList searchInput={searchInput}/>
    </div>
  );
}
