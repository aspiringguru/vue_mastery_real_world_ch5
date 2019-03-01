<template>
  <div class="User">
    <h1>This is {{ username }}'s page.</h1>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>
