import axios from "axios";
import { DOMAIN } from "../util/constants/settingSystem";
export class ShoppingCartServices {
  constructor() {}

  getAllProductApi = () => {
    return axios({
      url: `${DOMAIN}/Product`,
      method: "GET",
    });
  };
}

export const shoppingCartServices = new ShoppingCartServices();
