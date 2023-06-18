// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BlockTrackingTransform from "@graphprotocol/client-block-tracking";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { VidefiContentTypes } from './sources/videfiContent/types';
import * as importedModule$0 from "./sources/videfiContent/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  App: ResolverTypeWrapper<App>;
  App_filter: App_filter;
  App_orderBy: App_orderBy;
  Beneficiary: ResolverTypeWrapper<Beneficiary>;
  Beneficiary_filter: Beneficiary_filter;
  Beneficiary_orderBy: Beneficiary_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Content: ResolverTypeWrapper<Content>;
  ContentNFT: ResolverTypeWrapper<ContentNFT>;
  ContentNFT_filter: ContentNFT_filter;
  ContentNFT_orderBy: ContentNFT_orderBy;
  Content_filter: Content_filter;
  Content_orderBy: Content_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  Token: ResolverTypeWrapper<Token>;
  Token_filter: Token_filter;
  Token_orderBy: Token_orderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_filter;
  User_orderBy: User_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  App: App;
  App_filter: App_filter;
  Beneficiary: Beneficiary;
  Beneficiary_filter: Beneficiary_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  Content: Content;
  ContentNFT: ContentNFT;
  ContentNFT_filter: ContentNFT_filter;
  Content_filter: Content_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  Token: Token;
  Token_filter: Token_filter;
  User: User;
  User_filter: User_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AppResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['App'] = ResolversParentTypes['App']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalContents?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BeneficiaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Beneficiary'] = ResolversParentTypes['Beneficiary']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contents?: Resolver<Maybe<Array<ResolversTypes['Content']>>, ParentType, ContextType, RequireFields<BeneficiarycontentsArgs, 'skip' | 'first'>>;
  totalContents?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ContentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Content'] = ResolversParentTypes['Content']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contentName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentSymbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  limitAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  paymentToken?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  mintPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  beneficiary?: Resolver<ResolversTypes['Beneficiary'], ParentType, ContextType>;
  isDAOBeneficiary?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ContentNFTResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContentNFT'] = ResolversParentTypes['ContentNFT']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['Content'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokenArgs, 'id' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QuerytokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  content?: Resolver<Maybe<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<QuerycontentArgs, 'id' | 'subgraphError'>>;
  contents?: Resolver<Array<ResolversTypes['Content']>, ParentType, ContextType, RequireFields<QuerycontentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contentNFT?: Resolver<Maybe<ResolversTypes['ContentNFT']>, ParentType, ContextType, RequireFields<QuerycontentNFTArgs, 'id' | 'subgraphError'>>;
  contentNFTs?: Resolver<Array<ResolversTypes['ContentNFT']>, ParentType, ContextType, RequireFields<QuerycontentNFTsArgs, 'skip' | 'first' | 'subgraphError'>>;
  beneficiary?: Resolver<Maybe<ResolversTypes['Beneficiary']>, ParentType, ContextType, RequireFields<QuerybeneficiaryArgs, 'id' | 'subgraphError'>>;
  beneficiaries?: Resolver<Array<ResolversTypes['Beneficiary']>, ParentType, ContextType, RequireFields<QuerybeneficiariesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id' | 'subgraphError'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  app?: Resolver<Maybe<ResolversTypes['App']>, ParentType, ContextType, RequireFields<QueryappArgs, 'id' | 'subgraphError'>>;
  apps?: Resolver<Array<ResolversTypes['App']>, ParentType, ContextType, RequireFields<QueryappsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptiontokenArgs, 'id' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptiontokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  content?: SubscriptionResolver<Maybe<ResolversTypes['Content']>, "content", ParentType, ContextType, RequireFields<SubscriptioncontentArgs, 'id' | 'subgraphError'>>;
  contents?: SubscriptionResolver<Array<ResolversTypes['Content']>, "contents", ParentType, ContextType, RequireFields<SubscriptioncontentsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contentNFT?: SubscriptionResolver<Maybe<ResolversTypes['ContentNFT']>, "contentNFT", ParentType, ContextType, RequireFields<SubscriptioncontentNFTArgs, 'id' | 'subgraphError'>>;
  contentNFTs?: SubscriptionResolver<Array<ResolversTypes['ContentNFT']>, "contentNFTs", ParentType, ContextType, RequireFields<SubscriptioncontentNFTsArgs, 'skip' | 'first' | 'subgraphError'>>;
  beneficiary?: SubscriptionResolver<Maybe<ResolversTypes['Beneficiary']>, "beneficiary", ParentType, ContextType, RequireFields<SubscriptionbeneficiaryArgs, 'id' | 'subgraphError'>>;
  beneficiaries?: SubscriptionResolver<Array<ResolversTypes['Beneficiary']>, "beneficiaries", ParentType, ContextType, RequireFields<SubscriptionbeneficiariesArgs, 'skip' | 'first' | 'subgraphError'>>;
  user?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "user", ParentType, ContextType, RequireFields<SubscriptionuserArgs, 'id' | 'subgraphError'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['User']>, "users", ParentType, ContextType, RequireFields<SubscriptionusersArgs, 'skip' | 'first' | 'subgraphError'>>;
  app?: SubscriptionResolver<Maybe<ResolversTypes['App']>, "app", ParentType, ContextType, RequireFields<SubscriptionappArgs, 'id' | 'subgraphError'>>;
  apps?: SubscriptionResolver<Array<ResolversTypes['App']>, "apps", ParentType, ContextType, RequireFields<SubscriptionappsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  contents?: Resolver<Maybe<Array<ResolversTypes['ContentNFT']>>, ParentType, ContextType, RequireFields<UsercontentsArgs, 'skip' | 'first'>>;
  totalContents?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  App?: AppResolvers<ContextType>;
  Beneficiary?: BeneficiaryResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Content?: ContentResolvers<ContextType>;
  ContentNFT?: ContentNFTResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = VidefiContentTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/videfiContent/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const videfiContentTransforms = [];
