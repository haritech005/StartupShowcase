import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";

const SearchForm = () => {
  const query = "test";
  
  return (
    <div>
      <Form className="search-form" action="/" scroll={false}>
        <input
          name="query"
          defaultValue={query}
          type="text"
          className="search-input"
          placeholder="Search startups"
        />

        <div className="flex gap-2">
          {query && (
           <SearchFormReset />
          )}
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;
