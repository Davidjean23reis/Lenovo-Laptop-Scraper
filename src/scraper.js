import axios from "axios";
import * as cheerio from "cheerio"; 

const BASE_URL = "https://webscraper.io/test-sites/e-commerce/static/computers/laptops";

export const getLaptops = async () => {
  try {
    let allLaptops = [];
    let page = 1;
    let totalPages = 20; 

    while (page <= totalPages) {
      const { data } = await axios.get(`${BASE_URL}?page=${page}`);
      const items = cheerio.load(data);

      items(".thumbnail").each((i, element) => {
        const title = items(element).find(".title").text().trim();
        const price = items(element).find(".price").text().replace("$", "").trim();
        const description = items(element).find(".description").text().trim();
        const reviews = items(element).find(".ratings p").text().split(" ")[0].trim();
        const imageUrl = items(element).find("img").attr("src");
        const link = items(element).find("a").attr("href");

        if (title.toLowerCase().includes("lenovo")) {
          allLaptops.push({
            title,
            price: parseFloat(price),
            description,
            reviews: parseInt(reviews) || 0,
            imageUrl,
            link,
          });
        }
      });

      page++;
    }

    allLaptops.sort((a, b) => a.price - b.price);
    return allLaptops;

  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
};
