import { NAMESPACE_DEFAULT } from "@/lib/polybase/db.polybase";
import { updateRecord } from "@/lib/polybase/update.polybase";
import { writeRecord } from "@/lib/polybase/write.polybase";
import { createTag } from "@/services/polybase/tag.polybase.service";
import {
  createUser,
  setNameUser,
} from "@/services/polybase/user.polybase.service";
import {
  createVideo,
  setTagVideo,
} from "@/services/polybase/video.polybase.service";
import { formatDataFetch } from "@/utils/polybase.util";
import { PublicKey } from "@polybase/client";
import { useCollection, useDocument, usePolybase } from "@polybase/react";
import { useState } from "react";

export default function test() {
  const polybase = usePolybase();
  const [id, setId] = useState("1");
  const [isLoading, setLoading] = useState(false);
  // useDocument => record only => data.data.<col>
  // useCollection => all, filter => data[<num>].data.<col>

  const { data, error, loading } = useDocument(
    polybase.collection("Video").record("4a395086-1bb0-4574-aa5f-db65095cf9bc")
  );
  const { data: Tags } = useCollection(polybase.collection("Tag"));
  // const { data, error, loading } = useCollection(polybase.collection("User").where("id", "==", "1"));
  console.log(formatDataFetch(data));
  console.log(formatDataFetch(Tags));
  if (Array.isArray(formatDataFetch(Tags))) {
    console.log('new: ');
    console.log(
      formatDataFetch(Tags).map((tag: any) => {
        const res = formatDataFetch(data).tag?.find((_tag: any) => tag.id === _tag.id);
        if (!res) return;
        return res;
      }
        // formatDataFetch(data).tag?.map((_tag: any) => tag.id === _tag.id)
      ).filter((val: any) => val !== undefined)
    );
  }
  const { data: Video } = useCollection(polybase.collection("Video"));
  console.log(formatDataFetch(Video));
  return (
    <div className="space-x-3">
      <button
        type="button"
        onClick={async () => {
          setLoading(false);
          const res = await createUser({ name: "123" });
          console.log(res);
          setLoading(true);
          console.log(isLoading);
        }}
      >
        write
      </button>
      <button
        type="button"
        onClick={async () => {
          setLoading(false);
          const res = await setNameUser({ id: "1", name: "babababa" });
          console.log(res);
          setLoading(true);
          console.log(isLoading);
        }}
      >
        update
      </button>
      <div>
        <button
          type="button"
          onClick={async () => {
            setLoading(false);
            const res = await createVideo({
              address: "address",
              index: "index",
              duration: "5",
            });
            console.log(res);
            setLoading(true);
            console.log(isLoading);
          }}
        >
          Add Video
        </button>
        <button
          type="button"
          onClick={async () => {
            setLoading(false);
            const res = await setTagVideo({
              id: "4a395086-1bb0-4574-aa5f-db65095cf9bc",
              tag: [
                polybase
                  .collection("Tag")
                  .record("94628422-eedf-4f33-ace6-1ffd1c44767b"),
                polybase
                  .collection("Tag")
                  .record("ae810ff9-407b-4e7b-9242-589438c024d0"),
              ],
            });
            console.log(res);
            setLoading(true);
            console.log(isLoading);
          }}
        >
          Update Tag on Video
        </button>
      </div>
      <div>
        <button
          onClick={async () => {
            await createTag({ name: "4" });
          }}
        >
          Add Tag
        </button>
      </div>
    </div>
  );
}
