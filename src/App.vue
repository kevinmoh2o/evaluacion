<template>
  <div class="container-fluid p-0 m-0 custom-container">
    <router-view />
  </div>
 
</template>

<script>


</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');


html{
    font-size: 14px;
}

body{
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    font-size: 0.88rem;
    user-select: none;
    overflow-x: hidden;
    color: var(--color-dark);
    background-color: var(--color-background);
}

/*   html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Inter,sans-serif;
  } */

  .column-container .full-calendar a {
    text-decoration: none !important;
    color: inherit !important;
  }

  .inpE6 .ipt .dp__input {
    border: 1px solid #ffffff;
  }

  .custom-container {
    height: 100vh;
  }

</style>