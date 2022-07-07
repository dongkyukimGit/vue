<template>
<v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
     <v-icon @click="drawer =!drawer">mdi-account</v-icon>
      <v-spacer></v-spacer>
    </v-app-bar>
<v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>


export default {

  data: () => ({
    v:null,
    drawer: false,
    items: [
             { title: 'Dashboard', icon: 'mdi-view-dashboard',to: '/' },
             { title: 'Photos', icon: 'mdi-image',to : '/grid-system' },
             { title: 'Breakpoint', icon: 'mdi-help-box',to:'/Breakpoint'},
           ],
           right: null,
  }),
}
</script>

