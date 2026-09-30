'use client';

import { useState } from 'react';

const BikeFrameSVG = ({ geo }: { geo: any }) => (
  <svg viewBox="0 0 280 200" className="w-full h-full">
    <rect x="10" y="10" width="260" height="180" fill="none" stroke="#ff5500" strokeWidth="1" strokeDasharray="4,2"/>
    <line x1="100" y1="40" x2="140" y2="140" stroke="#ff5500" strokeWidth="2"/>
    <line x1="140" y1="140" x2="200" y2="140" stroke="#ff5500" strokeWidth="2"/>
    <line x1="200" y1="140" x2="220" y2="60" stroke="#ff5500" strokeWidth="2"/>
    <line x1="100" y1="40" x2="220" y2="60" stroke="#ff5500" strokeWidth="2"/>
    <line x1="100" y1="40" x2="200" y2="140" stroke="#ff5500" strokeWidth="1" opacity="0.5"/>
    <circle cx="100" cy="140" r="25" fill="none" stroke="rgba(255,85,0,0.3)" strokeWidth="2"/>
    <circle cx="240" cy="140" r="25" fill="none" stroke="rgba(255,85,0,0.3)" strokeWidth="2"/>
    <text x="140" y="195" fill="#ff5500" fontSize="10" textAnchor="middle">STACK: {geo.stack}cm / REACH: {geo.reach}cm</text>
  </svg>
);

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b border-accent/30 bg-light sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm font-mono tracking-wider">
        <span className="text-primary font-bold">OLYX</span>
        <span className="text-accent mx-2">//</span>
        <span className="text-primary">MAISONS</span>
      </div>
      <button onClick={onCartOpen} className="text-primary hover:text-accent transition font-mono text-sm">CART</button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div className={`fixed right-0 top-0 h-screen w-96 bg-light border-l border-accent/30 transform transition z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6"><h2 className="text-2xl text-primary font-mono mb-4">CART</h2><p className="text-dark">Empty.</p></div>
    </div>
  </>
);

export default function AerobladeHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [frameSize, setFrameSize] = useState(56);
  const [groupset, setGroupset] = useState('shimano-grx-810');
  const [windAngle, setWindAngle] = useState(0);

  const geo = { stack: Math.round(54 + (frameSize - 52) * 0.8), reach: Math.round(38 + (frameSize - 52) * 0.4) };

  const groupsets = [
    { id: 'shimano-grx-810', name: 'Shimano GRX 810', gears: '2×11' },
    { id: 'sram-rival-xplr', name: 'SRAM Rival XPLR', gears: '1×12' },
    { id: 'campag-ekar', name: 'Campagnolo Ekar', gears: '1×13' },
  ];

  const specs = [
    { label: 'Frame', value: 'Monocoque 3K carbon' },
    { label: 'Frame Weight', value: '900g' },
    { label: 'Tire Clearance', value: '700×45c' },
    { label: 'BB Drop', value: '75mm' },
    { label: 'Headtube', value: '110mm threadless' },
    { label: 'Seatpost', value: '27.2mm carbon' },
    { label: 'Brakes', value: 'Hydraulic disc 160mm' },
    { label: 'Warranty', value: 'Lifetime frame' }
  ];

  return (
    <main className="bg-light">
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl text-primary font-mono font-bold mb-2">AEROBLADE</h1>
          <h2 className="text-2xl text-accent font-mono mb-6">Carbon Fiber Gravel Bike</h2>
          <p className="text-dark/70 mb-8">Sub-1.2kg monocoque frame with integrated cable routing. Born to race gravel.</p>
          <div className="flex gap-6 items-center mb-12">
            <div>
              <div className="text-accent text-3xl font-bold font-mono">$7,200</div>
              <div className="text-sm text-dark/50">Rp 112.000.000 / €6,680</div>
            </div>
            <button onClick={() => setCartOpen(true)} className="px-8 py-3 bg-accent text-white font-mono font-bold hover:opacity-80 transition">ADD TO CART</button>
          </div>

          <div className="space-y-6">
            <div className="bg-primary/10 p-6 rounded">
              <label className="block text-sm text-primary font-mono mb-2">Frame Size: {frameSize}cm</label>
              <input type="range" min="48" max="62" step="2" value={frameSize} onChange={(e) => setFrameSize(parseInt(e.target.value))} className="w-full" />
            </div>
            <div className="bg-primary/10 p-6 rounded">
              <label className="block text-sm text-primary font-mono mb-2">Wind Angle: {windAngle}°</label>
              <input type="range" min="-15" max="15" value={windAngle} onChange={(e) => setWindAngle(parseInt(e.target.value))} className="w-full" />
              <div className="text-xs text-dark/50 mt-2">Drag coefficient: {(0.32 + Math.abs(windAngle) * 0.008).toFixed(3)}</div>
            </div>
          </div>
        </div>

        <div className="aspect-square bg-primary border border-accent/30 rounded p-8 flex items-center justify-center">
          <BikeFrameSVG geo={geo} />
        </div>
      </section>

      <section className="bg-primary/5 border-y border-accent/20 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl text-primary font-mono font-bold mb-8">GROUPSET</h2>
          <div className="grid grid-cols-3 gap-4">
            {groupsets.map((g) => (
              <button key={g.id} onClick={() => setGroupset(g.id)} className={`p-6 border rounded text-left font-mono transition ${groupset === g.id ? 'border-accent bg-accent/10' : 'border-primary/20 hover:border-accent/50'}`}>
                <div className="text-primary font-bold">{g.name}</div>
                <div className="text-sm text-dark/50">{g.gears}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl text-primary font-mono font-bold mb-12">SPECS</h2>
        <div className="grid grid-cols-4 gap-4">{specs.map((s, i) => (
          <div key={i} className="p-4 border border-accent/20 bg-light">
            <div className="text-xs text-accent font-mono mb-1">{s.label}</div>
            <div className="text-sm text-dark font-mono">{s.value}</div>
          </div>
        ))}</div>
      </section>

      <footer className="bg-primary text-light py-8"><div className="max-w-7xl mx-auto px-6 text-center text-xs font-mono">AEROBLADE / Carbon engineering since 2024</div></footer>
    </main>
  );
}
