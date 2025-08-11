import abstractImg from "../data/abstractjmr2025.jpg";
import bannerImg from "../data/bannermdpi.png";
import mrImg from "../data/MR-2025-0259.jpg";

// src/data/news.js
export const news = [
  {
    id: "mxene-2025",
    title: "Eletrodos MXene/alginate do LIMENS são destaque em Journal of Materials Research",
    date: "2025-05-08",
    tags: ["Publicação", "Materiais",  "Supercapacitor" ,  "Armazenamento de energia"],
    excerpt:
      "Artigo sobre eletrodos para supercapacitores assinado por pesquisadores do LIMENS e do LEIMO/UNIVASF.",
    url: "https://doi.org/10.1557/s43578-025-01588-6", // ou link para PDF/post no seu site
    image: abstractImg // pode usar a logo por enquanto; depois troca pela foto da notícia
  },
  {
     id: "reviewmxene-2025",
    title: "MXene-Based Composites for Energy Harvesting and Energy Storage Devices",
    date: "2025-08-01",
    tags: ["Publicação", "Materiais",  "Energia" , "Sensores" , "TENGs" , "Armazenamento de energia"],
    excerpt:
        "Artigo na revista Solids destaca avanços em compósitos de MXene para colheita e armazenamento de energia, com participação do LIMENS e do LEIMO/UNIVASF.",
    url: "https://doi.org/10.3390/solids6030041", // DOI oficial do artigo
    image: bannerImg // por enquanto pode usar a logo, depois trocar pela imagem da notícia
  },
  {
  id: "mr-2025-pppy",
  title: "Additive Manufacturing of Conductive ABS Filaments via Polypyrrole Incorporation",
  date: "2025-08-08",
  tags: ["Publicação", "Materiais", "Manufatura Aditiva"],
  excerpt:
    "Artigo na revista Materials Research sobre a fabricação aditiva de filamentos de ABS condutivo por incorporação de polipirrol, com participação do LIMENS.",
  url: "https://doi.org/10.1590/1980-5373-MR-2025-0259",
   image: mrImg // pode trocar por uma figura ou foto do trabalho
  }
];

// utilitário simples de formatação (pt-BR)
export const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
