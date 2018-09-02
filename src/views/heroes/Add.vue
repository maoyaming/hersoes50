<template>
<div>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">添加人物</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtname">
        </div>
         <div class="form-group">
            <label for="exampleInputEmail1">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender">
        </div>
        <button @click.prevent="handelAdd" type="submit" class="btn btn-success">点击添加</button>
    </form>
</div>
</template>
<script>
    // 打通路由


    // 绑定文本框
    // 导入axios
    import axios from 'axios';
    // 点击按钮 获取post 过去的数据 发送post请求
    // 添加成功 重新加载
    export default {
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handelAdd(){
                axios.post('http://localhost:3000/heroes',this.formData)
                    .then((msg)=>{
                        if(msg.status === 201){
                            alert('添加成功');
                            this.$router.push('/heroes')
                        }
                    })
                    .catch((err)=>{
                        console.log(err);
                        
                    })
            }
        }
    }

</script>
<style>

</style>
