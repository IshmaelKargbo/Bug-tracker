import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

export default NuxtAuthHandler({
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: "5afccc5ae0fbbf9ac0cb",
      clientSecret: "94a6d643ccf51036a5c93f0f3384a93f59a85a08",
      callback: "http://localhost:4000/auth/github-redirect",
    }),
  ],
  callbacks: {
    async signIn(props) {
        console.log(props);
        
        const isAllowedToSignIn = true;

        if (isAllowedToSignIn) {
          return true
        } else {
          return false
        }
    },
  },
});
