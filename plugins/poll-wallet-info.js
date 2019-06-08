export default async function ({ app, store }) {
  if (!app.mixins) {
    app.mixins = []
  }
  app.mixins.push({
    mounted() {
      store.dispatch('block-sync/FETCH_WEB3')
      store.dispatch('block-sync/FETCH_CONTRACT_INSTANCE')
    }
  })
}
