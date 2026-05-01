import React, { useEffect, useMemo, useState } from 'react';
import { Activity, Car, Cpu, Gauge, ShieldCheck, Wrench, FileText, Zap } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const DEMO = {
  vehicle: 'Audi A8 D3 2003 · 3.7 Petrol',
  vin: 'WAUZZZ4E03N000000',
  mode: 'READ ONLY',
  health: 94,
  rpm: 760,
  speed: 0,
  coolant: 88,
  voltage: 12.4,
  dtc: []
};

function Metric({ label, value, unit, icon: Icon }) {
  return <section className="card metric"><div className="metricTop"><Icon size={18}/><span>{label}</span></div><strong>{value}</strong><small>{unit}</small></section>;
}

function App() {
  const [status, setStatus] = useState('offline');
  const [data, setData] = useState(DEMO);
  const api = useMemo(() => localStorage.getItem('FP_API') || 'http://127.0.0.1:3003', []);

  useEffect(() => {
    let alive = true;
    const check = async () => {
      try {
        const r = await fetch(`${api}/api/v3/health`, { cache: 'no-store' });
        const j = await r.json();
        if (alive) setStatus(j?.ok ? 'backend online' : 'offline');
      } catch { if (alive) setStatus('demo mode'); }
    };
    check();
    const t = setInterval(check, 3500);
    return () => { alive = false; clearInterval(t); };
  }, [api]);

  return <main className="shell">
    <div className="heroGlow" />
    <header className="topbar">
      <div className="brand"><div className="logo"><Car size={24}/></div><div><b>Fleet Prestige</b><span>Premium Audi Diagnostics</span></div></div>
      <div className="badge"><ShieldCheck size={16}/>{data.mode}</div>
    </header>

    <section className="hero card">
      <div>
        <p className="eyebrow">Command Center</p>
        <h1>{data.vehicle}</h1>
        <p className="sub">Android-ready premium dashboard with safe read-only diagnostic architecture. Demo works offline; backend connects automatically when available.</p>
        <div className="chips"><span>{status}</span><span>VIN {data.vin}</span><span>OBD safe layer</span></div>
      </div>
      <div className="healthRing"><span>{data.health}</span><small>health</small></div>
    </section>

    <section className="grid">
      <Metric label="RPM" value={data.rpm} unit="idle" icon={Gauge}/>
      <Metric label="Speed" value={data.speed} unit="km/h" icon={Activity}/>
      <Metric label="Coolant" value={data.coolant} unit="°C" icon={Cpu}/>
      <Metric label="Voltage" value={data.voltage} unit="V" icon={Zap}/>
    </section>

    <section className="panel card">
      <div className="panelHead"><h2>Diagnostics</h2><span>No destructive commands</span></div>
      <div className="statusList">
        <div><Wrench size={18}/><b>DTC Read</b><span>{data.dtc.length ? `${data.dtc.length} codes` : 'No DTC loaded'}</span></div>
        <div><FileText size={18}/><b>Reports</b><span>HTML / PDF-ready structure</span></div>
        <div><ShieldCheck size={18}/><b>Safety</b><span>Read-only default, audit-first</span></div>
      </div>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
