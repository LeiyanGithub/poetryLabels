<template>
  <el-form :model="entityForm" ref="entityForm" label-position="left" label-width="100px" class="demo-dynamic">
    <el-from v-for="(entity, index) in entityForm" :key="index">
      <el-form-item :label="'实体' + index +'完整内容'" :prop="'entityForm' + index + '.entityWholeContext'">
        <el-input v-model="entity.entityWholeContext"></el-input>
      </el-form-item>

      <el-form-item :label="'实体' + index +'词性'" :prop="'entityForm.' + index + '.entityNer'">
        <el-radio-group v-model="entity.entityNer">
          <el-radio v-for="entityNer in entity_type" :key="entityNer" :value="entityNer" :label="entityNer">
            {{entityNer}}</el-radio>
        </el-radio-group>
      </el-form-item>

      <div v-if="entity.entityNer === 'Verse'">
        <el-form-item :label="'子实体' +index "  :prop="'entityForm.' + index + '.entitySons'">
          <el-form :model="entityForm[index].entitySons" ref="entityForm[index].entitySons" label-width="100px" label-position="right"
            class="demo-dynamic">
            <el-row v-for="(entitySon, index1) in entity.entitySons" :key="index1">
              <el-col :span="8">
                <el-form-item :label="'子实体' + index1 + ' 内容'" :prop="'entityForm[${index}].entitySons[${index1}].entityContext'">
                  <el-input v-model="entitySon.entityContext"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="实体ID" :prop="'entityForm[${index}].entitySons[${index1}].entityId'">
                  <el-input v-model="entitySon.entityId"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="系统ID" :prop="'entityForm[${index}].entitySons[${index1}].ID'">
                  <el-input v-model="entitySon.ID"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button-group style="float:right">
                <el-button @click="addEntitySon(index)" type="primary" icon="el-icon-plus" size="mini"></el-button>
                <el-button @click="deleteEntitySon(index, index1)" type="primary" icon="el-icon-minus" size="mini">
                </el-button>
              </el-button-group>
            </el-form-item>
          </el-form>
        </el-form-item>
      </div>

      <div v-else-if="entity.entityNer==='Others'">
        <el-input v-model="keywords" placeholder="keywords"></el-input>
      </div>

      <div v-else>
        <el-form-item label='实体ID' :prop="'entityForm.' + index + '.entityId'">
          <el-input v-model="entity.entityId"></el-input>
        </el-form-item>
        <el-form-item label='系统ID' :prop="'entityForm.' + index + '.ID'">
          <el-input v-model="entity.ID"></el-input>
        </el-form-item>
      </div>

    </el-from>
    <el-form-item>
      <p>{{entityForm}}</p>
    </el-form-item>
    <el-form-item>
      <el-button-group style="float:right">
        <el-button @click="addEntity()" type="primary" icon="el-icon-plus" size="mini"></el-button>
        <el-button @click="deleteEntity(entity, index)" type="primary" icon="el-icon-minus" size="mini"></el-button>
      </el-button-group>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        entityForm: [{
          entityWholeContext: '',
          entityNer: '',
          entityId: '',
          ID: '',
          entitySons: []
        }],
        entity_type: ["Poetry", "Verse", "Poetrything", "Genre", "People", "Location", "Dynasty", "Others"]
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
      addEntity() {
        this.entityForm.push({
          entityWholeContext: '',
          entityNer: '',
          entityId: '',
          ID: ''
        })
      },
      deleteEntity(entity, index) {
        this.entityForm.splice(index, 1)
      },
      addEntitySon(index) {
        this.entityForm[index].entitySons.push({
          entityContext: '',
          entityId: '',
          ID: ''
        })
      },
      deleteEntitySon(index, index1) {
        this.entityForm[index].entitySons.splice(index1, 1)
      }
    },
    computed: {
      updateVar(keywords) {
        return "Others : " + keywords
      }
    }
  }

</script>
