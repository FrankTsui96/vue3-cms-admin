import type { O } from "..";

// 菜单数据
export interface IMenu {
  role_id: string;
  type: "tree";
}
export type OMenu = O<Menu[]>;
export interface Menu {
  permission_id: number;
  parent_id: number;
  permission_code: string;
  permission_remark: string;
  menu_id: number;
  menu_name: string;
  menu_order: string;
  icon_id: number;
  role_id: number;
  role_name: string;
  role_code: string;
  role_description: string;
  resource_type_name: string;
  resource_type_code: string;
  resource_type_id: number;
  route_title: string;
  route_name: string;
  route_path: string;
  route_full_path: string;
  component_name: string;
  component_path: string;
  route_alias: null;
  require_auth: number;
  route_id: number;
  icon_name: string;
  children?: Menu[];
}