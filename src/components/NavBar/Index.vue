<template>
    <nav class="nav-bar">
        <div class="container">
            <div class="logo" :style="{'background-image': 'url(' + config.logo + ')'}"></div>
            <ul class="nav-list">
                <li class="nav-item" :class="{ active: navIndex == activeNavIndex }" v-for="(navItem,navIndex) in config.navList" :key="navItem.name" @click="setActiveIndex(navIndex)">
                    <router-link class="nav-link" :to="navItem.path">{{navItem.name}}</router-link>
                    <ul class="dropmenu-list" v-if="navItem.children">
                        <li class="dropmenu-item" v-for="dropmenuItem in navItem.children" :key="dropmenuItem.name" @click="setActiveIndex(navIndex)">
                            <router-link class="dropmenu-link" :to="dropmenuItem.path">{{dropmenuItem.name}}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="app-download">
                <a href="#" class="icon-phone"></a>
                <img src="/static/img/app-download.png" alt="" class="dropmenu">
            </div>
            <div class="user-box">
                <div class="login-regist-group">
                    <span class="btn btn-login">登录</span>
                    <span class="btn btn-regist">注册</span>
                </div>
                <div class="user-avator" style="background-image: url(/static/img/app-download.png);"></div>
            </div>
        </div>    
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                config: 'NavBar.json',
                activeNavIndex: 0 
            }
        },
        methods: {
            setActiveIndex(navIndex){
                this.activeNavIndex = navIndex
            }
        }
    }
</script>
<style scoped lang="scss">
    @import 'Index.scss';
</style>

