import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";
import { CollectionRecord } from "@polybase/client";

export const createTag = async ({ name }: { name: string }) => {
  try {
    const res = await writeRecord({ collection: "Tag", data: [name] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const setVideoTag = async ({ id, video }: { id: string, video: CollectionRecord<any>[]}) => {
  try {
    const res = await updateRecord({
      collection: "Tag",
      data: [video],
      record: id,
      func: "addVideo",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.log(err);
    return err;
  }
}