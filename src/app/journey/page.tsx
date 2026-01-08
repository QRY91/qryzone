import { redirect } from "next/navigation";

export default function JourneyPage() {
  redirect("/explore?tag=learning");
}
