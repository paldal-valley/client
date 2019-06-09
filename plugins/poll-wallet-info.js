export default async function ({ app, store }) {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push({
    async mounted() {
      await store.dispatch('block-sync/FETCH_WEB3')
      await store.dispatch('block-sync/FETCH_CONTRACT_INSTANCE')
    }
  })
}
