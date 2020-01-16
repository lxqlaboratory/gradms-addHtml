<template>
  <div class="app-container">
    <div style="margin-left: 30px">
      工号
      <el-input v-model="perNum" placeholder="请输入工号" style="width: 20%;" class="filter-item" />
      姓名
      <el-input v-model="perName" placeholder="姓名" style="width: 20%;" class="filter-item" />
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
            {{ scope.row.perName }}
          </template>
        </el-table-column>
        <el-table-column
          label="监考老师1"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-button type="danger" @click="deletePerson(scope.row.affairPersonId)" size="mini" >删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="监考老师2"
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
      <el-button type="primary" @click="addPerson" >提交</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'examArrangeManage',
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
      }
    }
  }
</script>

<style scoped>
  .container{
    margin :20px;
  }
</style>
