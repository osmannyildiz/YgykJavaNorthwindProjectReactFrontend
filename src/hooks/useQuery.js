import { useMemo } from "react";
import { useLocation } from "react-router-dom";

// https://v5.reactrouter.com/web/example/query-parameters
export function useQuery() {
	const { search } = useLocation();

	// For destructuring to work, I had to change this to return a newly created
	// object instead of the URLSearchParams instance. See:
	// https://stackoverflow.com/a/63708015
	return useMemo(() => {
		const searchParams = new URLSearchParams(search);
		const query = {};
		// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
		for (const [key, value] of searchParams) {
			query[key] = value;
		}
		return query;
	}, [search]);
}
