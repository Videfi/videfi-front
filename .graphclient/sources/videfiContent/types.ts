// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace VidefiContentTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type App = {
  id: Scalars['ID'];
  totalContents: Scalars['BigInt'];
};

export type App_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  totalContents?: InputMaybe<Scalars['BigInt']>;
  totalContents_not?: InputMaybe<Scalars['BigInt']>;
  totalContents_gt?: InputMaybe<Scalars['BigInt']>;
  totalContents_lt?: InputMaybe<Scalars['BigInt']>;
  totalContents_gte?: InputMaybe<Scalars['BigInt']>;
  totalContents_lte?: InputMaybe<Scalars['BigInt']>;
  totalContents_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalContents_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<App_filter>>>;
  or?: InputMaybe<Array<InputMaybe<App_filter>>>;
};

export type App_orderBy =
  | 'id'
  | 'totalContents';

export type Beneficiary = {
  id: Scalars['ID'];
  contents?: Maybe<Array<Content>>;
  totalContents: Scalars['BigInt'];
};


export type BeneficiarycontentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Content_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Content_filter>;
};

export type Beneficiary_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contents_?: InputMaybe<Content_filter>;
  totalContents?: InputMaybe<Scalars['BigInt']>;
  totalContents_not?: InputMaybe<Scalars['BigInt']>;
  totalContents_gt?: InputMaybe<Scalars['BigInt']>;
  totalContents_lt?: InputMaybe<Scalars['BigInt']>;
  totalContents_gte?: InputMaybe<Scalars['BigInt']>;
  totalContents_lte?: InputMaybe<Scalars['BigInt']>;
  totalContents_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalContents_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Beneficiary_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Beneficiary_filter>>>;
};

export type Beneficiary_orderBy =
  | 'id'
  | 'contents'
  | 'totalContents';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Content = {
  id: Scalars['ID'];
  contentName: Scalars['String'];
  contentSymbol: Scalars['String'];
  tokenURI: Scalars['String'];
  limitAmount: Scalars['BigInt'];
  paymentToken: Token;
  mintPrice: Scalars['BigInt'];
  beneficiary: Beneficiary;
  isDAOBeneficiary: Scalars['Boolean'];
};

export type ContentNFT = {
  id: Scalars['ID'];
  content: Content;
  owner: User;
};

export type ContentNFT_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  content?: InputMaybe<Scalars['String']>;
  content_not?: InputMaybe<Scalars['String']>;
  content_gt?: InputMaybe<Scalars['String']>;
  content_lt?: InputMaybe<Scalars['String']>;
  content_gte?: InputMaybe<Scalars['String']>;
  content_lte?: InputMaybe<Scalars['String']>;
  content_in?: InputMaybe<Array<Scalars['String']>>;
  content_not_in?: InputMaybe<Array<Scalars['String']>>;
  content_contains?: InputMaybe<Scalars['String']>;
  content_contains_nocase?: InputMaybe<Scalars['String']>;
  content_not_contains?: InputMaybe<Scalars['String']>;
  content_not_contains_nocase?: InputMaybe<Scalars['String']>;
  content_starts_with?: InputMaybe<Scalars['String']>;
  content_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_starts_with?: InputMaybe<Scalars['String']>;
  content_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  content_ends_with?: InputMaybe<Scalars['String']>;
  content_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_not_ends_with?: InputMaybe<Scalars['String']>;
  content_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  content_?: InputMaybe<Content_filter>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<User_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContentNFT_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ContentNFT_filter>>>;
};

export type ContentNFT_orderBy =
  | 'id'
  | 'content'
  | 'content__id'
  | 'content__contentName'
  | 'content__contentSymbol'
  | 'content__tokenURI'
  | 'content__limitAmount'
  | 'content__mintPrice'
  | 'content__isDAOBeneficiary'
  | 'owner'
  | 'owner__id'
  | 'owner__totalContents';

