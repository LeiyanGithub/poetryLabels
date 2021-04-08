<template>
  <el-form :model="Form" ref="Form" label-position="left" label-width="100px" class="demo-ruleForm">
    <el-form-item prop="question">
        <el-input v-model="Form.question" placeholder="问题"></el-input>
    </el-form-item>

    <el-form-item prop="entitys">
      <entity></entity>
    </el-form-item>

    <el-form-item prop="qusetionAnswers">
        <question-answer></question-answer>
    </el-form-item>

  </el-form>
</template>

<script>
import QuestionAnswer from './questionAnswer.vue';
import entity from './entity.vue'

  export default {
    components: {
      entity,
        QuestionAnswer
    },
    data() {
      return {
        Form: {
          question:'',
          entities: [],
          questionAnswers: []
        },
        rules: {
          name: [{
              required: true,
              message: '请输入活动名称',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 5,
              message: '长度在 3 到 5 个字符',
              trigger: 'blur'
            }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
