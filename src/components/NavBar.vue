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
            <div class="user-box">
                <div class="app-guide"></div>
                <div class="login-regist-group">
                    <span class="btn btn-login">登录</span>
                    <span class="btn btn-regist">注册</span>
                </div>
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
    .nav-bar {
        width: 100%;
        height: 72px;
        background: #fff;
        .container {
            @include flex(row, space-between, stretch);
            height: 72px;
            padding: 0 15px;
        }
        .logo {
            width: 120px;
            background: none left center no-repeat;
            flex: 0 0 auto;
        }
        .nav-list {
            margin-left: 36px;
            flex: 1 1 auto;
            @include flex(row, flex-start, stretch);
            .nav-item {
                position: relative;
                &.active:before {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 9px;
                    background: #3f83fe;
                    content: '';
                }
                .nav-link {
                    height: 100%;
                    padding: 0 24px;
                    @include flex(row);
                }
                .dropmenu-list {
                    position: absolute;
                    left: 50%;
                    margin-top: 20px;
                    transform: translateX(-50%);
                    display: none;
                    background: #fff;
                    border-radius: 5px;
                    padding: 10px;
                    &:before {
                        position: absolute;
                        top: -20px;
                        left: 0;
                        width: 100%;
                        height: 20px;
                        content: '';
                    }
                    &:after {
                        position: absolute;
                        top: -20px;
                        left: 50%;
                        margin-left: -10px;
                        width: 0;
                        height: 0;
                        border: 10px solid transparent;
                        border-bottom: 10px solid #fff;
                        content: '';
                    }
                    .dropmenu-item {
                        position: relative;
                        text-align: center;
                        padding: 0 30px;
                        line-height: 50px;
                        white-space: nowrap;
                        border-bottom: 1px solid transparent;
                        &:hover {
                            border-bottom-color: #5082ff;
                        }          
                    }
                }
                &:hover .dropmenu-list {
                    display: block;
                }
            }
        }
        .user-box {
            flex: 0 0 auto;
        }
        
    }
</style>

