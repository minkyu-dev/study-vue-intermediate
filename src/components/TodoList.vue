<template>
  <div>
    <transition-group name="list" tag="ul">
      <li class="shadow" v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem.item">
        <!-- <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i> -->
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{todoItem.item}}</span>
        <!-- <span class="removeBtn" v-on:click="removeTodo(todoItem, index)"> -->
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    
    // ...mapState(['todoItems'])
    // ...mapGetters({todoItems: 'storedTodoItems'})
    ...mapGetters(['storedTodoItems'])
  },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .removeBtn {
    margin-left: auto;
    color: #DE4343;
  }
  .checkBtn {
    line-height: 45px;
    color: #62ACDE;
    margin-right: 5px;
  }
  .checkBtnCompleted {
    color: #B3ADAD;
  }
  .textCompleted {
    text-decoration: line-through;
    color: #B3ADAD;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>