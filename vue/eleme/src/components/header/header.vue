<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="" />
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports" 
            @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
            <div class="background">
                <img :src="seller.avatar" width="100%" height="100%" alt="">
            </div>
            <div class="detail" v-show="detailShow">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <div class="name">{{seller.name}}</div>
                        <div class="star-wrapper">
                        
                        </div>
                        <div class="title">
                            <div class="line">
                            </div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                        </div>
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>
                    <div class="detail-close" @click="hideDetail">
                        <i class="icon-close"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 
export default {
    props: {
        seller: {
            type: Object
        }
    },
    data() {
        return {
            classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
            detailShow: false
        }
    },
    methods: {
        showDetail() {
            this.detailShow = true
        },
        hideDetail() {
            this.detailShow = false
        }
    }
}
</script>
<style  lang="stylus" scoped>
@import '../../common/stylus/mixin';

.header
    position relative
    overflow hidden
    color #fff
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
        position relative
        padding 24px 12px 18px 24px
        font-size 0 
        .avatar
            display inline-block
            vertical-align top
            img
                border-radius 2px
        .content
            display inline-block
            margin-left 16px
            .title
                margin 2px 0 8px 0
                .brand
                    display inline-block
                    vertical-align: top
                    width 30px
                    height 18px
                    bg-image('brand')
                    background-size 30px 18px
                    background-repeat no-repeat
                .name
                    margin-left 6px
                    font-size 16px
                    line-height 18px
                    font-weight bold
            .description
                margin-bottom 10px
                line-height 12px
                font-size 12px
            .support
                .icon
                    display inline-block
                    vertical-align top
                    width 12px
                    height 12px
                    margin-right 4px
                    background-size 12px 12px
                    background-repeat no-repeat
                    &.decrease
                        bg-image('decrease_1')
                .text
                    line-height 12px
                    font-size 10px
        .support-count
            position absolute
            right 12px
            bottom 14px
            padding 0 8px
            height 24px
            line-height 24px
            border-radius 14px
            background rgba(0,0,0,0.2)
            text-align center
            .count
                vertical-align top
                font-size 10px
            .icon-keyboard_arrow_right
                margin-left 2px
                line-height 24px
                font-size 10px
        .background
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            z-index -1
            filter blur(10px)
        .detail
            position fixed
            z-index 100
            top 0
            left 0
            width 100%
            height 100%
            overflow auto
            backdrop-filter blur(10px)
            opacity 1
            background rgba(7, 17, 27, 0.8)
            .detail-wrapper
                width 100%
                min-height 100%
                .detail-main
                    margin-top 64px
                    padding-bottom 64px
                    .name
                        line-height 16px
                        text-align center
                        font-size 16px
                        font-weight 700
                    .title
                        display flex
                        width 80%
                        margin 28px auto 24px auto
                        .line
                            flex 1
                            position relative
                            top -6px
                            border-bottom 1px solid rgba(255, 255, 255, 0.2)
                        .text
                            padding 0 12px
                            font-weight 700
                            font-size 14px
                    .bulletin
                        width 80%
                        margin 0 auto
                    .content
                        padding 0 12px
                        line-height 24px
                        font-size 12px

            .detail-close
                position relative
                width 32px
                height 32px
                margin -64px auto 0 auto
                clear both
                font-size 32px

</style>