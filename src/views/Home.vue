<template>
  <div class="home">
    <div class="resume-container">
      <div class="logo">
        <div class="logo-CN">个人简历</div>
        <div class="logo-EN">MY RESUME</div>
        <div class="lang-box">
          <span
            @click="switchLang('zh')"
            :class="{ langActive: langActive('zh') }"
            >CN</span
          >
          <span></span>
          <span
            @click="switchLang('en')"
            :class="{ langActive: langActive('en') }"
            >EN</span
          >
        </div>
        <div class="theme-box">
          <span
            @click="switchTheme('primary')"
            :class="{ themeActive: themeActive('primary') }"
            >COLD</span
          >
          <span></span>
          <span
            @click="switchTheme('orange')"
            :class="{ themeActive: themeActive('orange') }"
            >WARM</span
          >
        </div>
      </div>
      <div class="tag">
        <span>☆☆☆☆</span>
      </div>
      <!-- 个人信息 -->
      <div class="info-block">
        <ul class="info-items">
          <li>性别：男</li>
          <li>年龄：29</li>
          <li>电话：18575212123</li>
          <li>邮箱：1021965843@qq.com</li>
          <li>个人网站：http://sdada</li>
          <li>
            <div class="ellipsis">
              博客：
              <a
                href="http://sxlm201215.gitee.io/vuepress-blog/"
                target="_blank"
                >http://sxlm201215.gitee.io/vuepress-blog/</a
              >
            </div>
          </li>
        </ul>
        <div class="avatar">
          <img src="../assets/img/avatar.jpg" />
        </div>
      </div>

      <Title :titleName="$t('message.JobIntention')">
        <ul class="info-items">
          <li>意向岗位：web前端开发</li>
          <li>意向城市：杭州</li>
          <li>期望薪资：面议</li>
          <li>求职类型：全职</li>
        </ul>
      </Title>
      <Title :titleName="$t('message.ProfessionalSkills')">
        <ul>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
          <li>熟悉webpack的配置</li>
        </ul>
      </Title>
      <Title :titleName="$t('message.ProjectExperiences')">
        <ul>
          <li>项目：《xx项目》后台管理</li>
          <li>描述：阿达大大</li>
          <li>技术栈：vue+vuex+vue-router等</li>
          <li>工作内容：</li>
          <ol class="work-content">
            <li>asdsada</li>
            <li>asdsada</li>
            <li>asdsada</li>
            <li>asdsada</li>
          </ol>
        </ul>
      </Title>
      <Title :titleName="$t('message.WorkExperience')" class="jobs">
        <div class="job-items">
          <div class="times-range">2018.03 - 2019.03</div>
          <div>江西全栈科技有限公司</div>
          <div>担任前端开发工程师</div>
        </div>
        <div class="job-items">
          <div class="times-range">2018.03 - 2019.03</div>
          <div>江西全栈科技有限公司</div>
          <div>担任前端开发工程师</div>
        </div>
        <div class="job-items">
          <div class="times-range">2018.03 - 2019.03</div>
          <div>江西全栈科技有限公司</div>
          <div>担任前端开发工程师</div>
        </div>
      </Title>
      <Title :titleName="$t('message.EducationalBackground')" class="jobs">
        <div class="job-items">
          <div class="times-range">2011.09 - 2015.07</div>
          <div>吉林大学</div>
          <div>全日制本科</div>
        </div>
      </Title>
      <Title :titleName="$t('message.SelfEvaluation')">
        <ul>
          <li>酷爱编程</li>
          <li>善于沟通</li>
          <li>爱学习</li>
        </ul>
      </Title>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "Home",
  components: {
    Title,
  },
  computed: {
    langActive() {
      return function(lang) {
        //使用函数返回
        return lang === localStorage.getItem("lang");
      };
    },
    themeActive() {
      return function(color) {
        //使用函数返回
        console.log(color)
        console.log(localStorage.getItem("theme"))
        return color === localStorage.getItem("theme");
      };
    },
  },
 
  methods: {
    switchLang(lang) {
      console.log(lang);
      console.log(this.$i18n);
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
    },
    switchTheme(color) {
      localStorage.setItem("theme", color);
      this.$forceUpdate()
      document.getElementsByTagName("body")[0].className = "theme" + "-" + color;
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../assets/css/theme.less");
@import "./home.less";
</style>
