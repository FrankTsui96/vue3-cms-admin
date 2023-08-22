<script lang="ts" setup>
import { h, onMounted, ref } from "vue";
import { Api } from "../api";
import logo from "@/assets/images/logo.svg";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { ItemType } from "ant-design-vue";
import MenuIcon from "@/components/MenuIcon.vue";

// defineProps<{}>();

const selectedKeys2 = ref<string[]>(["1"]);
const openKeys = ref<string[]>(["sub1"]);
const collapsed = ref(false);

const menuItem = ref<ItemType[]>([]);

onMounted(async () => {
  const res = await Api.Role.menu({ role_id: "1", type: "tree" });
  menuItem.value = res.data.data.map((item) => {
    return {
      title: item.route_title,
      key: item.menu_id,
      label: item.route_title,
      icon: h(MenuIcon, { id: item.icon_id }),
      children: item.children
        ? item.children.map((subItem) => ({
            title: subItem.route_title,
            key: subItem.menu_id,
            label: subItem.route_title,
            icon: h(MenuIcon, { id: subItem.icon_id }),
            onClick: () => {
              console.log(item);
            },
          }))
        : undefined,
      onClick: () => {
        console.log(item);
      },
    };
  });
});
</script>

<template>
  <a-layout>
    <a-layout-header class="header" style="background: #fff">
      <div class="logo">
        <img :src="logo" alt="logo" width="64" />
        <div class="logo-text">弗兰克的<br />视线</div>
      </div>
      <a-space class="options">
        <a-button type="primary" @click="collapsed = !collapsed">
          <menu-unfold-outlined v-if="collapsed" />
          <menu-fold-outlined v-else />
        </a-button>
      </a-space>
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        width="200"
        v-model:collapsed="collapsed"
        theme="light"
        style="overflow-y: auto"
      >
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          :inline-collapsed="collapsed"
          :items="menuItem"
        ></a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Bitstream Vera Serif Bold";
  src: url("@/assets/fonts/LXGWWenKai-Bold.ttf");
}

.header {
  display: flex;
  padding: 0 24px;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(200px - 24px);
    padding-right: 16px;

    .logo-text {
      font-family: "Bitstream Vera Serif Bold", serif;
      font-size: 16px;
      letter-spacing: 4px;
      line-height: 1.6;
      text-align: right;
      user-select: none;
    }
  }
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
