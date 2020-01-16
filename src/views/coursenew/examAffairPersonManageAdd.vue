<template>
  <div class="app-container">
    <div style="margin-left: 30px">
      工号
      <el-input v-model="perNum" placeholder="请输入工号" style="width: 20%;" class="filter-item" />
      姓名
      <el-input v-model="perName" placeholder="姓名" style="width: 20%;" class="filter-item" />
      <el-button type="primary" @click="selectPerson">查询</el-button>
    </div>
    <div class="container">
      <el-table
        :data="tableList"
        border
        style="width: 100%;"
        size="mini"
        :header-cell-style="{background:'#eef1f6',color:'#606266',fontSize: '14px'}"
      >
        <el-table-column
          label="序号"
          fixed="left"
          width="70"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.$index+1 }}
          </template>
        </el-table-column>
        <el-table-column
          label="学院名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.collegeName }}
          </template>
        </el-table-column>
        <el-table-column
          label="教师姓名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-button type="text" @click="addPerson(scope.row.personId)" size="mini">{{ scope.row.perName }}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="二级学院名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.collegeName }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { getPersonInfoListByPerNumName } from '@/api/coursenew'
  import { getPersonInfoListByPerNumNameQuery } from '@/api/coursenew'
  import { newCultivateExamAffairPersonAdd } from '@/api/coursenew'
export default {
  name: 'ExamAffairPersonManageAdd',
  data() {
    return {
      perNum: '',
      perName: '',
      tableList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getPersonInfoListByPerNumName({ 'session': document.cookie }).then(res => {
        this.tableList = res.data
    })
    },
    selectPerson(){
      getPersonInfoListByPerNumNameQuery({ 'session': document.cookie ,'perNum': this.perNum ,'perName': this.perName }).then(res=>{
        this.tableList = res.data
      })
    },
    addPerson(personId) {
      newCultivateExamAffairPersonAdd({ 'session': document.cookie ,'personId': personId }).then(res=>{
        if(res.code == '0')
        {
          this.$router.push({ path: 'examAffairPersonManage' })
        }else {
          this.$message({
            message: '已经存在不能添加！',
            type: 'warning'
          });
        }
      })
    }
  }
}
</script>

<style scoped>
  .container{
    margin :20px;
  }
</style>
