// app/search/page.tsx
"use client";

import React, { Suspense } from "react";
import SearchResultsPage from "./searchPage/page";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResultsPage />
    </Suspense>
  );
}
