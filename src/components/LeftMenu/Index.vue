<template>
    <div class="left-menu">
        <div class="menu-header">
            <div class="menu-title">管理中心</div>
        </div>
        <menu-list :list="config.menuList" :active-index="0"></menu-list>
    </div>
</template>
<script>
    import MenuList from "./MenuList.vue";
    export default {
        data() {
            return {
                config: 'LeftMenu.json'
            }
        },
        methods: {
        },
        components: {
            MenuList
        }
    }
</script>
<style lang="scss" src="./Index.scss" scoped></style>
