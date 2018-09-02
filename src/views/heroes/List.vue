<template>
<div>
    <h2 class="sub-header">人物列表---------------</h2>
        <!-- <a  href="add.html">Add</a> -->
        <router-link class="btn btn-success" to="/heroes/add">Add</router-link>
        <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in list" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                <!-- <a href="edit.html" >添加</a>   给添加配置路由 -->
                <router-link :to="'/heroes/edit/' + item.id">修改</router-link>
                &nbsp;&nbsp;
                <a href="javascript:;" @click.prevent="handleDelete(item.id)">删除</a>
                </td>
            </tr>
           <tr>
               <td colspan="4" v-if="list.length == 0">暂无数据</td>
           </tr>
            </tbody>
        </table>
        </div>
</div>
</template>
<script>

    import axios from 'axios';
// 点击添加 路由跳转  
    export default{
        data(){
            return {
                // 列表
                list:[]
            }
        },
        mounted(){
            this.loadData()
        },
        methods:{
            loadData(){
                axios.get('http://localhost:3000/heroes')
                .then((msg)=>{
                    if(msg.status === 200){
                        this.list = msg.data
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })
            },
            handleDelete(id){
                // 删除提示
                if(!confirm('Are you sure?')){
                    return
                }
                axios.delete(`http://localhost:3000/heroes/${id}`)
                    .then((msg)=>{
                        if(msg.status == 200){
                            alert('删除成功');
                            this.loadData()
                        }else{
                            alert('删除失败')
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
