<template>
  <el-row>
    <el-col :span="4">
      <div>这是一个logo</div>
    </el-col>
    <el-col :span="18">
      <div class="mytitle">电商后台管理系统</div>
    </el-col>
    <el-col :span="2">
      <div class="loginOut">
          <a href="#">退出</a>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
.mytitle{
    color: #fff;
    font-size: 24px;
}
.loginOut {
    text-align: right;
}
.loginOut a{
    color: brown;
}
</style>
