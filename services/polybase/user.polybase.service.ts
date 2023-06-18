import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { formatDataFetch } from "@/utils/polybase.util";

export const createUser = async ({ name }: { name: string }) => {
  try {
    const res = await writeRecord({ collection: "User", data: [name] });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const setNameUser = async ({ id, name }: { id: string, name: string }) => {
  try {
    const res = await updateRecord({
      collection: "User",
      data: [name],
      record: id,
      func: "setName",
    });
    return formatDataFetch(res);
  } catch (err) {
    console.error(err);
    return err;
  }
};
