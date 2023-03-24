import { useSession, signIn, signOut } from "next-auth/react";
import type { OAuthProviderType } from "next-auth/providers";

interface Props {
  service: OAuthProviderType;
}

export default function LoginBtn({ service }: Props) {
  const { data: session } = useSession();

  return (
    <>
      {session ? `Signed in as ${session.user?.name || "user"}` : null} <br />
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={session ? () => void signOut() : () => void signIn(service)}
      >
        {session ? "Sign out" : "Sign with Facebook"}
      </button>
    </>
  );
}
