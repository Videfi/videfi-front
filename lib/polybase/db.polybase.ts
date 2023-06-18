import { Polybase, Signer } from "@polybase/client";

export const db = (namespace: string) =>
  new Polybase({
    defaultNamespace: namespace,
  });

export const signerCustom = (db: Polybase, signer: Signer) => db.signer(signer);

export const signer = (signer: Signer) => db(process.env.NAMESPACE_DEFAULT || "").signer(signer);

export const NAMESPACE_DEFAULT = process.env.NAMESPACE_DEFAULT || "pk/0x732b688dac2cede84ccbdd1501988bd8701eaa5758159e3b61701765c82f8223ae27904b9a381edfcf3b94924343355855eb332ec49235cc96ec6e7a04f032cd/test3"