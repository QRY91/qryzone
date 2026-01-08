import { redirect } from "next/navigation";

export default function WorkshopPage() {
  redirect("/explore?tag=developer-tools");
}
