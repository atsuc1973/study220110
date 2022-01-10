// この行を追加
import { Gender } from "./gender";

export type Profile = {
  name: string;
  description: string;
  birthday: string;
  // この行を追加
  gender: Gender;
};
