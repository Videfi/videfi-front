import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";
import { CollectionRecord } from "@polybase/client";

export const createComment = async ({ comment, video, createdAt, owner }: { comment: string, video: CollectionRecord<any>, owner:  CollectionRecord<any>, createdAt: string}) => {
  // createdAt => timestamp 
  try {
    const res = await writeRecord({ collection: "Comment", data: [video, comment, owner, createdAt] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const increaseLike = async ({ id }: { id: string }) => {
  try {
    const res = await updateRecord({
      collection: "Comment",
      data: [],
      record: id,
      func: "increaseLike",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const decreaseLike = async ({ id }: { id: string }) => {
  try {
    const res = await updateRecord({
      collection: "Comment",
      data: [],
      record: id,
      func: "decreaseLike",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const addSubComment = async ({ id, comment }:  { id: string, comment: CollectionRecord<any> }) => {
  try {
    const res = await updateRecord({
      collection: "Comment",
      data: [comment],
      record: id,
      func: "addSubComment",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
};