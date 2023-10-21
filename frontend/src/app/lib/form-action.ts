import { FormAction } from "@/app/types/types";

export async function formAction(params: FormAction) {
  params.setMessage("Logging in...");
  try {
    const response = await fetch(params.endpoint, {
      method: params.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.formData),
    });
    const data = await response.json();
    if (response.ok) {
      if (data.error) {
        params.setMessage(data.error.message);
        return data;
      } else return data;
    } else params.setMessage(data.error.message);
  } catch (error) {
    console.error(error);
  }
}
