import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";

export default function SearchInput({ searchHandler, searchArtists }) {
  return (
    <div className="input-wrapper">
      <Input
        placeholder="Search..."
        size="medium"
        onChange={(e) => searchHandler(e)}
      />
      <Button onClick={(e) => searchArtists(e)}>Search</Button>
    </div>
  );
}
