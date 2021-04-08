<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="实体完整内容" prop="name">
    <el-input v-model="ruleForm.entityWholeContext"></el-input>
  </el-form-item>
  
  <el-form-item label="实体词性识别" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
      <el-option label="Poetry" value="Poetry"></el-option>
      <el-option label="Verse" value="Verse"></el-option>
      <el-option label="Poetrything" value="Poetrything"></el-option>
      <el-option label="Genre" value="Genre"></el-option>
      <el-option label="People" value="People"></el-option>
      <el-option label="Dynasty" value="Dynasty"></el-option>
      <el-option label="Location" value="Location"></el-option>
      <el-option label="Others" value="Others"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="问题词" prop="question_words">
    <el-input v-model="ruleForm.question_word"></el-input>
  </el-form-item>

  <el-form-item label="问题类型" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="诗/诗句和人的关系" name="type"></el-checkbox>
      <el-checkbox label="诗句和诗的关系" name="type"></el-checkbox>
      <el-checkbox label="诗/诗句和状物的关系" name="type"></el-checkbox>
      <el-checkbox label="诗句和诗句释义" name="type"></el-checkbox>
      <el-checkbox label="诗和词诗句释义" name="type"></el-checkbox>
      <el-checkbox label="上下句" name="type"></el-checkbox>
      <el-checkbox label="其他" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>

  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="查询路径" prop="desc">
    <el-col :span='4'>
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-col>
    <el-col :span='4'>
      <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
    </el-col>
    <el-col :span='4'>
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-col>
  </el-form-item>

  <el-form-item label="答案内容" prop="name">
    <el-input v-model="ruleForm.entityWholeContext"></el-input>
    <el-input v-model="ruleForm.entityWholeContext"></el-input>
  </el-form-item>

  <el-form-item label="答案是否存在">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
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
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
          { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
          { "value": "阳阳麻辣烫", "address": "天山西路389号" },
          { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
        ];
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>