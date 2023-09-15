<template>
  <div class="mr-10 ml-10 mb-20">
    <el-form ref="params" :model="params" label-width="84px" class="mt-20">
      <el-form-item
        label="任务名称"
        prop="taskName"
        :rules="[
          {
            required: true,
            message: '请输入任务名称',
            trigger: 'blur',
          },
        ]"
      >
        <el-input
          v-model="params.taskName"
          placeholder="例：前端库-chat问答"
        ></el-input>
      </el-form-item>

      <el-form-item
        label="匹配网址"
        prop="targetUrl"
        :rules="[
          {
            required: true,
            message: '请输入匹配网址',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input
            class="flex-1"
            v-model="params.targetUrl"
            placeholder="/SEO/index${*}.html"
          ></el-input>
        </div>
      </el-form-item>

      <el-form-item
        label="文章列表"
        prop="listTag"
        :rules="[
          {
            required: true,
            message: '请输入文章列表标签',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input
            class="flex-1"
            v-model="params.listTag"
            placeholder="例：#ul"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')">
            测试
          </el-button>
        </div>
      </el-form-item>

      <el-form-item label="开始页面">
        <div class="row w-p100">
          <el-input class="flex-1" v-model="params.startNum"></el-input>
          <span class="ml-5 mr-5">至</span>
          <el-input class="flex-1" v-model="params.endNum"></el-input>
          <span class="ml-5 mr-5">每页递增</span>
          <el-input class="flex-1 mr-5" v-model="params.increment"></el-input>
          <el-button type="primary" @click="submit('params')">测试</el-button>
        </div>
      </el-form-item>

      <el-form-item
        label="文章标题"
        prop="titleTag"
        :rules="[
          {
            required: true,
            message: '请输入文章标题',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input
            class="flex-1"
            placeholder="例：.title"
            v-model="params.titleTag"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')"
            >测试</el-button
          >
        </div>
      </el-form-item>

      <el-form-item
        label="文章内容"
        prop="articleTag"
        :rules="[
          {
            required: true,
            message: '请输入文章内容',
            trigger: 'blur',
          },
        ]"
      >
        <div class="row w-p100">
          <el-input
            class="flex-1"
            placeholder="例：.article"
            v-model="params.articleTag"
          ></el-input>
          <el-button class="ml-5" type="primary" @click="submit('params')"
            >测试</el-button
          >
        </div>
      </el-form-item>

      <el-form-item
        label="保存栏目"
        prop="articleTag"
        :rules="[
          {
            required: true,
            message: '请输入保存栏目',
            trigger: 'blur',
          },
        ]"
      >
        <el-input v-model="params.cid" placeholder="例：cid"></el-input>
      </el-form-item>

      <el-form-item label="测试结果">
        <div>111</div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit('params')">保存</el-button>

        <el-button type="primary" @click="submit('params')">采集</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { create } from "@/api/collect.js";

export default {
  name: "collect-add",
  data: () => {
    return {
      params: {
        taskName: "",
        targetUrl: "",
        listTag: "",
        startNum: 1,
        endNum: 10,
        increment: 1,
        titleTag: "",
        articleTag: "",
        cid: 5,
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
