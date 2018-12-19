<template>
  <div class="login">
    <el-form status-icon :model="loginObj" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="mybtn" type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data (){
        return {
            loginObj : {
                username : 'admin',
                password : '123456'
            }
        }
    },
    methods: {
        login() {
            this.$http.post('login', this.loginObj)
                .then(res => {
                    var { data, meta: { msg, status } } = res.data
                    window.localStorage.setItem('token',data.token)
                    if (status === 200) {
                        console.log(data)
                        this.$message({
                            message: msg,
                            type: 'success'
                        })
                        this.$router.push('/home')
                    } else {
                        this.$message.error(msg)
                    }
                })
        }
    }
};
</script>

<style>
.login {
    position: relative;
}

.el-form {
    width: 500px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 30%);
    padding: 40px;
}

.mybtn {
    width: 100%;
    font-size: 20px;
}
</style>
