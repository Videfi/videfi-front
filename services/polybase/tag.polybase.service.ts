import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";

export const createTag = async ({ name }: { name: string }) => {
  try {
    const res = await writeRecord({ collection: "Tag", data: [name] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};