<template>
  <div class="app-container">
    <table class="content">
      <tr>
        <td colspan="7" style="font-size: 16px;font-weight: bold;color: #304156 ">辅助信息</td>
      </tr>
      <tr>
        <td colspan="3" >聘用类型</td>
        <td colspan="4">
          <el-select v-model="data.employType" placeholder="请选择聘用类型" style="width: 90%">
          <el-option
            v-for="item in employList"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select></td>
      </tr>
      <tr>
        <td colspan="3" >聘用单位</td>
        <td colspan="4">
          <el-input v-model="data.employUnit" placeholder="请输入内容" style="width: 90%"></el-input>
        </td>
      </tr>
      <tr>
        <td colspan="3" >开户银行</td>
        <td colspan="4">
          <el-input v-model="data.bankName" placeholder="请输入内容" style="width: 90%"></el-input>
        </td>
      </tr>
      <tr>
        <td colspan="3" >银行卡号</td>
        <td colspan="4">
          <el-input v-model="data.bankNo" placeholder="请输入内容" style="width: 90%"></el-input>
        </td>
      </tr>
    </table>
    <div align="center">
    <el-button type="primary" @click="submit" >提交</el-button>
    </div>
  </div>
</template>

<script>
import { personAuxiliaryMaintainInit } from '@/api/personinfo'
import { personAuxiliaryMaintain } from '@/api/personinfo'
export default {
  name: 'PersonAuxiliaryMaintain',
  data() {
    return {
      data: {
        employType: '',
        employUnit: '',
        bankNo: '',
        bankName: ''
      },
      employList: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      personAuxiliaryMaintainInit({ 'session': document.cookie ,'personId': this.$route.query.personId }).then(res => {
        this.employList = res.data.employList
        this.data.employUnit = res.data.employUnit
        this.data.bankNo = res.data.bankNo
        this.data.bankName = res.data.bankName
        this.data.employType = res.data.employType
      })
    },
    submit(){
      personAuxiliaryMaintain({'session': document.cookie , 'employType': this.data.employType,
        'employUnit': this.data.employUnit,'bankNo': this.data.bankNo,'bankName': this.data.bankName,
        'personId': this.$route.query.personId
      }).then(res => {
       if(res.code == '0'){
         this.$message({
           message: '提交成功',
           type: 'success',
           offset: '30'
         });
       }
      })
    }
  }
}
</script>

<style scoped>
  .content{
    width:100%;
    border-top: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-spacing: 0;/*去掉单元格间隙*/
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content tr {
    width : 100% !important;
  }
  .content td {
    padding: 10px 10px;
    border-bottom: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    text-align: center;
    font-size: 16px;
  }
</style>
