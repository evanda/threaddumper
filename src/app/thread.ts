import {Trace} from "./trace";
export class Thread {
  threadName: string;
  threadId: number;
  threadState: string;

  lockName: string;
  lockOwnerId: number;
  lockOwnerName: string;

  blockedTime: number;
  blockedCount: number;
  waitedTime: number;
  waitedCount: number;

  isNative: boolean;
  suspended: boolean;

  stackTrace: Trace[];
}
