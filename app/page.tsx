"use server";

import { redirect } from "next/navigation";

export default function Page() {
	redirect("./auth/log-in");
	
	return;
}