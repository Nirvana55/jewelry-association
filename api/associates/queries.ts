import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "../../utils/sanity/client";

const getRates = async () => {
  const res = await sanityClient.fetch(
    `*[_type=="rates"] | order(_createdAt desc)`
  );
  return res;
};

export const useGetRates = () => {
  return useQuery({
    queryKey: ["getRates"],
    queryFn: () => getRates(),
    refetchOnWindowFocus: true,
  });
};
