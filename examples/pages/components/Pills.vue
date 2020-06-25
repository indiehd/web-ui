<template>
  <div class="section section-pills">
    <div class="container">
      <div id="navigation-pills">
        <div class="title">
          <h4>Navigation Pills</h4>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="category">Horizontal tabs</p>
            <tabs pills type="primary">
              <tab-pane label="Profile">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                procrastinate B2C users after installed base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
              </tab-pane>
              <tab-pane label="Settings">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize
                timely deliverables for real-time schemas.
                <br />
                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </tab-pane>
              <tab-pane label="Options">
                Completely synergize resource taxing relationships via premier niche markets.
                Professionally cultivate one-to-one customer service with robust ideas.
                <br />
                <br />Dynamically innovate resource-leveling customer service for state of the art
                customer service.
              </tab-pane>
            </tabs>
          </div>
          <div class="col-md-6">
            <p class="category">Vertical tabs</p>
            <tabs class="row" pills type="primary" vertical>
              <tab-pane label="Profile">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                procrastinate B2C users after installed base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
              </tab-pane>
              <tab-pane label="Settings">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize
                timely deliverables for real-time schemas.
                <br />
                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </tab-pane>
              <tab-pane label="Options">
                Completely synergize resource taxing relationships via premier niche markets.
                Professionally cultivate one-to-one customer service with robust ideas.
                <br />
                <br />Dynamically innovate resource-leveling customer service for state of the art
                customer service.
              </tab-pane>
            </tabs>
          </div>
        </div>
        <div class="title">
          <p class="category">With Icons</p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <tabs icons pills type="primary">
              <tab-pane label="Profile">
                <template slot="label">
                  <i class="now-ui-icons objects_umbrella-13"></i> Home
                </template>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically
                procrastinate B2C users after installed base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence without revolutionary ROI.
              </tab-pane>
              <tab-pane label="Settings">
                <template slot="label">
                  <i class="now-ui-icons shopping_shop"></i> Messages
                </template>
                Efficiently unleash cross-media information without cross-media value. Quickly maximize
                timely deliverables for real-time schemas.
                <br />
                <br />Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </tab-pane>
              <tab-pane label="Options">
                <template slot="label">
                  <i class="now-ui-icons ui-2_settings-90"></i> Settings
                </template>
                Completely synergize resource taxing relationships via premier niche markets.
                Professionally cultivate one-to-one customer service with robust ideas.
                <br />
                <br />Dynamically innovate resource-leveling customer service for state of the art
                customer service.
              </tab-pane>
            </tabs>
          </div>
          <div class="col-md-6">
            <tabs class="row"
                  icons
                  pills
                  tab-content-classes="col-md-8"
                  tab-nav-wrapper-classes="col-md-3"
                  type="primary"
                  vertical>
              <tab-pane label="Profile">
                <template slot="label">
                  <i class="now-ui-icons objects_umbrella-13"></i> Home
                </template>
                Collaboratively administrate empowered markets via plug-and-play networks.
                Dynamically procrastinate B2C users after installed base benefits.
                <br />
                <br /> Dramatically visualize customer directed convergence without revolutionary
                ROI.
              </tab-pane>
              <tab-pane label="Settings">
                <template slot="label">
                  <i class="now-ui-icons ui-2_settings-90"></i> Settings
                </template>
                Efficiently unleash cross-media information without cross-media value. Quickly
                maximize timely deliverables for real-time schemas.
                <br />
                <br />Dramatically maintain clicks-and-mortar solutions without functional
                solutions.
              </tab-pane>
            </tabs>
          </div>
        </div>
        <div class="title">
          <p class="category">Just Icons</p>
        </div>
        <div class="row">
          <div class="col-md-6">
            <tabs class="row"
                  pills
                  tab-nav-classes="nav-pills-just-icons"
                  tab-nav-wrapper-classes="col-md-3"
                  type="info"
                  vertical>
              <tab-pane>
                <i class="now-ui-icons objects_umbrella-13" slot="label"></i>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
                users after installed base benefits.
                <br>
                <br> Dramatically visualize customer directed convergence without revolutionary ROI.
              </tab-pane>
              <tab-pane>
                <i class="now-ui-icons ui-2_settings-90" slot="label"></i>
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
                deliverables for real-time schemas.
                <br>
                <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </tab-pane>
            </tabs>
          </div>
          <div class="col-md-6">
            <tabs pills
                  tab-nav-classes="nav-pills-just-icons"
                  type="info">
              <tab-pane label="Profile">
                <i class="now-ui-icons objects_umbrella-13" slot="label"></i>
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
                users after installed base benefits.
                <br>
                <br> Dramatically visualize customer directed convergence without revolutionary ROI.
              </tab-pane>
              <tab-pane label="Settings">
                <i class="now-ui-icons shopping_shop" slot="label"></i>
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely
                deliverables for real-time schemas.
                <br>
                <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </tab-pane>
              <tab-pane label="Settings">
                <i class="now-ui-icons ui-2_settings-90" slot="label"></i>
                Completely synergize resource taxing relationships via premier niche markets.
                Professionally cultivate one-to-one customer service with robust ideas.
                <br>
                <br>Dynamically innovate resource-leveling customer service for state of the art
                customer service.
              </tab-pane>
            </tabs>
          </div>
        </div>
        <!--                 end nav pills -->
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, TabPane, Tabs } from '@/components';

  export default {
    components: {
      Card,
      Tabs,
      TabPane
    }
  };
</script>
<style>
</style>
