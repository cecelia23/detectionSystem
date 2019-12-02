<template>
    <div>
        <el-form :model="formSequence" class="sequence-form" label-width="80px">
            <el-row>
                <el-col :span="8">
                    <el-form-item label="源IP:">
                        <el-input v-model="formSequence.sourceIp" placeholder="源IP"></el-input>
                    </el-form-item>
                </el-col>   
                <el-col :span="8">
                    <el-form-item label="源端口:">
                        <el-input v-model="formSequence.sourcePort" placeholder="源端口"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="目的IP:">
                        <el-input v-model="formSequence.destIp" placeholder="目的IP"></el-input>
                    </el-form-item>
                </el-col>   
                <el-col :span="8">
                    <el-form-item label="目的端口:">
                        <el-input v-model="formSequence.destPort" placeholder="目的端口"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8">
                    <el-form-item label="开始时间:">
                        <el-date-picker
                            v-model="formSequence.startTime"
                            type="datetime"
                            placeholder="开始时间"
                            style="width: 100%"
                            default-time="12:00:00">
                        </el-date-picker>
                    </el-form-item>
                </el-col>   
                <el-col :span="8">
                    <el-form-item label="结束时间:">
                    <el-date-picker
                            v-model="formSequence.endTime"
                            type="datetime"
                            placeholder="结束时间"
                            style="width: 100%"
                            default-time="12:00:00">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">搜索</el-button>  
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="sequence-table">
            <el-table
            :data="sequenceData"
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
                width="70">
            </el-table-column>
            <el-table-column
                prop="sequenceWindowSize"
                label="sequenceWindowSize"
                width="168">
            </el-table-column>
            <el-table-column
                prop="sequence"
                label="sequence"
                width="120">
            </el-table-column>
            <el-table-column
                prop="frameSequence"
                label="frameSequence"
                width="125">
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
            formSequence: {
                sourceIp: '',
                sourcePort: '',
                destIp: '',
                destPort: '',
                startTime: '',
                endTime: ''
            },
            pagiNation: {
                pageSize:20,
                pageNum:1
            }
        }
    },
    computed: {
        sequenceData () {
            let res = this.$store.getters.getSequence.data
            return res
        },
        totalNum () {
            let res = this.$store.getters.getSequence.totalNum
            return res
        }
    },
    mounted () {
        this.$store.commit('resetParam')
        for (let i in this.pagiNation) {
            this.$store.commit('updateParam', {key: i, value: this.pagiNation[i]})
        }
        this.$store.dispatch('fetchSequence')
    },
}

</script>

<style scoped>
.sequence-form {
    margin: 20px 20px;
}
.sequence-table {
    margin: 0 20px;
}
</style>