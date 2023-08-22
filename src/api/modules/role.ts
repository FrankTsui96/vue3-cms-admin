import request from "../request";
import { IO } from "..";

export default {
  // 菜单数据
  menu: (params: IO.Role.IMenu) => request.get<IO.Role.OMenu>("/role/menu", { params })
};