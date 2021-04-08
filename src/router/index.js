import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/SignIn",
    name: "Signin",
    component: function(){
      return import("../views/SignIn.vue");
    }

  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: function(){
      return import("../views/SignUp.vue");
    }
  },

  {
    path: "/Profile",
    name: "Profile",
    component: function(){
      return import("../views/Profile.vue");
    }
  },

  {
    path: "/ProfileSettings",
    name: "ProfileSettings",
    component: function(){
      return import("../views/ProfileSettings.vue");
    }
  },

 {
  path: "/Branches",
  name: "Branches",
  component: function(){
    return import("../views/Branches.vue");
  }
 },
 {
  path: "/cart",
  name: "Cart",
  component: function(){
    return import("../views/Cart.vue");
  }
 },
 {
  path: "/wishlist",
  name: "Wishlist",
  component: function(){
    return import("../views/Wishlist.vue");
  }
 },
 {
  path: "/Branches/Branch",
  name: "Branch",
  component: function(){
    return import("../views/Branch.vue");
  }
 },
 {
  path: "/UpdateBranchForm",
  name: "UpdateBranchForm",
  component: function(){
    return import("../views/UpdateBranchForm.vue");
  }
 },  
 {
  path: "/AddNewBranchForm",
  name: "AddNewBranchForm",
  component: function(){
    return import("../views/AddNewBranchForm.vue");
  }
 }, 
 
 
 {

  path: "/delivery",
  name: "delivery",
  component: function(){
    return import("../views/delivery.vue");
  }
},

 
{
path: "/addDeliveryDetail",
name: "addDeliveryDetail",
component: function(){
  return import("../views/addDeliveryDetail.vue");
}
}, 

{
path: "/editDeliveryDetails",
name: "editDeliveryDetails",
component: function(){
  return import("../views/editDeliveryDetails.vue");
}
},  

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  {
    path: "/products",
    name: "Products",
    component: function() {
      return import("../views/Products.vue");
    }
  },
  {
    path: "/Products/productedit",
    name: "Productedit",
    component: function() {
      return import("../views/Productedit.vue");
    }
  },
  {
    path: "/producteditform",
    name: "Producteditform",
    component: function() {
      return import("../views/Producteditform.vue");
    }
  },
  {
    path: "/feedbackAdmin",
    name: "feedbackAdmin",
    component: function(){
      return import("../views/feedbackAdmin.vue");
    }
    }, 
    {
      path: "/feedbackAdminReply",
      name: "feedbackAdminReply",
      component: function(){
        return import("../views/feedbackAdminReply.vue");
      }
      },
      {
        path: "/feedbackAdminReplyEdit",
        name: "feedbackAdminReplyEdit",
        component: function(){
          return import("../views/feedbackAdminReplyEdit.vue");
        }
        },
        {
          path: "/feedbackAdminSeePercentage",
          name: "feedbackAdminSeePercentage",
          component: function(){
            return import("../views/feedbackAdminSeePercentage.vue");
          }
          },



];





const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;


