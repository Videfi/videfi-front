import {
  HomeFeedDocument,
  HomeFeedQuery,
  execute,
} from "../.graphclient";
import { useEffect, useState } from "react";

export const useContentNFTsFeed = (limit = 20, offset = 0) => {
  const [data, setData] = useState<HomeFeedQuery>();

  useEffect(() => {
    execute(HomeFeedDocument, { $first: limit, $skip: offset }).then((result) => {
      setData(result?.data);
    });
  }, [setData]);

  return data;
};
