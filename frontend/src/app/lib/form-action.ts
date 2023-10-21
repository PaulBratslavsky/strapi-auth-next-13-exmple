import { FormAction } from "@/app/types/types";

export async function formAction(params: FormAction) {
  params.setLoading(true);
  params.setMessage("Logging in...");
  try {
    const response = await fetch(params.endpoint, {
      method: params.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.formData),
    });
    const data = await response.json();
    console.dir(data, { depth: null });
    if (response.ok) {
      params.setMessage("Login successful!");
      console.log(data);
    } else {
      params.setMessage(data.message[0].messages[0].message);
    }
    params.setLoading(false);
  } catch (error) {
    console.error(error);
  }
}
