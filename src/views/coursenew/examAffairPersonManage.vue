<template>
  <div class="app-container">
    <div>
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
            label="工号"
            align="center"
            color="black"
          >
            <template slot-scope="scope">
              {{ scope.row.perNum }}
            </template>
          </el-table-column>
          <el-table-column
            label="姓名"
            align="center"
            color="black"
          >
            <template slot-scope="scope">
              <el-button type="text" @click="modifyPersonInfo(scope.row.personId)" size="mini">{{ scope.row.perName }}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="center"
            color="black"
          >
            <template slot-scope="scope">
              <el-button type="danger" @click="deletePerson(scope.row.affairPersonId)" size="mini" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div align="center">
        <el-button type="primary" @click="addPerson" >添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { newCultivateExamAffairPersonManageInit } from '@/api/coursenew'
import { newCultivateExamAffairPersonDelete } from '@/api/coursenew'
export default {
  name: 'ExamAffairPersonManage',
  data() {
    return {
      tableList:[]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      newCultivateExamAffairPersonManageInit({ 'session': document.cookie }).then(res => {
        this.tableList = res.data
      })
    },
    deletePerson(affairPersonId){
      newCultivateExamAffairPersonDelete({ 'session': document.cookie, 'affairPersonId': affairPersonId}).then(res => {
         this.fetchData()
      })
    },
    addPerson(){
      this.$router.push({ path: 'examAffairPersonManageAdd'})
    },
    modifyPersonInfo(personId){
      this.$router.push({ path: '/personinfo/personAuxiliaryMaintain', query: { personId }})
    }
  }
}
</script>

<style scoped>
  .container{
    margin :20px;
  }
</style>
