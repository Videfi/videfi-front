import { CallArgs, Polybase } from "@polybase/client";
import { NAMESPACE_DEFAULT } from "./db.polybase";
import { signMessage } from '@wagmi/core';

export async function updateRecord({
  collection,
  namespace,
  data,
  record,
  func
}: {
  collection: string;
  namespace?: string;
  data: CallArgs;
  record: string;
  func: string;
}) {
  const db = new Polybase({ defaultNamespace: namespace || NAMESPACE_DEFAULT });
  const collectionReference = db.collection(collection);
  db.signer(async (message: string) => {
    return {
      h: "eth-personal-sign",
      sig: await signMessage({ message }),
    };
  });
  
  const res = await collectionReference.record(record).call(func, [...data]);
  return res;
}
