<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <AlertModal v-if="showModal" @close="showModal = false">
      <!-- you can use custom content here to  default content -->

      <!-- slot component deprecated -->
      <!-- <h3 slot="header">custom header</h3> -->
      <template v-slot:header>
        <h3>
          경고
          <i class="fas fa-times closeModalBtn" v-on:click="showModal = false"></i>
        </h3>
      </template>

      <template v-slot:body>
        <h3>아무것도 입력하지 않았습니다.</h3>
      </template>

      <template v-slot:footer>
        <h3>custom footer</h3>
      </template>
    </AlertModal>
  </div>
</template>

<script>

import AlertModal from './common/AlertModal.vue'

export default {
  components: {
    // 향상된 객체 리터럴
    AlertModal
  },
  data() {
    return  {
      newTodoItem:'',
      showModal: false
    }
  },
  methods: {
    addTodo(){
      if(this.newTodoItem !== '') {
        this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
  .closeModalBtn {
    color: #42B983;
  }
</style>