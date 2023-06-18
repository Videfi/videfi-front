import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";
import { CollectionRecord } from "@polybase/client";

export const createVideo = async ({ address, index, duration, tag }: { address: string, index: string, duration: string, tag?: CollectionRecord<any>[]}) => {
  // id: string, address: string, index: string, duration: string, tag?: Tag[]
  // duration => second
  try {
    let res;
    if (tag) {
      res = await writeRecord({ collection: "Video", data: [address, index, duration, tag] });
    }
    res = await writeRecord({ collection: "Video", data: [address, index, duration] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const increaseLike = async ({ id }: { id: string }) => {
  try {
    const res = await updateRecord({
      collection: "Video",
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
      collection: "Video",
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

export const increaseView = async ({ id }: { id: string }) => {
  try {
    const res = await updateRecord({
      collection: "Video",
      data: [],
      record: id,
      func: "increaseView",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const decreaseView = async ({ id }: { id: string }) => {
  try {
    const res = await updateRecord({
      collection: "Video",
      data: [],
      record: id,
      func: "decreaseView",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const setTagVideo = async ({ id, tag }: { id: string, tag: CollectionRecord<any>[]}) => {
  try {
    const res = await updateRecord({
      collection: "Video",
      data: [tag],
      record: id,
      func: "setTag",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
}
