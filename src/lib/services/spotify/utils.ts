import useSWR from "swr";

import type { SWRHookResponse } from "@/lib/types/SWRHook.ts";
import { fetcher } from "@/lib/utils/fetcher.ts";

export const useSpotifySWR = <ResType>(
  path: string,
  fallbackData?: ResType,
  isReady = true
): SWRHookResponse<ResType> => {
  const { data, error, mutate } = useSWR<ResType>(
    isReady ? path : null,
    fetcher,
    {
      fallbackData,
    }
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
