
import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, BookOpen, Layers } from 'lucide-react';
import { PROJECTS } from '../constants';
import Button from './Shared/Button';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Educação', 'Campanhas', 'Eventos', 'Parcerias'];

  const filteredProjects = filter === 'Todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="container mx-auto px-6">
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-sm font-bold mb-6">
            <Layers className="w-4 h-4" />
            <span>Nossas Ações</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Projetos que Transformam</h1>
          <p className="text-slate-600 text-lg">Acompanhe as ações que realizamos diariamente para garantir a segurança e o futuro das nossas crianças.</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-wider ${
                filter === c 
                ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/20' 
                : 'bg-white border border-slate-200 text-slate-500 hover:border-blue-900 hover:text-blue-900 shadow-sm'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* List with Grid Fix */}
        <div className="max-w-6xl mx-auto space-y-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(p => (
              <div key={p.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 grid md:grid-cols-12">
                {/* Image Container */}
                <div className="md:col-span-5 lg:col-span-4 relative overflow-hidden group">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover min-h-[250px] md:min-h-full transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-lg bg-yellow-400 text-blue-900 text-xs font-black uppercase tracking-widest shadow-lg">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:col-span-7 lg:col-span-8 p-8 md:p-12 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-2.5 h-2.5 rounded-full ${p.status === 'em andamento' ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p.status}</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors">{p.title}</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed text-lg italic">
                      "{p.description}"
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                        <MapPin className="w-5 h-5 text-blue-900 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{p.location}</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                        <Calendar className="w-5 h-5 text-blue-900 shrink-0" />
                        <span className="text-sm font-medium text-slate-700">Atualizado mensalmente</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                    <Button variant="primary" className="flex-1 sm:flex-none px-10">Conhecer Detalhes</Button>
                    <Button variant="outline" to="/doar" className="flex-1 sm:flex-none px-10">Apoiar Projeto</Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-slate-300">
              <BookOpen className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-400 font-bold">Nenhum projeto encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
