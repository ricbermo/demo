import {useSWRInfinite} from 'swr';
import {API_VERSION} from '@env';
import {useRecoilState} from 'recoil';
import {search} from 'helpers/api';
import {useDebounce} from './useDebounce';

export function useSearch({atom, entity = 'Hearing'}) {
  const [q, setSearch] = useRecoilState(atom);
  const debouncedSearch = useDebounce(q, 1000);

  const {
    data = null,
    mutate,
    error,
    size,
    setSize,
    isValidating,
  } = useSWRInfinite(index => {
    if (debouncedSearch) {
      return [
        `/search/${API_VERSION}/search`,
        `entity:${entity} ${debouncedSearch}`,
        index * 50,
        50,
      ];
    }

    return null;
  }, search);

  const isRefreshing = isValidating && data && data.length === size;

  return {
    results: data ?? [],
    setSearch,
    q,
    mutate,
    size,
    setSize,
    isRefreshing,
    debouncedSearch,
    error,
    loading: !!debouncedSearch && data === null,
  };
}
