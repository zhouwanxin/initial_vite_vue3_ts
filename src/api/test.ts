import request from "@/utils/axios";

export const testApi = (data: any) => {
    return request("/test", "post", data);
}