import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Activity, BarChart4, ServerOff, Database, ShieldCheck, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const downtimeData = [
  { name: 'App Banca', downtime: 14 },
  { name: 'Web Teller', downtime: 8 },
  { name: 'Swift', downtime: 3 },
  { name: 'ERP Corp', downtime: 10 },
  { name: 'BI Tools', downtime: 2 },
];

const stabilityData = [
  { day: '1', stability: 100 },
  { day: '5', stability: 98 },
  { day: '10', stability: 100 },
  { day: '15', stability: 85 },
  { day: '20', stability: 95 },
  { day: '25', stability: 100 },
  { day: '30', stability: 100 },
];

export default function BPPModal({ isOpen, onClose }: Props) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-100"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="bpp-modal-title"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-1.5rem)] max-w-5xl max-h-[90vh] overflow-y-auto hidden-scrollbar bg-brand-card border border-white/10 rounded-2xl shadow-2xl z-101"
          >
            <div className="sticky top-0 bg-brand-card/90 backdrop-blur-md border-b border-white/5 p-4 md:p-6 flex justify-between items-center z-10">
              <div>
                <h3 id="bpp-modal-title" className="text-xl font-bold text-white flex items-center gap-2">
                  <Activity className="text-brand-green" /> {t('projects.bppModalTitle')}
                </h3>
                <p className="text-sm text-slate-400 mt-1">{t('projects.bppModalDesc')}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                aria-label={lang === 'es' ? 'Cerrar detalles técnicos' : 'Close technical details'}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 md:p-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#0a0a0a] border border-brand-green/20 rounded-xl p-5 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                  <ServerOff className="text-brand-green mb-3" size={28} />
                  <h4 className="text-white font-bold mb-2">
                    {lang === 'es' ? '100% Offline-First' : '100% Offline-First'}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'es' 
                      ? 'Sin dependencias de servidores backend. El procesamiento analítico y la matemática reactiva (useMemo) suceden directamente en el navegador, asegurando cero latencia de red.'
                      : 'No backend server dependencies. Analytical processing and reactive math (useMemo) happen directly in the browser, ensuring zero network latency.'}
                  </p>
                </div>
                
                <div className="bg-[#0a0a0a] border border-blue-500/20 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                  <Database className="text-blue-500 mb-3" size={28} />
                  <h4 className="text-white font-bold mb-2">
                    {lang === 'es' ? 'Ingesta con IndexedDB' : 'Ingestion with IndexedDB'}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'es' 
                      ? 'Lectura masiva de archivos crudos con SheetJS (XLSX) inyectando miles de registros históricos de tickets en la base de datos local (IndexedDB) del cliente casi al instante.'
                      : 'Mass reading of raw files using SheetJS (XLSX), injecting thousands of historical ticket records into the client local database (IndexedDB) almost instantly.'}
                  </p>
                </div>

                <div className="bg-[#0a0a0a] border border-red-500/20 rounded-xl p-5 shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                  <ShieldCheck className="text-red-500 mb-3" size={28} />
                  <h4 className="text-white font-bold mb-2">
                    {lang === 'es' ? 'Privacidad Absoluta' : 'Absolute Privacy'}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === 'es' 
                      ? 'Al ser serverless, los reportes corporativos y datos operativos nunca abandonan la máquina del usuario, cumpliendo con los estándares más estrictos de seguridad TI.'
                      : 'Being serverless, corporate reports and operational data never leave the user machine, complying with the strictest IT security standards.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                    <BarChart4 size={16} className="text-red-400" />
                    {lang === 'es' ? 'Top Ofensores (Core Apps) - Downtime Hrs' : 'Top Offenders (Core Apps) - Downtime Hrs'}
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={50} minHeight={100}>
                      <BarChart data={downtimeData} layout="vertical" margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                        <XAxis type="number" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={11} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8fafc' }} cursor={{fill: 'transparent'}}/>
                        <Bar dataKey="downtime" fill="#ef4444" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                    <Zap size={16} className="text-brand-green" />
                    {lang === 'es' ? 'Salud del Ciclo de Vida (% Estabilidad)' : 'Lifecycle Health (% Stability)'}
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%" minWidth={50} minHeight={100}>
                      <AreaChart data={stabilityData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                        <XAxis dataKey="day" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis domain={[80, 100]} stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8fafc' }} />
                        <Area type="monotone" dataKey="stability" stroke="#22c55e" strokeWidth={2} fillOpacity={1} fill="url(#colorStability)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-xl p-5">
                <h4 className="text-brand-blue font-semibold text-sm mb-2">
                  {lang === 'es' ? 'Módulo de Comité Semanal & Filtros UI' : 'Weekly Committee Module & UI Filters'}
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {lang === 'es' 
                    ? 'Integra un sistema de búsqueda y filtrado en tiempo real. Al buscar un analista, fecha o tipo de P1, las métricas de SLA y gráficas de Recharts se recalculan instantáneamente usando las capacidades reactivas del DOM virtual de React.'
                    : 'Integrates a real-time search and filtering system. When searching for an analyst, date, or P1 type, SLA metrics and Recharts graphs are recalculated instantly using the reactive capabilities of React\'s virtual DOM.'}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#0a0a0a] border border-white/10 rounded-full font-mono text-xs text-slate-400">Normalización de Nombres</span>
                  <span className="px-3 py-1 bg-[#0a0a0a] border border-white/10 rounded-full font-mono text-xs text-slate-400">Downtime Calculator</span>
                  <span className="px-3 py-1 bg-[#0a0a0a] border border-white/10 rounded-full font-mono text-xs text-slate-400">Top Ofensores UI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
