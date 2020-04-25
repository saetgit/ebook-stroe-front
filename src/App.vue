<template>
  <div id="app">
    <div class="main-container">
      <AppHeader />
	  <router-view/>
      <!-- <Home /> -->
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/layouts/AppHeader'
import AppFooter from './components/layouts/AppFooter'
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
