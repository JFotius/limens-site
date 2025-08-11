// src/components/NewsList.jsx
import { news, formatDate } from "../data/news";

export default function NewsList({ limit = 3 }) {
  const items = [...news]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  return (
    <section id="noticias" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight">Notícias</h2>
        <p className="text-gray-600 mt-1">
          Atualizações do LIMENS: publicações, projetos e eventos.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {items.map((n) => (
            <article key={n.id} className="rounded-2xl shadow-sm border p-5 bg-white">
              {n.image && (
                <img
                  src={n.image}
                  alt=""
                  className="w-full h-40 object-contain bg-gray-50 rounded-xl mb-4"
                />
              )}
              <div className="text-sm text-gray-500">{formatDate(n.date)}</div>
              <h3 className="text-lg font-semibold mt-1">{n.title}</h3>
              <p className="text-gray-700 mt-2 line-clamp-3">{n.excerpt}</p>

              {n.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {n.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {n.url && (
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 text-sm font-medium underline"
                >
                  Ler mais
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

