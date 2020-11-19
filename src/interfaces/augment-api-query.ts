// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeSet, Bytes, Option, Vec, bool, u32 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { DidStruct, PeerId } from './metablockchain';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { ProposalIndex, Votes } from '@polkadot/types/interfaces/collective';
import type { Proposal } from '@polkadot/types/interfaces/democracy';
import type { SetId, StoredPendingChange, StoredState } from '@polkadot/types/interfaces/grandpa';
import type { AccountId, Balance, BlockNumber, ExtrinsicsWeight, Hash, Moment, Releases } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { SessionIndex } from '@polkadot/types/interfaces/session';
import type { AccountInfo, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { TreasuryProposal } from '@polkadot/types/interfaces/treasury';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    balances: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this module is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>> & QueryableStorageEntry<ApiType>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>> & QueryableStorageEntry<ApiType>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>> & QueryableStorageEntry<ApiType>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>> & QueryableStorageEntry<ApiType>;
    };
    council: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>> & QueryableStorageEntry<ApiType>;
    };
    did: {
      [key: string]: QueryableStorageEntry<ApiType>;
      diDs: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<DidStruct>> & QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<SetId>> & QueryableStorageEntry<ApiType>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<BlockNumber>>> & QueryableStorageEntry<ApiType>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<StoredPendingChange>>> & QueryableStorageEntry<ApiType>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: SetId | AnyNumber | Uint8Array) => Observable<Option<SessionIndex>>> & QueryableStorageEntry<ApiType>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[BlockNumber, BlockNumber]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<StoredState>> & QueryableStorageEntry<ApiType>;
    };
    nodeAuthorization: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The additional adapative connections of each node.
       **/
      additionalConnections: AugmentedQuery<ApiType, (arg: PeerId | string | Uint8Array) => Observable<BTreeSet<PeerId>>> & QueryableStorageEntry<ApiType>;
      /**
       * A map that maintains the ownership of each node.
       **/
      owners: AugmentedQuery<ApiType, (arg: PeerId | string | Uint8Array) => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
      /**
       * The set of well known nodes. This is stored sorted (just by value).
       **/
      wellKnownNodes: AugmentedQuery<ApiType, () => Observable<BTreeSet<PeerId>>> & QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>> & QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>> & QueryableStorageEntry<ApiType>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>> & QueryableStorageEntry<ApiType>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>> & QueryableStorageEntry<ApiType>;
    };
    schema: {
      [key: string]: QueryableStorageEntry<ApiType>;
      schema: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Bytes]>>>> & QueryableStorageEntry<ApiType>;
    };
    sudo: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>> & QueryableStorageEntry<ApiType>;
    };
    system: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>> & QueryableStorageEntry<ApiType>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ExtrinsicsWeight>> & QueryableStorageEntry<ApiType>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>> & QueryableStorageEntry<ApiType>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>> & QueryableStorageEntry<ApiType>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>> & QueryableStorageEntry<ApiType>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>> & QueryableStorageEntry<ApiType>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>> & QueryableStorageEntry<ApiType>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>> & QueryableStorageEntry<ApiType>;
      /**
       * Extrinsics root of the current block, also part of the block header.
       **/
      extrinsicsRoot: AugmentedQuery<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>> & QueryableStorageEntry<ApiType>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>> & QueryableStorageEntry<ApiType>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>> & QueryableStorageEntry<ApiType>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>> & QueryableStorageEntry<ApiType>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>> & QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      [key: string]: QueryableStorageEntry<ApiType>;
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>> & QueryableStorageEntry<ApiType>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>> & QueryableStorageEntry<ApiType>;
    };
    treasury: {
      [key: string]: QueryableStorageEntry<ApiType>;
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<ProposalIndex>>> & QueryableStorageEntry<ApiType>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<ProposalIndex>> & QueryableStorageEntry<ApiType>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: ProposalIndex | AnyNumber | Uint8Array) => Observable<Option<TreasuryProposal>>> & QueryableStorageEntry<ApiType>;
      /**
       * Simple preimage lookup from the reason's hash to the original data. Again, has an
       * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
       **/
      reasons: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Bytes>>> & QueryableStorageEntry<ApiType>;
    };
    validatorSet: {
      [key: string]: QueryableStorageEntry<ApiType>;
      memberCount: AugmentedQuery<ApiType, () => Observable<u32>> & QueryableStorageEntry<ApiType>;
      members: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[]>>> & QueryableStorageEntry<ApiType>;
    };
    verifiedCredential: {
      [key: string]: QueryableStorageEntry<ApiType>;
      vc: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[AccountId, Hash]>>>> & QueryableStorageEntry<ApiType>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
    [key: string]: QueryableModuleStorage<ApiType>;
  }
}
