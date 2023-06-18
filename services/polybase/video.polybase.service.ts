import { NAMESPACE_DEFAULT } from "@/lib/polybase/db.polybase";
import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";
import { CollectionRecord, Polybase } from "@polybase/client";
import { signMessage } from "@wagmi/core";
import { uuid } from "@/utils/crypto.util";

export const createVideo = async ({
  address,
  duration,
  tag,
}: {
  address: string;
  duration: string;
  tag?: CollectionRecord<any>[];
}) => {
  // id: string, address: string, index: string, duration: string, tag?: Tag[]
  // duration => second
  try {
    let res;
    if (tag) {
      res = await writeRecord({
        collection: "Video",
        data: [address, duration, tag],
      });
    }
    res = await writeRecord({ collection: "Video", data: [address, duration] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const createVideoAll = async ({
  address,
  duration,
  index,
  tag,
}: {
  address: string;
  duration: string;
  tag?: CollectionRecord<any>[];
  index: number;
}) => {
  const db = new Polybase({ defaultNamespace: NAMESPACE_DEFAULT });
  db.signer(async (message: string) => {
    return {
      h: "eth-personal-sign",
      sig: await signMessage({ message }),
    };
  });
  const collectionReference = db.collection("Video");
  try {
    let res;
    for (let i = 0; i < index; i++) {
      const id = uuid();
      const _address = address + "-" + i.toString();
      if (tag) {
        res = await collectionReference.create([id, _address, duration, tag]);
      } else {
        res = await collectionReference.create([id, _address, duration]);
      }
    }
    return formatDataFetch(res as any);
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

export const setTagVideo = async ({
  id,
  tag,
}: {
  id: string;
  tag: CollectionRecord<any>[];
}) => {
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
};
