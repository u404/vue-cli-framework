<template>
    <nav class="nav-bar">
        <div class="container">
            <div class="logo" :style="{'background-image': 'url(' + config.logo + ')'}"></div>
            <div class="user-box dropdown-menu-box">
                <div class="user-avator" style="background-image: url(/resources/img/app-download.png);"></div>
                <div class="user-name">用户名</div>
                <div class="dropdown-menu">
                    <ul class="menu-list">
                        <li class="menu">退出登录</li>
                    </ul>
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
<style lang="scss" src="./Index.scss" scoped></style>

