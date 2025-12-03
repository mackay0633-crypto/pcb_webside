<template>
  <header>
    <div class="hq-topbar">
      <div class="container hq-top">
        <div class="hq-top-left">
          <span>电子产业一站式服务平台</span>
        </div>
        <div class="hq-top-right">
          <a href="#">我的订单</a>
          <a href="#">下单帮助</a>
          <a href="#">0755-83688678</a>
        </div>
      </div>
    </div>
    <div class="hq-mainbar">
      <div class="container hq-main">
        <div class="hq-brand">
          <img src="/src/assets/logo-hq.svg" alt="HQPCB" width="40" height="40" />
          <div class="hq-brand-text">
            <div class="hq-brand-title">华秋PCB</div>
            <div class="hq-brand-sub">高可靠多层板制造商</div>
          </div>
        </div>
        <nav class="hq-nav">
          <router-link class="nav-item" to="/">首页</router-link>
          <div class="nav-item has-dropdown active" tabindex="0">
            <span class="nav-label"><span class="badge">2/4/6层板爆款</span> 在线计价 <span class="caret">▾</span></span>
            <div class="hq-dropdown">
              <router-link class="dd-item" to="/quote/pcb">PCB计价</router-link>
              <router-link class="dd-item" to="/quote/hdi">HDI板计价</router-link>
              <router-link class="dd-item" to="/quote/rf">高频板计价 <span class="pill pill-new">new</span></router-link>
              <router-link class="dd-item" to="/quote/fpc">FPC计价</router-link>
              <router-link class="dd-item" to="/quote/smt">SMT计价 <span class="pill pill-sale">降价</span></router-link>
              <router-link class="dd-item" to="/quote/layout">Layout计价</router-link>
              <router-link class="dd-item" to="/quote/stencil">钢网计价</router-link>
              <router-link class="dd-item" to="/quote/bom">BOM配单</router-link>
            </div>
          </div>
          <a class="nav-item" href="#">元器件采购</a>
          <a class="nav-item" href="#">DFM分析</a>
          <a class="nav-item" href="#">PCB设计</a>
          <a class="nav-item" href="#">制造能力</a>
          <a class="nav-item" href="#">关于华秋</a>
        </nav>
      </div>
      <div class="hq-subnav">
        <div class="container hq-sub">
          <router-link class="sub-item" to="/quote/pcb">PCB计价</router-link>
          <router-link class="sub-item" to="/quote/rf">高频板计价</router-link>
          <router-link class="sub-item" to="/quote/hdi">HDI板计价</router-link>
          <router-link class="sub-item" to="/quote/fpc">FPC计价</router-link>
          <router-link class="sub-item" to="/quote/smt">SMT计价</router-link>
          <router-link class="sub-item" to="/quote/layout">Layout计价</router-link>
          <router-link class="sub-item" to="/quote/stencil">钢网计价</router-link>
          <router-link class="sub-item" to="/quote/bom">BOM配单</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
