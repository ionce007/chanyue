<template>
  <div class="mr-10 ml-10">
    <!-- 基本设置 -->
    <el-tab-pane label="应用配置" class="mt-20" name="three">
      <el-row class="mb-20">
        <el-tag>系统</el-tag>
      </el-row>

      <el-form-item prop="template" label="模板">
        <el-input
          v-model="set.template"
          placeholder="请填写模板文件夹名称"
        ></el-input>
      </el-form-item>

      <el-row class="mb-20">
        <el-tag>微信小程序</el-tag>
      </el-row>

      <el-form ref="info" :model="set" label-width="84px">
        <el-form-item
          label="appid"
          prop="appid"
          :rules="[
            {
              required: true,
              message: '请输入appid',
              trigger: 'blur',
            },
          ]"
        >
          <el-input v-model="set.appid"></el-input>
        </el-form-item>

        <el-form-item prop="secret" label="secret">
          <el-input v-model="set.secret"></el-input>
        </el-form-item>

        <el-row class="mb-20">
          <el-tag>七牛云OSS</el-tag>
        </el-row>

        <el-form-item prop="accessKey" label="accessKey">
          <el-input v-model="set.accessKey"></el-input>
        </el-form-item>

        <el-form-item prop="secretKey" label="secretKey">
          <el-input v-model="set.secretKey"></el-input>
        </el-form-item>

        <el-form-item prop="domain" label="domain">
          <el-input v-model="set.domain"></el-input>
        </el-form-item>

        <el-form-item prop="bucket" label="bucket">
          <el-input v-model="set.bucket"></el-input>
        </el-form-item>

        <el-row class="mb-20">
          <el-tag>上传</el-tag>
        </el-row>

        <el-form-item label="上传方式">
          <el-radio-group v-model="set.uploadWay" class="ml-4">
            <el-radio label="1" size="large">普通</el-radio>
            <el-radio label="2" size="large">七牛云</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitInfo('info')">保存</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </div>
</template>

<script>
import { siteInfo, updateInfo, updateSeo } from "@/api/site.js";

export default {
  name: "sysSet",
  data: () => {
    return {
      loading: true,

      set: {
        template: "default",
        appid: "",
        secret: "",

        accessKey: "", //ak
        secretKey: "", //sk
        domain: "", //域名
        bucket: "", //空间名称
        uploadWay: "1", //1->普通 2->七牛云
      },
    };
  },
  computed: {},
  created() {
    this.query();
  },
  methods: {
    //查询
    async query() {
      try {
        let res = await siteInfo();
        if (res.code === 200) {
          this.loading = false;
          let {
            id,
            name,
            domain,
            email,
            icp,
            police,
            copyright,
            json,
            code,
            title,
            keywords,
            description,
          } = res.data;
          this.info = {
            id,
            name,
            domain,
            email,
            icp,
            police,
            copyright,
            code,
            json,
          };
          this.seo = { id, title, keywords, description };
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

    //更新基本信息
    async updateInfo() {
      try {
        let res = await updateInfo(this.info);
        if (res.code === 200) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.query();
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

    //更新SEO信息
    async updateSeo() {
      try {
        let res = await updateSeo(this.seo);
        if (res.code === 200) {
          this.$message({
            message: "更新成功^_^",
            type: "success",
          });
          this.query();
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

    submitInfo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateInfo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    submitSeo(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateSeo();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style></style>
