import { useState, useEffect } from "react";
import httpService from "../services/httpService";

function useSearch() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const numberOfResults = 5;

    async function search(query) {
      try {
        const { data } = await httpService.get(
          `https://api.imgur.com/3/gallery/search?q=${query}`
        );
        const { data: results } = data;

        setIsLoading(false);
        setResults(results.slice(0, numberOfResults));
      } catch (error) {
        console.error(error.message);
      }
    }
    let queryLater = setTimeout(() => {
      search(query);
    }, 400);

    return () => {
      clearTimeout(queryLater);
    };
  }, [query, setResults]);

  function handleSubmit(event) {
    event.preventDefault();
    return;
  }

  function handleInputChange({ target: input }) {
    setQuery(input.value);
    setIsLoading(true);
  }

  function handleFocusChange(isFocused) {
    setIsFocused(isFocused);
  }

  return [
    query,
    results,
    isFocused,
    isLoading,
    handleInputChange,
    handleSubmit,
    handleFocusChange,
  ];
}

export default useSearch;
