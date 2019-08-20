<template>
  <div class="home">
    <Row :gutter="25">
      <Col span="12">
        <h3 class="title">安全统计</h3>
        <Row :gutter="25">
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">弧光告警</p>
              <Icon type="ios-warning-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">2</p>
              <p class="msg">温度告警</p>
              <Icon type="ios-bulb-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">2</p>
              <p class="msg">跳闸启动</p>
              <Icon type="ios-planet-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">跳闸失败</p>
              <Icon type="ios-close-circle-outline" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <h3 class="title">设备统计</h3>
        <Row :gutter="25">
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">设备总数</p>
              <Icon type="ios-stats-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">设备在线数</p>
              <Icon type="ios-cloud-upload-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">设备离线数</p>
              <Icon type="ios-cloud-download-outline" />
            </div>
          </Col>
          <Col span="6">
            <div class="item">
              <p class="number">3</p>
              <p class="msg">设备在线率</p>
              <Icon type="ios-pulse-outline" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
  .home .title {
    color: #999;
    padding-bottom: 16px;
  }

  .home .item {
    background: white;
    border-radius: 4px;
    padding: 30px 15px;
    position: relative;
    overflow: hidden;
  }

  .home .item .number {
    font-size: 20px;
    font-weight: bold;
    position: relative;
    z-index: 10;
  }

  .home .item .msg {
    color: #999;
    position: relative;
    z-index: 10;
  }

  .home .item .ivu-icon {
    position: absolute;
    right: -15px;
    bottom: -10px;
    color: #eeeeee;
    font-size: 70px;
    font-weight: bold;
    z-index: 9;
  }
</style>
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    }
  }
</script>