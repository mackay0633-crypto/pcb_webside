<template>
  <main class="page theme-hq">
    <div class="container grid">
      <section class="card content" style="padding: 24px;">
        <div style="font-size:14px;color:#999;margin-bottom:12px">
          <router-link to="/" style="color:#1890ff;text-decoration:none">首页</router-link>
          <span style="margin:0 6px;color:#ccc">/</span>
          <span>关于DAPE</span>
        </div>
        <h1 style="margin:0 0 16px;font-size:22px;color:#e51f2b">集团介绍 <span style="font-size:12px;color:#999">Group Introduction</span></h1>
        <div style="color:#333;line-height:1.8">
          <p>DAPE 致力于打造电子产业一站式数字化服务平台，围绕“PCB制造、元器件采购、SMT/PCBA组装、DFM可制造性分析”等业务板块，为全球客户提供高效可靠的工程与交付服务。</p>
          <p>平台通过数字化打通设计、工程与制造环节，提供“PCB下单、在线计价、工程确认、交期试算、物流与发票管理”等在线能力，帮助客户显著缩短交付周期与沟通成本。</p>
          <p>截至目前，DAPE 服务覆盖全国多地制造中心与采购仓储中心，形成“快速样板—批量生产—供应链协同”的完整闭环，持续提升交付稳定性与品质表现。</p>
        </div>
        <div class="card" style="margin-top:20px;padding:0;border-color:#e5e7eb;background:#fff">
          <div style="padding:16px;border-bottom:1px solid #eee;color:#333;font-weight:600">DAPE 制造与服务网络</div>
          <div style="padding:24px;color:#666">
            <div style="height:280px;border:1px dashed #d9d9d9;border-radius:8px;background:#fafafa;display:flex;align-items:center;justify-content:center;color:#999">
              地图占位（制造基地与服务中心分布）
            </div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px">
              <div style="border:1px solid #e5e7eb;border-radius:8px;padding:12px;background:#fff">
                <div style="color:#333;font-weight:600;margin-bottom:6px">江西 · 九江</div>
                <div style="color:#666;font-size:13px">DAPE PCB制造厂</div>
              </div>
              <div style="border:1px solid #e5e7eb;border-radius:8px;padding:12px;background:#fff">
                <div style="color:#333;font-weight:600;margin-bottom:6px">湖南 · 长沙</div>
                <div style="color:#666;font-size:13px">SMT/PCBA中心</div>
              </div>
              <div style="border:1px solid #e5e7eb;border-radius:8px;padding:12px;background:#fff">
                <div style="color:#333;font-weight:600;margin-bottom:6px">广东 · 深圳</div>
                <div style="color:#666;font-size:13px">元器件与交付中心</div>
              </div>
            </div>
          </div>
        </div>

        <h2 id="team" style="margin:24px 0 12px;font-size:18px;color:#333">团队实力</h2>
        <div style="color:#333;line-height:1.8">
          <p>核心团队来自头部制造与供应链企业，具备完整的工程开发、制造执行与质量管理经验。</p>
        </div>

        <h2 id="history" style="margin:24px 0 12px;font-size:18px;color:#333">发展历程</h2>
        <div style="color:#333;line-height:1.8">
          <p>从快速样板到批量制造，DAPE 持续扩充产线能力与交付网络，完善全流程在线化与可视化。</p>
        </div>

        <h2 id="ceo" style="margin:24px 0 12px;font-size:18px;color:#333">CEO致辞</h2>
        <div style="color:#333;line-height:1.8">
          <p>DAPE 将持续以客户价值为导向，打造可信赖的电子制造与供应链平台。</p>
        </div>

        <h2 id="gallery" style="margin:24px 0 12px;font-size:18px;color:#333">企业风采</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
          <div style="height:120px;background:#f5f7fa;border:1px solid #e5e7eb;border-radius:8px"></div>
          <div style="height:120px;background:#f5f7fa;border:1px solid #e5e7eb;border-radius:8px"></div>
          <div style="height:120px;background:#f5f7fa;border:1px solid #e5e7eb;border-radius:8px"></div>
        </div>
      </section>

      <aside class="about-right">
        <div class="about-menu">
          <a class="item active" href="#top">集团介绍</a>
          <a class="item" href="#team">团队实力</a>
          <a class="item" href="#history">发展历程</a>
          <a class="item" href="#ceo">CEO致辞</a>
          <a class="item" href="#gallery">企业风采</a>
        </div>
        <button class="cta" style="margin-top:12px">联系企业</button>
      </aside>
    </div>
  </main>
</template>
