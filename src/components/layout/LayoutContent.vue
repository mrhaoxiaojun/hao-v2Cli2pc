<template>
    <div>
        <!-- 这是侧导航 -->
        <common-menu/>
        <div class="common-con-wrap" >
          <transition :name="transitionName">
              <keep-alive :include="/^[\w\W]*_keepAlive$/">
              <router-view  class="layout-view"></router-view>
            </keep-alive>
          </transition>
        </div>
    </div>
</template>
<script>
import commonMenu from '@/components/CommonMenu.vue'

export default {
  name: 'layout',
  data () {
    return {
      transitionName: 'slide-left'

    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  components: {
    'common-menu': commonMenu

  },
  methods: {

  }
}
</script>
<style lang="less">
// 路由内容区域
.common-con-wrap {
  margin-left:216px;
  // min-width: 980px;
  // min-height: 800px;
  // height: calc(100vh - 120px);
  padding: 0 20px 20px 0;
  .layout-view {
    position: absolute;
    top:80px;
    left:216px;
    right: 16px;
    padding:16px;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  }
}

</style>