const additionalTypeDefs = [] as any[];
const videfiContentHandler = new GraphqlHandler({
              name: "videfiContent",
              config: {"endpoint":"https://api.studio.thegraph.com/query/44385/videfi-gorli/v0.0.7"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("videfiContent"),
              logger: logger.child("videfiContent"),
              importFn,
            });
videfiContentTransforms[0] = new BlockTrackingTransform({
                  apiName: "videfiContent",
                  config: {"validateSchema":true},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'videfiContent',
          handler: videfiContentHandler,
          transforms: videfiContentTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ContentDocument,
        get rawSDL() {
          return printWithCache(ContentDocument);
        },
        location: 'ContentDocument.graphql'
      },{
        document: HomeFeedDocument,
        get rawSDL() {
          return printWithCache(HomeFeedDocument);
        },
        location: 'HomeFeedDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ContentQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ContentQuery = { contentNFT?: Maybe<(
    Pick<ContentNFT, 'id'>
    & { owner: Pick<User, 'id'>, content: (
      Pick<Content, 'contentName' | 'contentSymbol' | 'id' | 'isDAOBeneficiary' | 'mintPrice' | 'tokenURI' | 'limitAmount'>
      & { paymentToken: Pick<Token, 'decimals' | 'id' | 'name' | 'symbol'> }
    ) }
  )> };

export type HomeFeedQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type HomeFeedQuery = { contentNFTs: Array<(
    Pick<ContentNFT, 'id'>
    & { owner: Pick<User, 'id'>, content: (
      Pick<Content, 'contentName' | 'contentSymbol' | 'id' | 'isDAOBeneficiary' | 'mintPrice' | 'tokenURI' | 'limitAmount'>
      & { paymentToken: Pick<Token, 'decimals' | 'id' | 'name' | 'symbol'> }
    ) }
  )> };


export const ContentDocument = gql`
    query Content($id: ID!) {
  contentNFT(id: $id) {
    id
    owner {
      id
    }
    content {
      contentName
      contentSymbol
      id
      isDAOBeneficiary
      mintPrice
      paymentToken {
        decimals
        id
        name
        symbol
      }
      tokenURI
      limitAmount
    }
  }
}
    ` as unknown as DocumentNode<ContentQuery, ContentQueryVariables>;
export const HomeFeedDocument = gql`
    query HomeFeed($first: Int = 20, $skip: Int = 0) {
  contentNFTs(first: $first, skip: $skip) {
    id
    owner {
      id
    }
    content {
      contentName
      contentSymbol
      id
      isDAOBeneficiary
      mintPrice
      paymentToken {
        decimals
        id
        name
        symbol
      }
      tokenURI
      limitAmount
    }
  }
}
    ` as unknown as DocumentNode<HomeFeedQuery, HomeFeedQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    Content(variables: ContentQueryVariables, options?: C): Promise<ContentQuery> {
      return requester<ContentQuery, ContentQueryVariables>(ContentDocument, variables, options) as Promise<ContentQuery>;
    },
    HomeFeed(variables?: HomeFeedQueryVariables, options?: C): Promise<HomeFeedQuery> {
      return requester<HomeFeedQuery, HomeFeedQueryVariables>(HomeFeedDocument, variables, options) as Promise<HomeFeedQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;