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
        <el-form-item :label="'实体' + index "  :prop="'entityForm.' + index + '.entitySons'">
         <entity-son @entitySonsToEntity="changEntitySons(index, $event)"/>
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
import EntitySon from './entitySon.vue';
  export default {
    components:{
      EntitySon
    },
    data() {
      return {
        entityForm: [{
          entityWholeContext: '',
          entityNer: '',
          entityId: '',
          ID: '',
          entitySons: []
        }],
        entitySons: [],
        entity_type: ["Poetry", "Verse", "Poetrything", "Genre", "People", "Location", "Dynasty", "Others"]
      };
    },
    methods: {
     changEntitySons(index, value) {
       this.entitySons = value
       this.entityForm[index].entitySons = value
     },
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
          ID: '',
          entitySons: ''
        })
      },
      deleteEntity(entity, index) {
        this.entityForm.splice(index, 1)
      }
    },
    computed: {
      updateVar(keywords) {
        return "Others : " + keywords
      },
    }
  }

</script>
