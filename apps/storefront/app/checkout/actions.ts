"use server";

export async function submitOrder(
  formData: FormData,
) {
  const email =
    formData.get("email");

  console.log(
    "checkout submitted",
    email,
  );
}