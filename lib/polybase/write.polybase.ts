import { CallArgs, Polybase } from "@polybase/client";
import { NAMESPACE_DEFAULT } from "./db.polybase";
import { signMessage } from '@wagmi/core';
import { uuid } from "@/utils/crypto.util";

export async function writeRecord({
  collection,
  namespace,
  data,
}: {
  collection: string;
  namespace?: string;
  data: CallArgs;
}) {
  const db = new Polybase({ defaultNamespace: namespace || NAMESPACE_DEFAULT });
  
  db.signer(async (message: string) => {
    return {
      h: "eth-personal-sign",
      sig: await signMessage({ message }),
    };
  });
  const collectionReference = db.collection(collection);
  const id = uuid();
  const res = await collectionReference.create([id, ...data]);
  return res;
}
