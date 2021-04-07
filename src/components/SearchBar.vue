<template>        
	<div class="input-group my-3">
		<input type="text" class="form-control" placeholder="Pesquisar exame" ref="searchInput" v-model="$root.searchQuery">
	</div>
</template>

<script>
export default {
    name: 'Searchbar'
}
</script>