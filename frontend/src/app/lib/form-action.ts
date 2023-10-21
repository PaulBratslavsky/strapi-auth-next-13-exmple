import { FormAction } from "@/app/types/types";
import { toast } from "react-hot-toast";

function renderMessage(message: string, type: string, params: FormAction) {
  params.setMessage(message);
  if (type === "success") toast.success(message);
  if (type === "error") toast.error(message);
  if (type === "loading") toast.loading(message);
  if (type === "info") toast(message);
  if (!type) toast(message);
}

export async function formAction(params: FormAction) {
  try {
    const response = await fetch(params.endpoint, {
      method: params.method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params.formData),
    });
    const data = await response.json();
    if (response.ok) {
      if (data.error) {
        renderMessage(data.error.message, "error", params);
        return data;
      } else {
        renderMessage("Success!", "success", params);
        return data;
      }
    } else renderMessage(data.error.message, "error", params);
  } catch (error) {
    console.error(error);
  }
}
