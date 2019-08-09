<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded, has id: {{ $route.params.id }}</p>
    <router-link
      class="btn btn-danger"
      tag="button"
      :to="{
        name: 'userEdit',
        params: { id: $route.params.id },
        query: { locale: 'en', q: 100 }
      }"
    >
      Edit user
    </router-link>
  </div>
</template>
