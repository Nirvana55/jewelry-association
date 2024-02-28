import { sanityClient } from "../../utils/sanity/client";

const getAssociates = async (query: { search?: string; page?: string }) => {
  const res = await sanityClient.fetch(
    `*[_type=="associateMembers"  ${
      query.search ? '&& title match "' + query.search + '"' : ""
    } ] | order(publishedAt desc)[0...10]`
  );
  return res;
};
