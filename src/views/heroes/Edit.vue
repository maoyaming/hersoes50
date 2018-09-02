<template>
<div>
    <h2 class="sub-header">修改 人物</h2>
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">修改人物</label>
            <input v-model="formData.name" type="text" class="form-control" id="txtname">
        </div>
         <div class="form-group">
            <label for="exampleInputEmail1">性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="txtgender">
        </div>
        <button @click.prevent="handleEdit" type="submit" class="btn btn-success">点击修改</button>
    </form>
</div>
</template>
<script>
    // 打通路由


    // 绑定文本框
    // 导入axios

    // 点击按钮 获取post 过去的数据 发送post请求
    // 添加成功 重新加载
    export default {

        props:['id'],
        data(){
            return {
                formData:{
                    name:'',
                    gender:''
                }
            }
        },
        mounted(){
            this.loadData()
        },
        
        methods:{
           loadData(){
                this.$http.get(`heroes/${this.id}`)
                   .then((msg)=>{
                       this.formData = msg.data
                   }) 
                   .catch((err)=>{
                       console.log(err);
                       
                   })
           },
           handleEdit(){
                this.$http.put(`heroes/${this.id}`,this.formData)
                .then((msg)=>{
                    if(msg.status == 200){
                        this.$router.push('/heroes')
                    }else{
                        alert('修改失败')
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
