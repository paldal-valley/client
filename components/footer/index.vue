<template>
  <div class="footer-container">
    <hr class="line-separator">
    <div class="footer-flex-box">
      <img
        class="footer-logo-img"
        src="~assets/ac-logo.png">
      <div class="footer-info">
        <ul style="font-weight: bold;">회사 정보</ul>

        <ul>주소: 경기도 수원시 월드컵로 206 아주대학교 팔달관</ul>
        <ul>대표이사: 팔달밸리</ul>
        <ul>통신판매업번호: 2019-수원영통-22932</ul>
        <ul>이메일: contact@paldal.org</ul>
        <ul class="rights">© 2019 팔달밸리 All rights reserved.</ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.line-separator {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  margin: 0 2% 50px;
}
.footer-flex-box {
  display: flex;

  .footer-logo-img {
    width: 50px;
    height: 50px;
    margin-left: 35px;
    margin-right: 10px;
  }

  .footer-info {
    color: gray;
    ul {
      margin-bottom: 2px;
    }
    .rights {
      margin-top: 30px;
      margin-bottom: 100px;
    }
  }
}
</style>
