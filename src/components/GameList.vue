<template>
    <div class="game-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games" :key="game.id">
            <td>{{ game.id }}</td>
            <td>{{ game.name }}</td>
            <td>{{ game.stock }}</td>
            <td>${{ game.price }}</td>
            <td>{{ game.color }}</td>
            <td>
              <button @click="sellGame(game.id)" :disabled="game.stock <= 0">Vender</button>
              <button @click="addGameStock(game.id, 1)">Agregar Stock</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'GameList',
    computed: {
      ...mapState(['games'])
    },
    methods: {
      ...mapActions(['updateStock', 'addStock']),
      sellGame(id) {
        this.updateStock({ id, quantity: 1 });
      },
      addGameStock(id, quantity) {
        this.addStock({ id, quantity });
      }
    }
  }
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
  }
  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  </style>