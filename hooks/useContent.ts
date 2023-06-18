import { ContentDocument, ContentQuery, execute } from "../.graphclient";
import { useEffect, useState } from "react";

export const useContent = (id: string) => {
  const [data, setData] = useState<ContentQuery>();

  useEffect(() => {
    if (id) {
      execute(ContentDocument, { id }).then((result) => {
        setData(result?.data);
      });
    }
  }, [id, setData]);

  return data;
};
