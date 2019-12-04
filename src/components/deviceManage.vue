<template>
<div>
    <el-form :model="formDevice" class="device-form" label-width="100px">
         <el-row>
            <el-col :span="6">
                <el-form-item label="Master IP:">
                    <el-input v-model="formDevice.ip" placeholder="源IP"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="6">
                <el-form-item label="Slave IP:">
                    <el-input v-model="formDevice.master" placeholder="目的IP"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="Create Time:">
                    <el-date-picker
                        v-model="formDevice.createTime"
                        type="datetime"
                        placeholder="创建时间"
                        style="width: 100%"
                        default-time="12:00:00">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="2">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>  
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <el-form :model="addDevice" class="device-form" label-width="100px">
        <el-row>
            <el-col :span="6">
                <el-form-item label="IP:">
                    <el-input v-model="addDevice.ip" placeholder="IP"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="6">
                <el-form-item label="port:">
                    <el-input v-model="addDevice.port" placeholder="端口号"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="8">
                <el-form-item label="master:">
                    <el-input v-model="addDevice.master" placeholder="master IP"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="2">
                <el-form-item>
                    <el-button type="primary" @click="onAddDevice">添加</el-button>  
                </el-form-item>
            </el-col>   
        </el-row>
    </el-form>
    <div class="device-table">
    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        prop="id"
        label="序号"
        width="70">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="IP"
        width="220">
      </el-table-column>
       <el-table-column
        prop="port"
        label="端口号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="master"
        label="master"
        width="220">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间"
        width="280">
      </el-table-column>
    </el-table>
    </div>
    <el-pagination
        background
        layout="total, prev, pager, next"
        @current-change="handleCurrentChange"
        :page-size="pagiNation.pageSize"
        :total="totalNum">
    </el-pagination>
</div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            formDevice: {
                ip: '',
                master: '',
                createTime: ''
            },
            addDevice: {
                ip: '',
                port: '',
                master: ''
            },
            pagiNation: {
                pageSize:20,
                pageNum:1
            }
        }
    },
    methods: {
        onSubmit () {
            for (let i in this.formDevice) {
                this.$store.commit('updateParam', {key: i, value: this.formDevice[i]})
            }
            this.$store.dispatch('fetchDevice')
        },
        onAddDevice () {
            this.$store.commit('resetParam');
            for (let i in this.addDevice) {
                this.$store.commit('updateParam', {key: i, value: this.formDevice[i]})
            }
            this.$store.dispatch('addDevice')
        },
        handleCurrentChange (current) {
            this.pagiNation.pageNum = current
            this.$store.commit('updateParam', {key: 'pageNum',value: this.pagiNation.pageNum})
            this.$store.dispatch('fetchDevice')
        }
    },
    computed: {
        tableData () {
            let res = this.$store.getters.getDevice.data
            return res
        },
        totalNum () {
            let res = this.$store.getters.getDevice.totalNum
            return res
        },
        addInfo () {
            let res = this.$store.getters.getInfo
            return res
        }
    },
    watch: {
        addInfo () {
            if (!this.addInfo.result) {
                this.$message({
                    message: this.addInfo.errorMsg,
                    type: 'warning'
                })
            } else {
                this.$message({
                    message: '添加成功，设备ID为'+ this.addInfo.deviceId,
                    type: 'success'
                })
            }
        }
    },
    mounted () {
        this.$store.commit('resetParam')
        for (let i in this.pagiNation) {
            this.$store.commit('updateParam', {key: i, value: this.pagiNation[i]})
        }
        this.$store.dispatch('fetchDevice')
    }
}
</script>
<style scoped>
.device-form {
    margin: 20px;
} 
.device-table {
    width: 75%;
    margin:auto;
}

</style>