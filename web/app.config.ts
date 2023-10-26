export default defineAppConfig({
  nuxtIcon: {
    aliases: {
      nuxt: "NuxtIcon",
    },
  },
  ui: {
    primary: "emerald",
    gray: "cool",
    button: {
      default: {
        color: "primary",
        variant: "solid",
      },
      gray: {
        solid: 'shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        ghost: 'text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        link: 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400'
      },
      variant: {
        solid:
          "shadow-sm text-white dark:text-gray-300 bg-emerald-800 hover:bg-emerald-700 disabled:bg-{color}-500 dark:bg-emerald-800 dark:hover:bg-emerald-700 dark:disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
        ghost:
          "text-{color}-400 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
        link: "text-{color}-400 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
        outline:
          "ring-1 ring-inset dark:bg-{color}-800 bg-white ring-{color}-300 dark:ring-{color}-700 text-{color}-500 dark:text-{color}-200 hover:bg-{color}-50 dark:hover:bg-{color}-800 disabled:bg-transparent dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
      },
    },
  },
});
