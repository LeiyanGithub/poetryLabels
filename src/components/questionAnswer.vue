<template>
  <el-form :model="QAForm" ref="QAForm" label-width="100px" class="demo-dynamic">
    <el-from v-for="(qa, index) in QAForm" :key="index">
      <el-form-item :label="'问题词'" :prop="'QAForm' + index + '.question_words'">
        <el-input v-model="qa.question_words"></el-input>
      </el-form-item>

      <el-form-item :label="'问题类型'" :prop="'QAForm.' + index + '.question_type'">
        <el-radio-group v-model="qa.question_type">
          <el-radio v-for="item in question_types" :key="item" :value="item" :label="item">
            {{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="查询路径" :prop="'QAForm.' + index + '.answer_path'">
        <triple @tripleToqa="changeAnswerPath(index, $event)" />
      </el-form-item>

      <el-form-item label="答案ID是否存在" :prop="'QAForm.' + index + '.exist_answer_ID'">
        <el-switch v-model="qa.exist_answer_ID"></el-switch>
      </el-form-item>

      <el-form-item :label="'答案'">
        <el-col :span="8">
          <el-form-item :label="'答案内容'" :prop="'QAForm.' + index + '.answer_context'">
            <el-input v-model="qa.answer_context"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="答案ID" :prop="'QAForm.' + index + '.answer_ID'">
            <el-input v-model="qa.answer_ID"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>
    </el-from>
    
    <el-form-item>
      <el-button-group style="float: right">
        <el-button @click="addQA()" type="primary" icon="el-icon-plus" size="mini"></el-button>
        <el-button @click="deleteQA(index)" type="primary" icon="el-icon-minus" size="mini"></el-button>
      </el-button-group>
    </el-form-item>
  </el-form>
</template>
<script>
  import triple from "./triple.vue";
  export default {
    components: {
      triple,
    },
    data() {
      return {
        QAForm: [{
          question_words: "",
          question_type: "",
          exist_answer_ID: "",
          answer_path: [],
          answer_context: "",
          answer_ID: "",
        }, ],
        question_types: [
          "诗/诗句和人物",
          "诗句和诗",
          "诗词和释义",
          "诗句和释义",
          "诗/诗句和状物",
          "上下句",
          "其他",
        ],
      };
    },
    methods: {
      changeAnswerPath(index, value) {
        this.QAForm[index].answer_path = value;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert("submit!");
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item);
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1);
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: "",
          key: Date.now(),
        });
      },
      addQA() {
        this.QAForm.push({
          question_words: "",
          question_type: "",
          answer_path: [],
          exist_answer_ID: "",
          answer_context: "",
          answer_ID: "",
        });
      },
      deleteQA(index) {
        this.QAForm.splice(index, 1);
      },
    },
  };

</script>
