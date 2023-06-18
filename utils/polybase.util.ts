import { CollectionList, CollectionRecordResponse } from "@polybase/client";

export const formatDataFetch = (
  data: CollectionRecordResponse<any, any> | CollectionList<any> | null
) => {
  if (data) {
    if (Array.isArray(data.data)) {
      return data.data.map((obj) => obj.data);
    }
    return data.data;
  }
  return {};
};
