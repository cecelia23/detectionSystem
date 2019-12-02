<template>
    <div>
        <el-form :model="formPackage" class="package-form" label-width="80px">
         <el-row>
            <el-col :span="6">
                <el-form-item label="源IP:">
                    <el-input v-model="formPackage.sourceIp" placeholder="源IP"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="6">
                <el-form-item label="源端口:">
                    <el-input v-model="formPackage.sourcePort" placeholder="源端口"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="6">
                <el-form-item label="目的IP:">
                    <el-input v-model="formPackage.destIp" placeholder="目的IP"></el-input>
                </el-form-item>
            </el-col>   
            <el-col :span="6">
                <el-form-item label="目的端口:">
                    <el-input v-model="formPackage.destPort" placeholder="目的端口"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <el-form-item label="开始时间:">
                    <el-date-picker
                        v-model="formPackage.startTime"
                        type="datetime"
                        placeholder="开始时间"
                        style="width: 100%"
                        default-time="12:00:00">
                    </el-date-picker>
                </el-form-item>
            </el-col>   
            <el-col :span="6">
                <el-form-item label="结束时间:">
                   <el-date-picker
                        v-model="formPackage.endTime"
                        type="datetime"
                        placeholder="结束时间"
                        style="width: 100%"
                        default-time="12:00:00">
                    </el-date-picker>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="是否为异常流量:" label-width="135px">
                    <el-checkbox-group v-model="formPackage.isAbnormal">
                        <el-checkbox label="异常流量"></el-checkbox>
                        <el-checkbox label="白名单"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </el-col>
            <el-col :span="2">
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>  
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <div class="package-table">
        <el-table
        :data="packageData"
        style="width: 800%">
        <el-table-column
            prop="id"
            label="id"
            width="100">
        </el-table-column>
        <el-table-column
            prop="srcIp"
            label="srcIp"
            width="80">
        </el-table-column>
        <el-table-column
            prop="srcPort"
            label="srcPort"
            width="70">
        </el-table-column>
        <el-table-column
            prop="dstIp"
            label="dstIp"
            width="80">
        </el-table-column>
        <el-table-column
            prop="dstPort"
            label="dstPort"
            width="50">
        </el-table-column>
        <el-table-column
            prop="dataLength"
            label="dataLength"
            width="55">
        </el-table-column>
        <el-table-column
            prop="unitIndentifier"
            label="unitIndentifier"
            width="120">
        </el-table-column>
        <el-table-column
            prop="functionCode"
            label="functionCode"
            width="80">
        </el-table-column>
        <el-table-column
            prop="reference"
            label="reference"
            width="90">
        </el-table-column>
          <el-table-column
            prop="count"
            label="count"
            width="60">
        </el-table-column>
        <el-table-column
            prop="interval"
            label="interval"
            width="80">
        </el-table-column>
        <el-table-column
            prop="packetTime"
            label="packetTime"
            width="100">
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
export default {
    data () {
        return {
            formPackage: {
                sourceIp: '',
                sourcePort: '',
                destIp: '',
                destPort: '',
                startTime: '',
                endTime: '',
                isAbnormal: ['异常流量']
            },
            pagiNation: {
                pageSize:20,
                pageNum:1
            }
        }  
    },
    computed: {
        packageData () {
            let res = this.$store.getters.getPackage.data
            return res
        },
        totalNum () {
            let res = this.$store.getters.getPackage.totalNum
            return res
        }
    },
    mounted () {
        this.$store.commit('resetParam')
        for (let i in this.pagiNation) {
            this.$store.commit('updateParam', {key: i, value: this.pagiNation[i]})
        }
        this.$store.dispatch('fetchPackage')
    }
}
</script>
<style scoped>
.package-form {
    margin: 20px 0;
}
.package-table {
    margin:0 20px;
}
</style>