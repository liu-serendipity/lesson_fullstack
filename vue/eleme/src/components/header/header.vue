<template>
    <div class="header">
        <div class="content-Wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" alt="" />
            </div>
            <div class="content">
                <div class="title">
                    <div class="brand"></div>
                    <div class="name">{{seller.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            seller: {
                type: Object
            }
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl';

    .header 
        position relative
        overflow hidden
        color #fff
        background rgba(7, 17, 27, 0.5)
        .content-Wrapper
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
                        vertical-align top
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
</style>