export type Content_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contentName?: InputMaybe<Scalars['String']>;
  contentName_not?: InputMaybe<Scalars['String']>;
  contentName_gt?: InputMaybe<Scalars['String']>;
  contentName_lt?: InputMaybe<Scalars['String']>;
  contentName_gte?: InputMaybe<Scalars['String']>;
  contentName_lte?: InputMaybe<Scalars['String']>;
  contentName_in?: InputMaybe<Array<Scalars['String']>>;
  contentName_not_in?: InputMaybe<Array<Scalars['String']>>;
  contentName_contains?: InputMaybe<Scalars['String']>;
  contentName_contains_nocase?: InputMaybe<Scalars['String']>;
  contentName_not_contains?: InputMaybe<Scalars['String']>;
  contentName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contentName_starts_with?: InputMaybe<Scalars['String']>;
  contentName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentName_not_starts_with?: InputMaybe<Scalars['String']>;
  contentName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentName_ends_with?: InputMaybe<Scalars['String']>;
  contentName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentName_not_ends_with?: InputMaybe<Scalars['String']>;
  contentName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol?: InputMaybe<Scalars['String']>;
  contentSymbol_not?: InputMaybe<Scalars['String']>;
  contentSymbol_gt?: InputMaybe<Scalars['String']>;
  contentSymbol_lt?: InputMaybe<Scalars['String']>;
  contentSymbol_gte?: InputMaybe<Scalars['String']>;
  contentSymbol_lte?: InputMaybe<Scalars['String']>;
  contentSymbol_in?: InputMaybe<Array<Scalars['String']>>;
  contentSymbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  contentSymbol_contains?: InputMaybe<Scalars['String']>;
  contentSymbol_contains_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol_not_contains?: InputMaybe<Scalars['String']>;
  contentSymbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol_starts_with?: InputMaybe<Scalars['String']>;
  contentSymbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol_not_starts_with?: InputMaybe<Scalars['String']>;
  contentSymbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol_ends_with?: InputMaybe<Scalars['String']>;
  contentSymbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  contentSymbol_not_ends_with?: InputMaybe<Scalars['String']>;
  contentSymbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI?: InputMaybe<Scalars['String']>;
  tokenURI_not?: InputMaybe<Scalars['String']>;
  tokenURI_gt?: InputMaybe<Scalars['String']>;
  tokenURI_lt?: InputMaybe<Scalars['String']>;
  tokenURI_gte?: InputMaybe<Scalars['String']>;
  tokenURI_lte?: InputMaybe<Scalars['String']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  tokenURI_contains?: InputMaybe<Scalars['String']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  limitAmount?: InputMaybe<Scalars['BigInt']>;
  limitAmount_not?: InputMaybe<Scalars['BigInt']>;
  limitAmount_gt?: InputMaybe<Scalars['BigInt']>;
  limitAmount_lt?: InputMaybe<Scalars['BigInt']>;
  limitAmount_gte?: InputMaybe<Scalars['BigInt']>;
  limitAmount_lte?: InputMaybe<Scalars['BigInt']>;
  limitAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  limitAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  paymentToken?: InputMaybe<Scalars['String']>;
  paymentToken_not?: InputMaybe<Scalars['String']>;
  paymentToken_gt?: InputMaybe<Scalars['String']>;
  paymentToken_lt?: InputMaybe<Scalars['String']>;
  paymentToken_gte?: InputMaybe<Scalars['String']>;
  paymentToken_lte?: InputMaybe<Scalars['String']>;
  paymentToken_in?: InputMaybe<Array<Scalars['String']>>;
  paymentToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  paymentToken_contains?: InputMaybe<Scalars['String']>;
  paymentToken_contains_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_not_contains?: InputMaybe<Scalars['String']>;
  paymentToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_starts_with?: InputMaybe<Scalars['String']>;
  paymentToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_not_starts_with?: InputMaybe<Scalars['String']>;
  paymentToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_ends_with?: InputMaybe<Scalars['String']>;
  paymentToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_not_ends_with?: InputMaybe<Scalars['String']>;
  paymentToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  paymentToken_?: InputMaybe<Token_filter>;
  mintPrice?: InputMaybe<Scalars['BigInt']>;
  mintPrice_not?: InputMaybe<Scalars['BigInt']>;
  mintPrice_gt?: InputMaybe<Scalars['BigInt']>;
  mintPrice_lt?: InputMaybe<Scalars['BigInt']>;
  mintPrice_gte?: InputMaybe<Scalars['BigInt']>;
  mintPrice_lte?: InputMaybe<Scalars['BigInt']>;
  mintPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beneficiary?: InputMaybe<Scalars['String']>;
  beneficiary_not?: InputMaybe<Scalars['String']>;
  beneficiary_gt?: InputMaybe<Scalars['String']>;
  beneficiary_lt?: InputMaybe<Scalars['String']>;
  beneficiary_gte?: InputMaybe<Scalars['String']>;
  beneficiary_lte?: InputMaybe<Scalars['String']>;
  beneficiary_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_not_in?: InputMaybe<Array<Scalars['String']>>;
  beneficiary_contains?: InputMaybe<Scalars['String']>;
  beneficiary_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_not_contains?: InputMaybe<Scalars['String']>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_starts_with?: InputMaybe<Scalars['String']>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_not_starts_with?: InputMaybe<Scalars['String']>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_ends_with?: InputMaybe<Scalars['String']>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_not_ends_with?: InputMaybe<Scalars['String']>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beneficiary_?: InputMaybe<Beneficiary_filter>;
  isDAOBeneficiary?: InputMaybe<Scalars['Boolean']>;
  isDAOBeneficiary_not?: InputMaybe<Scalars['Boolean']>;
  isDAOBeneficiary_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isDAOBeneficiary_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Content_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Content_filter>>>;
};

