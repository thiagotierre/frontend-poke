import axios from "axios";
import { toastr } from "../service/toastr.service";
export const Api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleErrorMessages = (error: any) => {
  if (error.isAxiosError) {
    toastr(
      { message: error.response?.data.error || "Pokemon não encontrado" , title: "Atenção"  },
      "warning"
    );
    return;
  }
  toastr(
    {
      message: "Um error inesperado aconteceu, tente novamente.",
      title: "Erro inesperado",
    },
    "error"
  );
};