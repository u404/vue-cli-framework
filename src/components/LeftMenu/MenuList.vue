<template>
    <ul class="menu-list" :class="'menu-list-' + deep">
        <li class="menu" :class="{active: activeIndexList.indexOf(index) > -1}" v-for="(item, index) in list" :key="'lm-' + deep + '-' + index">
            <span class="menu-text" v-if="item.children" @click="toggleActive(index)">{{item.name}}</span>
            <router-link class="menu-text" v-else-if="item.path" :to="item.path">{{item.name}}</router-link>
            <span class="menu-text" v-else>{{item.name}}</span>
            <transition name="dropdown" appear>
                <menu-list v-if="item.children" :list="item.children" :deep="deep + 1" v-show="activeIndexList.indexOf(index) > -1"></menu-list>
            </transition>
        </li>
    </ul>
</template>


<script>
    import MenuList from './MenuList.vue'
    export default {
        name: 'menu-list',
        props: {
            list: {
                type: Array
            },
            activeIndex: Number,
            deep: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                activeIndexList: []
            }
        },
        created() {
            (this.activeIndex || this.activeIndex === 0) && this.activeIndexList.push(this.activeIndex);
        },
        methods: {
            toggleActive(index) {
                var i = this.activeIndexList.indexOf(index);
                if(i > -1) {
                    this.activeIndexList.splice(i, 1);
                } else {
                    this.activeIndexList.push(index);
                }
            }
        },
        components: {
            MenuList
        }
    }
</script>