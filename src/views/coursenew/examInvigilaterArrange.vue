<template>
  <div class="app-container">
    <div style="margin-left: 30px">
     学期
      <el-input v-model="perNum" placeholder="请输入学期" style="width: 20%;" class="filter-item" />
      <el-button type="primary" @click="selectPerson">查询</el-button>
    </div>
    <div class="container">
      <el-table
        :data="examList"
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
          label="考试日期"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.examDate }}
          </template>
        </el-table-column>
        <el-table-column
          label="监考老师1"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-select v-model="scope.row.invigilater1" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.personId"
                :label="item.perNumName"
                :value="item.personId">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="监考老师2"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            <el-select v-model="scope.row.invigilater2" placeholder="请选择">
              <el-option
                v-for="item in selectList"
                :key="item.personId"
                :label="item.perNumName"
                :value="item.personId">
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div align="center">
      <el-button type="primary" @click="submitTableData">提交</el-button>
    </div>
  </div>
</template>

<script>
import { newCultivateExamexamInvigilaterArrangeInit } from '@/api/coursenew'
import { newCultivateExamexamInvigilaterArrangeSubmit } from '@/api/coursenew'
export default {
  name: 'ExamInvigilaterArrange',
  data() {
    return {
      examList: [],
      selectList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      newCultivateExamexamInvigilaterArrangeInit({ 'session': document.cookie }).then(res => {
        this.examList = res.data.examList
        this.selectList = res.data.selectList
      })
    },
    submitTableData() {
      newCultivateExamexamInvigilaterArrangeSubmit({ 'session': document.cookie, 'examList': this.examList }).then(res => {
        if(res.code == '0'){
          this.$message({
            message: '提交成功',
            type: 'success'
          });
          this.fetchData()
        }
        else{
          this.$message({
            message: '提交失败',
            type: 'error'
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
