<template>
  <div class="app-container">
    <div >
      <div style="margin-left: 30px">
      学期
      <el-select v-model="termId" placeholder="请选择学期" class="filter-item" style="width: 20%;">
        <el-option
          v-for="item in termList"
          :key="item.termId"
          :label="item.termName"
          :value="item.termId">
        </el-option>
      </el-select>
      课程号
      <el-input v-model="courseNum" placeholder="请输入课程号" style="width: 20%;" class="filter-item" />
      课程名
      <el-input v-model="courseName" placeholder="请输入课程名" style="width: 20%;" class="filter-item" />
      <el-button type="primary" @click="selectCourse" >查询</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="success" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>
      </div>
     <div class="container">
      <el-table
        :data="taskList"
        border
        style="width: 100%;"
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
          label="学期"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.termName }}
          </template>
        </el-table-column>
        <el-table-column
          label="课程号"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.courseNum }}
          </template>
        </el-table-column>
        <el-table-column
          label="课程名"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.courseName }}
          </template>
        </el-table-column>
        <el-table-column
          label="课序号"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.courseIndex }}
          </template>
        </el-table-column>
        <el-table-column
          label="课程库学时数"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.classHour }}
          </template>
        </el-table-column>
        <el-table-column
          label="本人学时数"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.realClassHour }}
          </template>
        </el-table-column>
        <el-table-column
          label="选课人数"
          align="center"
          color="black"
        >
          <template slot-scope="scope">
            {{ scope.row.selectNum }}
          </template>
        </el-table-column>
      </el-table>
     </div>
    </div>
  </div>
</template>

<script>
import { teacherCourseTaskQueryInit } from '@/api/coursenew'
import { teacherCourseTaskQuerySelect } from '@/api/coursenew'
import { parseTime } from '@/utils'
export default {
  name: 'TeacherCourseTaskQuery',
  data() {
    return {
      courseNum: '',
      courseName: '',
      termList: [],
      termId: '',
      taskList: [],
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      teacherCourseTaskQueryInit({ 'session': document.cookie }).then(res => {
        this.taskList = res.data.taskList
        this.termList = res.data.termList
        this.termId = res.data.termId
      })
    },
    selectCourse(){
      teacherCourseTaskQuerySelect({ 'session': document.cookie, 'termId': this.termId,
        'courseNum': this.courseNum, 'courseName': this.courseName
      }).then(res => {
        this.taskList = res.data.taskList
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['学期', '课程号', '课程名', '课序号', '课程库学时数','本人学时数','选课人数']
        const filterVal = [ 'termName', 'courseNum', 'courseName', 'courseIndex','classHour','realClassHour','selectNum']
        const list = this.taskList;
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>

<style scoped>
  .container{
    margin :20px;
  }
</style>
