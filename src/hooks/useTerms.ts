import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { Term__Interface } from '../entities/Period';
import APIClient from '../services/api-client';
import useCamisQueryStore from '../store';

const apiClient = new APIClient<Term__Interface>('/academic/active/term');

export const useTerms = () => {
  const camisQuery = useCamisQueryStore((s) => s.camisQuery);

  return useQuery<Term__Interface[]>({
    queryKey: ['Terms', camisQuery],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });
};

export default useTerms;
