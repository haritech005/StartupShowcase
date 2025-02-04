import React from "react";
import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  // const query = "hello";

  return (
    <div>
      <Form className="search-form" action="/" scroll={false}>
        <input
          name="query"
          defaultValue={query}
          type="text"
          className="search-input"
          placeholder="Search startups"
          autoComplete="off"
          spellCheck="false"
        />

        <div className="flex gap-2">{query && <SearchFormReset />}</div>
        <button type="submit" className="search-btn text-white-100">
          <Search className="size-5" />
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
