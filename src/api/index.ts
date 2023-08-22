import Api from "./modules";
import type * as IO from "./types";

export type O<Data> = {
  data: Data;
  msg: string;
  status: boolean;
}

export { Api, type IO };
