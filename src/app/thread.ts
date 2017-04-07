import {Trace} from "./trace";
export class Thread {
  threadName: string;
  threadId: number;
  stackTrace: Trace[];
}
