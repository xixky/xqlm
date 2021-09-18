(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d05420f"],{"2c6e":function(e,t,o){"use strict";o("4e43")},"4e43":function(e,t,o){},6174:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor"},[o("div",{ref:"toolbar",staticClass:"toolbar"}),o("div",{ref:"editor",staticClass:"text"})])},s=[],u=o("1a0b"),n=o.n(u),c={data:function(){return{editor:null,info_:null}},model:{prop:"value",event:"change"},props:{value:{type:String,default:""},isClear:{type:Boolean,default:!1}},watch:{isClear:function(e){e&&(this.editor.txt.clear(),this.info_=null)},value:function(e){e!==this.editor.txt.html()&&this.editor.txt.html(this.value)}},mounted:function(){this.seteditor(),this.editor.txt.html(this.value)},methods:{seteditor:function(){var e=this;this.editor=new n.a(this.$refs.toolbar,this.$refs.editor),this.editor.customConfig.uploadImgShowBase64=!1,this.editor.customConfig.uploadImgServer="/apisc/fileoss/uploadFile",this.editor.customConfig.uploadImgHeaders={Authorization:this.$store.state.user.token},this.editor.customConfig.uploadFileName="file",this.editor.customConfig.uploadImgMaxSize=2097152,this.editor.customConfig.uploadImgMaxLength=6,this.editor.customConfig.uploadImgTimeout=18e4,this.editor.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","image","table","undo","redo","fullscreen"],this.editor.customConfig.uploadImgHooks={fail:function(e,t,o){},success:function(e,t,o){},timeout:function(e,t){},error:function(e,t){},customInsert:function(e,t,o){var r=t.data.url;e(r)}},this.editor.customConfig.onchange=function(t){e.info_=t,e.$emit("change",e.info_)},this.editor.create()}}},i=c,a=(o("2c6e"),o("2877")),l=Object(a["a"])(i,r,s,!1,null,"1dabe3f1",null);t["a"]=l.exports},"62d2":function(e,t,o){"use strict";o("dc59")},a374:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("h2",{staticStyle:{"text-align":"center"}},[e._v("发布新课程")]),o("el-steps",{staticStyle:{"margin-bottom":"40px"},attrs:{active:1,"process-status":"wait","align-center":""}},[o("el-step",{attrs:{title:"填写课程基本信息"}}),o("el-step",{attrs:{title:"创建课程大纲"}}),o("el-step",{attrs:{title:"提交审核"}})],1),o("el-form",{attrs:{"label-width":"120px"}},[o("el-form-item",{attrs:{label:"课程标题"}},[o("el-input",{attrs:{placeholder:" 示例：机器学习项目课：从基础到搭建项目视频课程。专业名称注意大小写"},model:{value:e.courseInfo.title,callback:function(t){e.$set(e.courseInfo,"title",t)},expression:"courseInfo.title"}})],1),o("el-form-item",{attrs:{label:"课程类别"}},[o("el-select",{attrs:{placeholder:"一级分类"},on:{change:function(t){return e.getTwoByOneId(e.courseInfo.subjectParentId)}},model:{value:e.courseInfo.subjectParentId,callback:function(t){e.$set(e.courseInfo,"subjectParentId",t)},expression:"courseInfo.subjectParentId"}},e._l(e.oneSubjectList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1),o("el-select",{attrs:{placeholder:"二级分类"},model:{value:e.courseInfo.subjectId,callback:function(t){e.$set(e.courseInfo,"subjectId",t)},expression:"courseInfo.subjectId"}},e._l(e.twoSubjectList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"课程讲师"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.courseInfo.teacherId,callback:function(t){e.$set(e.courseInfo,"teacherId",t)},expression:"courseInfo.teacherId"}},e._l(e.teacherList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),o("el-form-item",{attrs:{label:"总课时"}},[o("el-input-number",{attrs:{min:0,"controls-position":"right",placeholder:"请填写课程的总课时数"},model:{value:e.courseInfo.lessonNum,callback:function(t){e.$set(e.courseInfo,"lessonNum",t)},expression:"courseInfo.lessonNum"}})],1),o("el-form-item",{attrs:{label:"课程简介"}},[o("editor",{attrs:{isClear:e.isClear},on:{change:e.onChange},model:{value:e.courseInfo.description,callback:function(t){e.$set(e.courseInfo,"description",t)},expression:"courseInfo.description"}})],1),o("el-form-item",{attrs:{label:"课程封面"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,action:"/apisc/fileoss/uploadFile",headers:e.headers}},[null==e.courseInfo.cover?o("div",{staticClass:"el-upload__text"},[e._v("点击上传")]):o("img",{attrs:{src:e.courseInfo.cover}})])],1),o("el-form-item",{attrs:{label:"课程价格"}},[o("el-input-number",{attrs:{min:0,"controls-position":"right",placeholder:"免费课程请设置为0元"},model:{value:e.courseInfo.price,callback:function(t){e.$set(e.courseInfo,"price",t)},expression:"courseInfo.price"}}),e._v("元 ")],1),o("el-form-item",[o("el-button",{attrs:{disabled:e.saveBtnDisabled,type:"primary"},on:{click:e.next}},[e._v("保存并下一步")])],1)],1)],1)},s=[],u=o("5c96"),n=o.n(u),c=(o("0fae"),o("6174")),i=o("c5ab"),a=(o("99af"),o("b775")),l={getTeacherPageVo:function(e,t,o){return Object(a["b"])({url:"/eduservice/eduteacher/getTeacherPageVo?current=".concat(e,"&limit=").concat(t),method:"post",data:o})},delTeacher:function(e){return Object(a["b"])({url:"/eduservice/eduteacher?id=".concat(e),method:"delete"})},addTeacher:function(e){return Object(a["b"])({url:"/eduservice/eduteacher/addTeacher",method:"post",data:e})},getTeacherById:function(e){return Object(a["b"])({url:"/eduservice/eduteacher/getTeacherById?id=".concat(e),method:"get"})},updateTeacher:function(e){return Object(a["b"])({url:"/eduservice/eduteacher/updateTeacher",method:"post",data:e})},getAllTeacher:function(){return Object(a["b"])({url:"/eduservice/eduteacher",method:"get"})}},d={getAllSubject:function(){return Object(a["b"])({url:"/eduSubject/getAllSubject",method:"get"})}},f=o("8bbf"),h=o.n(f),b=o("9fb0");h.a.use(n.a);var p={data:function(){return{courseId:"",saveBtnDisabled:!1,courseInfo:{subjectId:"",cover:null},teacherList:[],oneSubjectList:[],twoSubjectList:[],isClear:!1,headers:{Authorization:h.a.ls.get(b["a"])}}},components:{editor:c["a"]},created:function(){this.$route.query.id?(this.courseId=this.$route.query.id,this.getCourseInfoByCourseId()):this.getAllSubjectInfo(),this.getTeacherList()},methods:{getCourseInfoByCourseId:function(){var e=this;i["a"].getCourseInfoById(this.courseId).then((function(t){e.courseInfo=t.data.courseInfo,d.getAllSubject().then((function(t){e.oneSubjectList=t.data.allSubject;for(var o=0;o<e.oneSubjectList.length;o++){var r=e.oneSubjectList[o];r.id===e.courseInfo.subjectParentId&&(e.twoSubjectList=r.children)}}))}))},getTeacherList:function(){var e=this;l.getAllTeacher().then((function(t){e.teacherList=t.data.list}))},getAllSubjectInfo:function(){var e=this;d.getAllSubject().then((function(t){e.oneSubjectList=t.data.allSubject}))},onChange:function(e){},getTwoByOneId:function(e){for(var t=0;t<this.oneSubjectList.length;t++){var o=this.oneSubjectList[t];o.id===e&&(this.twoSubjectList=o.children,this.courseInfo.subjectId="")}},handleAvatarSuccess:function(e,t){this.courseInfo.cover=e.data.url},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,o=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),o||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&o},next:function(){this.courseInfo.id?this.updateCourse():this.saveCourseInfo()},saveCourseInfo:function(){var e=this;i["a"].addCourseInfo(this.courseInfo).then((function(t){e.$message({type:"success",message:"添加成功!"}),e.courseId=t.data.courseId,e.$router.push({path:"/course/chapter",query:{id:e.courseId}})}))},updateCourse:function(){var e=this;i["a"].updateCourseInfo(this.courseInfo).then((function(t){e.$message({type:"success",message:"修改成功!"}),e.$router.push({path:"/course/chapter",query:{id:e.courseId}})}))}}},m=p,I=(o("62d2"),o("2877")),g=Object(I["a"])(m,r,s,!1,null,"b94655f8",null);t["default"]=g.exports},c5ab:function(e,t,o){"use strict";var r=o("b775");t["a"]={addCourseInfo:function(e){return Object(r["b"])({url:"/eduservice/educourse/addCourseInfo",method:"post",data:e})},getCourseInfoById:function(e){return Object(r["b"])({url:"/eduservice/educourse/getCourseInfoById?id=".concat(e),method:"get"})},updateCourseInfo:function(e){return Object(r["b"])({url:"/eduservice/educourse/updateCourseInfo",method:"post",data:e})},getCoursePublishById:function(e){return Object(r["b"])({url:"/eduservice/educourse/getCoursePublishById?id=".concat(e),method:"get"})},publishCourse:function(e){return Object(r["b"])({url:"/eduservice/educourse/publishCourse?id=".concat(e),method:"put"})},getCourseInfo:function(){return Object(r["b"])({url:"/eduservice/educourse/getCourseInfo",method:"get"})},getCourseInfoSearch:function(e){return Object(r["b"])({url:"/eduservice/educourse/getCourseInfo?search="+e,method:"get"})},delCourseInfo:function(e){return Object(r["b"])({url:"/eduservice/educourse/delCourseInfo?id=".concat(e),method:"delete"})}}},dc59:function(e,t,o){}}]);