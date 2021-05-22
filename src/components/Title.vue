<template>
  <div class="title">
    <div class="title-header">
      <div class="title-name">{{ titleName }}</div>
      <div class="title-line"></div>
    </div>

    <div class="content-con">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    titleName: String,
  },
  
};
</script>

<style scoped lang="less">
@import "../assets/css/variable";
@import url("../assets/css/theme.less");

@import "./title.less";


// .title {
//   // margin-top: 10px;
//   .title-header {
//     border-left: 4px solid #ddd;
//     display: flex;
//     margin: 16px 0;
//     padding-left: 40px;
//     .title-name {
//     // width: 120px;
//     font-size: 28px;
//     margin-right: 8px;
//     // color: @SeaGreen;
//     color: #2E8B57;
//   }
//   .title-line {
//     flex: 1;
//     height: 4px;
//     border: 0;
//     background: linear-gradient(90deg, rgba(51, 125, 242, 0.6) 0%, #fff 100%);
//     background: linear-gradient(90deg, rgba(46, 149, 87, 0.6) 0%, #fff 100%);
//     margin: 16px 0;
//   }
//   }
  
//   .content-con {
//     // border-left: 4px solid @SeaGreen;
//     border-left: 4px solid #2E8B57;
//     padding-left: 40px;

//   }
// }
</style>
