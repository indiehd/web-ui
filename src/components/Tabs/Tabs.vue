<template>
  <div>
    <div :class="
        [{'col-md-4': vertical && !tabNavWrapperClasses},
        {'col-12': centered && !tabNavWrapperClasses},
        tabNavWrapperClasses]">
      <ul :class="
          [ tabTypeClass,
           {'nav-pills-icons': icons},
           {'nav-pills': pills},
           {'nav-tabs': !pills},
           {'flex-column': vertical},
           {'justify-content-center': centered},
           tabNavClasses
          ]"
          class="nav"
          role="tablist"
          v-bind="$attrs">

        <li :key="tab.id"
            aria-expanded="true"
            class="nav-item active"
            data-toggle="tab"
            role="tablist"
            v-for="tab in tabs">

          <a :aria-expanded="tab.active"
             :class="{active: tab.active}"
             :href="`#${tab.id}`"
             @click.prevent="activateTab(tab)"
             class="nav-link"
             data-toggle="tab"
             role="tablist">
            <tab-item-content :tab="tab">
            </tab-item-content>
          </a>

        </li>

      </ul>
    </div>
    <div
        :class="[{'tab-space': !vertical && !noContentSpace}, 'text-left', {'col-md-8': vertical && !tabContentClasses}, tabContentClasses]"
        class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    inheritAttrs: false,
    components: {
      TabItemContent: {
        props: ['tab'],
        render (h) {
          return h('div', [this.tab.$slots.label || this.tab.label]);
        }
      }
    },
    provide () {
      return {
        addTab: this.addTab,
        removeTab: this.removeTab
      };
    },
    props: {
      type: {
        type: String,
        default: 'default',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger', 'default', 'neutral'];
          return acceptedValues.indexOf(value) !== -1;
        }
      },
      activeTab: {
        type: String,
        default: ''
      },
      tabNavWrapperClasses: {
        type: [String, Object],
        default: ''
      },
      tabNavClasses: {
        type: [String, Object],
        default: ''
      },
      tabContentClasses: {
        type: [String, Object],
        default: ''
      },
      vertical: Boolean,
      noContentSpace: Boolean,
      icons: Boolean,
      centered: Boolean,
      value: String,
      pills: Boolean
    },
    data () {
      return {
        tabs: []
      };
    },
    computed: {
      tabTypeClass () {
        let baseClass = this.pills ? 'pills' : 'tabs';
        if (this.type) {
          return `nav-${baseClass}-${this.type}`;
        }
        return '';
      }
    },
    methods: {
      findAndActivateTab (label) {
        let tabToActivate = this.tabs.find(t => t.label === label);
        if (tabToActivate) {
          this.activateTab(tabToActivate);
        }
      },
      activateTab (tab) {
        if (this.handleClick) {
          this.handleClick(tab);
        }
        this.deactivateTabs();
        tab.active = true;
        this.$emit('input', tab.label || tab.id);
      },
      deactivateTabs () {
        this.tabs.forEach(tab => {
          tab.active = false;
        });
      },
      addTab (tab) {
        const index = this.$slots.default.indexOf(tab.$vnode);
        if (!this.activeTab && index === 0) {
          tab.active = true;
        }
        if (this.activeTab === tab.name) {
          tab.active = true;
        }
        this.tabs.splice(index, 0, tab);
      },
      removeTab (tab) {
        const tabs = this.tabs;
        const index = tabs.indexOf(tab);
        if (index > -1) {
          tabs.splice(index, 1);
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        if (this.value) {
          this.findAndActivateTab(this.value);
        }
      });
    },
    watch: {
      value (newVal) {
        this.findAndActivateTab(newVal);
      }
    }
  };
</script>
<style lang="scss" scoped>
  @import "~@/assets/sass/indiehd/variables";
  @import "~@/assets/sass/indiehd/tabs";
</style>
