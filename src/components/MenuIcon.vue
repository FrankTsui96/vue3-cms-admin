<script setup lang="ts">
import { AppstoreOutlined, FileTextOutlined, PieChartOutlined } from "@ant-design/icons-vue";
const props = withDefaults(defineProps<{ id: number }>(), { id: 0 });
</script>

<template>
  <pie-chart-outlined v-if="props.id === 139" />
  <file-text-outlined v-else-if="props.id === 172" />
  <appstore-outlined v-else />
</template>

<style scoped lang="scss">

</style>