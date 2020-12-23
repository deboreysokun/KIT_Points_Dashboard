<template>
  <nav>
    <v-app-bar flat color="grey lighten-3" white app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn text>
        <v-avatar size="30" class="mr-3">
          <img src="../assets/SokunDeborey.jpg" alt="profile" />
        </v-avatar>
        <p class="mt-5">Sokun Deborey</p>
        <v-icon size="30" class="mt-1">{{ down }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark color="#2a3f54" app>
      <v-layout column align-center>
        <div class="mt-3">
          <p class="white--text headline font-weight-light">
            <v-icon size="30">{{ logo }}</v-icon> KIT Point System
          </p>
        </div>
        <div class="d-flex">
          <v-avatar size="70" class="mr-8">
            <img src="../assets/SokunDeborey.jpg" alt="profile" />
          </v-avatar>
          <div>
            <p class="white--text font-weight-thin">welcome,</p>
            <p class="white--text subheading text-center">
              Sokun Deborey
            </p>
          </div>
        </div>
      </v-layout>
      <v-list flat>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link :to="link.route" id="navlink"
              ><v-list-item-title class="white--text font-weight-light">{{
                link.text
              }}</v-list-item-title></router-link
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {
  mdiFileDocument as project,
  mdiServer as task,
  mdiDeveloperBoard as dashboard,
  mdiAccount as student,
  mdiCarSettings as main,
  mdiBullseye as logo,
  mdiChevronDown as down,
} from "@mdi/js";
export default {
  data: () => ({
    drawer: true,
    logo,
    down,
    links: [
      { text: "Project", route: "/", icon: project },
      { text: "Task", route: "/task", icon: task },
      { text: "Dashboard", route: "/dashboard", icon: dashboard },
      { text: "Student", route: "/student", icon: student },
      { text: "Main", route: "/main", icon: main },
    ],
  }),
  components: {},
};
</script>

<style scoped>
.border {
  border-right: 4px solid #0ba518;
}
#navlink {
  text-decoration: none;
}
</style>
