<template>
    <div class="map-fav">
        <mmap />
        <fav />
    </div>
</template>

<script>
import Mmap from './map.vue'
import fav from './fav.vue'
export default {
  components: {
    Mmap,
    fav
  }
}
</script>
