<template>
  <el-upload 
    action="#" 
    list-type="picture-card" 
    :auto-upload="true"
    :http-request="upload"
    :multiple="true"
  >
    <el-icon><Plus /></el-icon>

    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <el-icon><zoom-in /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <el-icon><Download /></el-icon>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <el-icon><Delete /></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadFile } from 'element-plus'
import { getUploadToken } from "@/api/qiniu.js";
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import * as qiniu from 'qiniu-js'
import {getEtag} from '@/utils/qetag.js'


const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
  //TODO:
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
  //TODO:
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
  //TODO:
}

const observer = {
    next(res){
    	// 上传成功后
        console.log('next: ',res)
    },
    error(err){
    	// 失败
        console.log(err)
    },
    complete(res){
        console.log('complete: ',res)
    }
}

const upload = (file:UploadFile)=>{
  console.log('upload',file)
  //TODO: 优化token是否缓存
  getUploadToken().then(res=>{
    console.log('getUploadToken success',res)
    
    let _file = file?.file;
    // 唯一文件名 七牛etag+时间戳（etag 是根据官网node的方案改造的纯js方法）
    let key = `${getEtag(_file)}_${new Date().getTime()}`;
    let token=res.data.token;
    let putExtra = {}
    let config = {}
    const observable = qiniu.upload(_file, key, token, putExtra, config)

    // 开始上传
    const subscription = observable.subscribe(observer) 

  }).catch(e=>{
    console.log('getUploadToken err:',e)
  })



}



</script>
