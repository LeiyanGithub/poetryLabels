<template>
  <el-form :model="triples" ref="triples" label-position="left" label-width="100px" class="demo-dynamic">
    <el-row v-for="(triple, index) in triples" :key="index">
      <el-col :span="8">
        <el-form-item :prop="'triples.' + index + '.first'">
          <el-input v-model="triple.first"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :prop="'triples.' + index + '.second'">
          <el-select v-model="triple.second" filterable placeholder="请选择">
            <el-option v-for="item in relation_options" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item :prop="'triples.' + index + '.third'">
          <el-input v-model="triple.third"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-form-item>
      <el-button-group style="float: right">
        <el-button @click="addTriple()" type="primary" icon="el-icon-plus" size="mini" />
        <el-button @click="deleteTriple(index)" type="primary" icon="el-icon-minus" size="mini" />
        <el-button @click="submitTriple()" type="primary" icon="el-icon-minus" size="mini">传递给父组件</el-button>
      </el-button-group>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        triples: [{
          first: "",
          second: "",
          third: "",
        }],
        relation_options: [
          "poetryBelongTo",
          "poetryMentionPeopleTo",
          "poetryMentionDynastyTo",
          "poetryBelongDynastyTo",
          "poetryBelongGenreTo",
          "poetryMentionPlaceTo",
          "poetryMentionThingTo",
          "peopleBelongDynastyTo",
          "verseBelongTo",
          "verseBelongToPeople",
          "verseBelongDynastyTo",
          "verseMentionPeopleTo",
          "verseMentionPlaceTo",
          "verseMentionThingTo",
          "verseMentionGenreTo",
          "verseBeforeTo",
          "verseNextTo",
          "poetryId",
          "poetryName",
          "poetryAuthor",
          "poetryTranslation",
          "poetryContext",
          "dynasty",
          "poetryTranslation",
          "poetryClass",
          "poetryBackground",
          "poetryAppreciation",
          "poetryId",
          "verseContext",
          "verseAuthor",
          "verseDynasty",
          "verseId",
          "poetrythingId",
          "poetrythingName",
          "poetrythingMeaning",
          "peopleId",
          "peopleName",
          "peopleNickname",
          "peopleBurnPlace",
          "peopleBurnYear",
          "peopleIntroduction",
          "peopleAchievements",
          "genreId",
          "genreName",
          "locationId",
          "locationName",
          "dynastyId",
          "dynastyName",
          "dynastyBegin",
          "dynastyEnd",
          "Others",
        ],
      };
    },
    methods: {
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
      addTriple(index) {
        this.triples.push({
          first: "",
          second: "",
          third: "",
        });
      },
      deleteTriple(index) {
        this.triples.splice(index, 1);
      },
      submitTriple() {
        this.$emit("tripleToqa", this.triples);
      },
    },
  };

</script>
