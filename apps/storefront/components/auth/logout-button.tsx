import {
  signOutCustomerAction,
} from "@/app/(auth)/actions";

export function LogoutButton() {
  return (
    <form action={signOutCustomerAction}>
      <button
        type="submit"
        className="rounded-md cursor-pointer border px-3 py-2 text-sm hover:bg-muted"
      >
        Sign out
      </button>
    </form>
  );
}