<template>
  <div class="mr-10 ml-10 mb-20">
    <el-form
      ref="params"
      :model="params"
      :rules="paramsRules"
      label-width="74px"
      class="mt-20"
    >
      <el-form-item label="任务名称">
        <el-input
          v-model="params.link"
          placeholder="例：前端库-chat问答"
        ></el-input>
      </el-form-item>

      <el-form-item label="匹配网址" prop="title">
        <div class="row w-p100">
          <el-input
            class="flex-1"
            v-model="params.url"
            placeholder="/SEO/index${*}.html"
          ></el-input>
        </div>
      </el-form-item>

      <el-form-item label="文章列表">
        <div class="row w-p100">
          <el-input
            class="flex-1"
            v-model="params.link"
            placeholder="例：#ul"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')">
            测试
          </el-button>
        </div>
      </el-form-item>

      <el-form-item label="开始页面">
        <div class="row w-p100">
          <el-input class="flex-1" v-model="params.link"></el-input>
          <span class="ml-5 mr-5">至</span>
          <el-input class="flex-1" v-model="params.link"></el-input>
          <span class="ml-5 mr-5">每页递增</span>
          <el-input class="flex-1 mr-5" v-model="params.link"></el-input>
          <el-button type="primary" @click="submit('params')">测试</el-button>
        </div>
      </el-form-item>

      <el-form-item label="文章标题">
        <div class="row w-p100">
          <el-input
            class="flex-1"
            placeholder="例：.title"
            v-model="params.sort"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')"
            >测试</el-button
          >
        </div>
      </el-form-item>

      <el-form-item label="文章内容">
        <div class="row w-p100">
          <el-input
            class="flex-1"
            placeholder="例：.article"
            v-model="params.sort"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')"
            >测试</el-button
          >
        </div>
      </el-form-item>

      <el-form-item label="保存栏目">
        <el-input v-model="params.link" placeholder="例：cid"></el-input>
      </el-form-item>

      <el-form-item label="测试结果">
        <el-input v-model="params.link" type="textarea"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { create } from "@/api/friendlink.js";

export default {
  name: "friendlink-add",
  data: () => {
    return {
      params: {
        title: "",
        link: "",
        sort: "",
        createdAt: new Date(),
      },

      paramsRules: {
        //校验规则
        name: [
          { required: true, message: "请输入标签名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "名称长度在 2 到 20 个字符之间",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {},
  mounted() {},
  async created() {},
  methods: {
    handleAttr(e) {
      console.log("e-->", e);
    },

    handleSubCid(e) {
      console.log("e-->", e);
    },

    //新增
    async create() {
      try {
        let res = await create(this.params);
        if (res.code == 200) {
          this.$message({
            message: "新增成功^_^",
            type: "success",
          });
          this.$router.go(-1);
        } else {
          this.$message({
            message: res.msg,
            type: "success",
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.create();
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<style></style>
