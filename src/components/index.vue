<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="light" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="md-home"/>
            <span>首页</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="md-speedometer"/>
            <span>在线监测</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-photos"/>
            <span>台区管理</span>
          </MenuItem>
          <MenuItem name="1-4">
            <Icon type="ios-person"/>
            <span>用户管理</span>
          </MenuItem>
          <MenuItem name="1-5">
            <Icon type="ios-settings"/>
            <span>个人中心</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{background: '#fff', borderBottom: '1px solid #dcdee2'}">
          <Row>
            <Col span="12">
              <h2>GBL9100高层建筑火灾监控系统</h2>
            </Col>
            <Col span="12" class="user-msg">
              <Badge dot class="badge">
                <Icon type="ios-notifications-outline" size="26"></Icon>
              </Badge>
              <span class="user-name">某某某某某</span>
            </Col>
          </Row>
        </Header>
        <Content :style="{padding: '16px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<style scoped>
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
    font-size: 12px;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 14px;
  }

  .ivu-menu-light {
    height: 100%;
  }

  .user-msg {
    text-align: right;
  }

  .badge {
    display: inline;
  }

  .user-name {
    font-size: 14px;
    margin-left: 20px;
    color: #999;
  }
</style>
<script>
  export default {
    data() {
      return {
        isCollapsed: false
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>