<template>

  <el-form :model="entitySons" ref="entitySons" label-position="left" label-width="100px" class="demo-dynamic">
    <el-row v-for="(entitySon, index1) in entitySons" :key="index1">
      <el-col :span="8">
        <el-form-item :label="'子实体' + index1 + ' 内容'" :prop="'entitySons.'+ index1 + '.entityContext'">
          <el-input v-model="entitySon.entityContext"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="实体ID" :prop="'entitySons.'+ index1 + '.entityId'">
          <el-input v-model="entitySon.entityId"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="系统ID" :prop="'entitySons.'+ index1 + '.ID'">
          <el-input v-model="entitySon.ID"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item>
      <el-button-group style="float:right">
        <el-button @click="addEntitySon(index)" type="primary" icon="el-icon-plus" size="mini"/>
        <el-button @click="deleteEntitySon(entitySon, index)" type="primary" icon="el-icon-minus" size="mini"/>
        <el-button @click="submitEntitySon()" type="primary" icon="el-icon-minus" size="mini">传递给父组件</el-button>
      </el-button-group>
    </el-form-item>

    <el-form-item>
      <p> {{entitySons}} </p>
    </el-form-item>

  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        entitySons: [{
          "entityContext": '',
          "entityId": '',
          "ID": ''
        }]
      }
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
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      addEntitySon(index) {
        this.entitySons.push({
          entityContext: '',
          entityId: '',
          ID: ''
        })
      },
      deleteEntitySon(entitySon, index) {
        this.entitySons.splice(index, 1)
      },
      submitEntitySon() {
        this.$emit('entitySonsToEntity', this.entitySons)
      }
    },
  }

</script>