export type Content_orderBy =
  | 'id'
  | 'contentName'
  | 'contentSymbol'
  | 'tokenURI'
  | 'limitAmount'
  | 'paymentToken'
  | 'paymentToken__id'
  | 'paymentToken__symbol'
  | 'paymentToken__name'
  | 'paymentToken__decimals'
  | 'mintPrice'
  | 'beneficiary'
  | 'beneficiary__id'
  | 'beneficiary__totalContents'
  | 'isDAOBeneficiary';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Query = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  content?: Maybe<Content>;
  contents: Array<Content>;
  contentNFT?: Maybe<ContentNFT>;
  contentNFTs: Array<ContentNFT>;
  beneficiary?: Maybe<Beneficiary>;
  beneficiaries: Array<Beneficiary>;
  user?: Maybe<User>;
  users: Array<User>;
  app?: Maybe<App>;
  apps: Array<App>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerytokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Content_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Content_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontentNFTArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontentNFTsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContentNFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContentNFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeneficiaryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybeneficiariesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Beneficiary_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Beneficiary_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryappsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<App_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<App_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  token?: Maybe<Token>;
  tokens: Array<Token>;
  content?: Maybe<Content>;
  contents: Array<Content>;
  contentNFT?: Maybe<ContentNFT>;
  contentNFTs: Array<ContentNFT>;
  beneficiary?: Maybe<Beneficiary>;
  beneficiaries: Array<Beneficiary>;
  user?: Maybe<User>;
  users: Array<User>;
  app?: Maybe<App>;
  apps: Array<App>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiontokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Token_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Token_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Content_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Content_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontentNFTArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontentNFTsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContentNFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContentNFT_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeneficiaryArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbeneficiariesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Beneficiary_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Beneficiary_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionuserArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionusersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<User_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionappsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<App_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<App_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Token = {
  id: Scalars['ID'];
  symbol: Scalars['String'];
  name: Scalars['String'];
  decimals: Scalars['BigInt'];
};

export type Token_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Token_filter>>>;
};

export type Token_orderBy =
  | 'id'
  | 'symbol'
  | 'name'
  | 'decimals';

export type User = {
  id: Scalars['ID'];
  contents?: Maybe<Array<ContentNFT>>;
  totalContents: Scalars['BigInt'];
};


export type UsercontentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContentNFT_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContentNFT_filter>;
};

export type User_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  contents_?: InputMaybe<ContentNFT_filter>;
  totalContents?: InputMaybe<Scalars['BigInt']>;
  totalContents_not?: InputMaybe<Scalars['BigInt']>;
  totalContents_gt?: InputMaybe<Scalars['BigInt']>;
  totalContents_lt?: InputMaybe<Scalars['BigInt']>;
  totalContents_gte?: InputMaybe<Scalars['BigInt']>;
  totalContents_lte?: InputMaybe<Scalars['BigInt']>;
  totalContents_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalContents_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_filter>>>;
  or?: InputMaybe<Array<InputMaybe<User_filter>>>;
};

export type User_orderBy =
  | 'id'
  | 'contents'
  | 'totalContents';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  token: InContextSdkMethod<Query['token'], QuerytokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Query['tokens'], QuerytokensArgs, MeshContext>,
  /** null **/
  content: InContextSdkMethod<Query['content'], QuerycontentArgs, MeshContext>,
  /** null **/
  contents: InContextSdkMethod<Query['contents'], QuerycontentsArgs, MeshContext>,
  /** null **/
  contentNFT: InContextSdkMethod<Query['contentNFT'], QuerycontentNFTArgs, MeshContext>,
  /** null **/
  contentNFTs: InContextSdkMethod<Query['contentNFTs'], QuerycontentNFTsArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Query['beneficiary'], QuerybeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Query['beneficiaries'], QuerybeneficiariesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  app: InContextSdkMethod<Query['app'], QueryappArgs, MeshContext>,
  /** null **/
  apps: InContextSdkMethod<Query['apps'], QueryappsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  token: InContextSdkMethod<Subscription['token'], SubscriptiontokenArgs, MeshContext>,
  /** null **/
  tokens: InContextSdkMethod<Subscription['tokens'], SubscriptiontokensArgs, MeshContext>,
  /** null **/
  content: InContextSdkMethod<Subscription['content'], SubscriptioncontentArgs, MeshContext>,
  /** null **/
  contents: InContextSdkMethod<Subscription['contents'], SubscriptioncontentsArgs, MeshContext>,
  /** null **/
  contentNFT: InContextSdkMethod<Subscription['contentNFT'], SubscriptioncontentNFTArgs, MeshContext>,
  /** null **/
  contentNFTs: InContextSdkMethod<Subscription['contentNFTs'], SubscriptioncontentNFTsArgs, MeshContext>,
  /** null **/
  beneficiary: InContextSdkMethod<Subscription['beneficiary'], SubscriptionbeneficiaryArgs, MeshContext>,
  /** null **/
  beneficiaries: InContextSdkMethod<Subscription['beneficiaries'], SubscriptionbeneficiariesArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Subscription['user'], SubscriptionuserArgs, MeshContext>,
  /** null **/
  users: InContextSdkMethod<Subscription['users'], SubscriptionusersArgs, MeshContext>,
  /** null **/
  app: InContextSdkMethod<Subscription['app'], SubscriptionappArgs, MeshContext>,
  /** null **/
  apps: InContextSdkMethod<Subscription['apps'], SubscriptionappsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["videfiContent"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
