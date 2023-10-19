import { cookies } from "next/headers";

const getUserData = async () => {
  const cookieStore = cookies();
  const response = await fetch(process.env.NEXT_PUBLIC_APP_URL + "/api/user", {
    next: { revalidate: 0 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookieStore.get("accessToken")?.value}`,
    },
  });
  const data = await response.json();
  return data;
};

export { getUserData };
