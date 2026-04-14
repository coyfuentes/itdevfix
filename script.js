<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT DevFix | Enterprise AI-Rescue Operations</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

        :root {
            --brand-green: #74D04E;
            --emergency-red: #EF4444;
            --slate-900: #0F172A;
            --slate-50: #F8FAFC;
        }

        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            scroll-behavior: smooth;
            letter-spacing: -0.01em;
        }

        .font-mono {
            font-family: 'JetBrains Mono', monospace;
        }

        .bg-grid {
            background-size: 40px 40px;
            background-image: radial-gradient(circle, #e2e8f0 1px, rgba(0, 0, 0, 0) 1px);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(226, 232, 240, 0.8);
        }

        .nav-scrolled {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid #e2e8f0;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
        }

        .btn-primary {
            background-color: var(--brand-green);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 14px 0 rgba(116, 208, 78, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(116, 208, 78, 0.4);
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .scanline {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 10px;
            background: linear-gradient(to bottom, transparent, rgba(116, 208, 78, 0.1), transparent);
            animation: scanline 4s linear infinite;
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-white text-slate-900 antialiased">

    <!-- Navigation -->
    <nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 py-6 px-6 md:px-12">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <!-- Logo -->
            <div class="flex items-center gap-2.5 group cursor-pointer">
                <div class="bg-slate-900 w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                    <span class="text-[#74D04E] font-extrabold text-lg">IT</span>
                </div>
                <span class="text-xl font-extrabold tracking-tight text-slate-900">
                    Dev<span class="text-[#74D04E]">Fix</span>
                </span>
            </div>

            <div class="hidden lg:flex items-center gap-10 font-bold text-slate-500 tracking-tight text-sm uppercase">
                <a href="#problem" class="hover:text-slate-900 transition-colors">Risk Audit</a>
                <a href="#solution" class="hover:text-slate-900 transition-colors">Recovery Path</a>
                <a href="#contact" class="hover:text-slate-900 transition-colors">Triage</a>
                <button class="bg-slate-900 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-slate-800 transition-all">
                    URGENT SUPPORT
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative pt-48 pb-32 overflow-hidden bg-grid">
        <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold mb-10 border border-slate-200 uppercase tracking-widest">
                <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <span>Systemic Risk Warning: Prompt-Based Architecture</span>
            </div>
            
            <h1 class="text-6xl md:text-[5.5rem] font-[800] tracking-tight mb-10 leading-[1] text-slate-900">
                Your AI site works... <br />
                <span class="text-slate-400">until the logic fails.</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
                When prompt-engineered code reaches its complexity ceiling, it doesn't just bug—it collapses. We provide 
                <span class="text-slate-900 font-bold">architectural stabilization</span> for the post-AI era.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <a href="#contact" class="btn-primary text-slate-900 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-3">
                    Stabilize My Stack <i class="fas fa-arrow-right text-sm"></i>
                </a>
                <button class="text-slate-500 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-all">
                    View Enterprise Case Studies
                </button>
            </div>

            <!-- Terminal Visualizer -->
            <div class="mt-24 max-w-4xl mx-auto">
                <div class="bg-[#0b1120] rounded-2xl shadow-2xl border border-slate-800 overflow-hidden text-left relative">
                    <div class="scanline"></div>
                    <div class="bg-slate-900/50 px-5 py-3.5 flex justify-between items-center border-b border-slate-800">
                        <div class="flex gap-2">
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                            <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                        </div>
                        <div class="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">diagnostic_engine.log</div>
                        <div class="px-2 py-0.5 rounded bg-red-500/10 text-[9px] text-red-400 font-bold uppercase border border-red-500/20 tracking-tighter">
                            Critical Alert
                        </div>
                    </div>
                    <div id="terminal" class="p-8 font-mono text-[13px] leading-relaxed min-h-[220px]">
                        <div class="text-slate-500 mb-2">// Initializing System Audit ... [DONE]</div>
                        <div class="text-blue-400">import</div> <span class="text-white">com.itdevfix.core.Stabilizer;</span>
                        <div class="text-red-400 mt-2 flex items-start gap-3">
                            <i class="fas fa-times-circle mt-1"></i>
                            <span>[FATAL] Unhandled hallucination in VibeLogic.js:521 - Logic depth limit reached.</span>
                        </div>
                        <div class="text-yellow-400 mt-1 flex items-start gap-3">
                            <i class="fas fa-exclamation-triangle mt-1 text-[10px]"></i>
                            <span>[WARN] High entropy detected in recursive prompt loops. Memory leak imminent.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Problem Section -->
    <section id="problem" class="py-32 px-6 bg-slate-50">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                    <h2 class="text-sm font-bold text-[#74D04E] uppercase tracking-[0.3em] mb-4">Risk Profile</h2>
                    <h3 class="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                        The Post-AI <br />Complexity Wall
                    </h3>
                    <p class="text-slate-500 text-lg font-medium mb-10 leading-relaxed">
                        Prompt-based code is fast to build but impossible to maintain. When the "vibe" fades, technical debt accrues at an exponential rate.
                    </p>
                    <div class="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
                        <div class="flex items-center gap-4 mb-4 text-red-500 font-bold uppercase text-xs tracking-widest">
                            <i class="fas fa-bolt"></i> Urgent Warning
                        </div>
                        <p class="text-xl font-bold text-slate-900 italic leading-snug">
                            "Everything stops when your AI logic hits a wall it wasn't prompted to understand."
                        </p>
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 gap-6">
                    <div class="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-[#74D04E]/50 transition-colors">
                        <div class="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-6">
                            <i class="fas fa-layer-group"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 mb-3">Logic Collapse</h4>
                        <p class="text-slate-500 text-sm leading-relaxed">AI fixes create secondary errors that propagate through unmapped dependencies.</p>
                    </div>
                    <div class="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-[#74D04E]/50 transition-colors">
                        <div class="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
                            <i class="fas fa-fingerprint"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 mb-3">Ghost Auth</h4>
                        <p class="text-slate-500 text-sm leading-relaxed">Hallucinated security protocols that offer the illusion of safety but lack validation.</p>
                    </div>
                    <div class="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-[#74D04E]/50 transition-colors">
                        <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 mb-3">Scale Ceiling</h4>
                        <p class="text-slate-500 text-sm leading-relaxed">Prompt-logic often fails at scale due to inefficient loop handling and DOM bloat.</p>
                    </div>
                    <div class="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm hover:border-[#74D04E]/50 transition-colors">
                        <div class="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-500 mb-6">
                            <i class="fas fa-code-branch"></i>
                        </div>
                        <h4 class="font-bold text-slate-900 mb-3">Maintenance Void</h4>
                        <p class="text-slate-500 text-sm leading-relaxed">No documentation, no clear architecture, and no path forward without prompts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Form Section (Contact/Triage) -->
    <section id="contact" class="py-32 px-6 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 gap-24 items-start">
                <div>
                    <h2 class="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">Immediate Triage</h2>
                    <p class="text-slate-500 text-lg mb-10 leading-relaxed">
                        Provide your details below for an emergency architectural audit. Our senior engineers respond to critical stability requests within 60 minutes.
                    </p>
                    <div class="space-y-6">
                        <div class="flex gap-5">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-[#74D04E]/10 flex items-center justify-center text-[#74D04E]">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h5 class="font-bold text-slate-900">Direct Rescue Line</h5>
                                <p class="text-slate-500 text-sm">+1 (888) DEV-FIX-NOW</p>
                            </div>
                        </div>
                        <div class="flex gap-5">
                            <div class="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h5 class="font-bold text-slate-900">Priority Dispatch</h5>
                                <p class="text-slate-500 text-sm">emergency@itdevfix.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                    <form onsubmit="event.preventDefault(); alert('Audit Request Received. Stand by for triage.');">
                        <div class="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" class="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#74D04E] transition-all text-sm font-medium" required>
                            </div>
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                                <input type="email" placeholder="john@enterprise.com" class="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#74D04E] transition-all text-sm font-medium" required>
                            </div>
                        </div>
                        <div class="mb-8">
                            <label class="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Critical Issue Description</label>
                            <textarea rows="4" placeholder="Describe the logic ceiling or hallucination being encountered..." class="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#74D04E] transition-all text-sm font-medium resize-none" required></textarea>
                        </div>
                        <button type="submit" class="w-full btn-primary text-slate-900 py-4 rounded-xl font-bold text-lg">
                            Request Audit Protocol
                        </button>
                        <p class="text-center mt-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <i class="fas fa-lock mr-2"></i> Secured Enterprise Submission
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-20 px-6 bg-slate-900 text-slate-500 border-t border-slate-800">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div class="flex items-center gap-2.5 opacity-80">
                <div class="bg-white/10 w-8 h-8 rounded-lg flex items-center justify-center">
                    <span class="text-[#74D04E] font-bold text-sm">IT</span>
                </div>
                <span class="text-lg font-bold tracking-tight text-white">DevFix</span>
            </div>
            <p class="text-xs font-medium tracking-tight">© 2024 IT DevFix Infrastructure. All protocols reserved.</p>
            <div class="flex gap-8 text-xs font-bold uppercase tracking-widest">
                <a href="#" class="hover:text-white transition-colors">Privacy</a>
                <a href="#" class="hover:text-white transition-colors">Terms</a>
                <a href="#" class="hover:text-white transition-colors">Status</a>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script>
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });

        // Terminal Diagnostic Simulator
        const terminal = document.getElementById('terminal');
        const logs = [
            { type: 'info', text: 'Initializing Java VM Triage Thread... OK' },
            { type: 'error', text: 'FATAL EXCEPTION: ai.logic.InfinitePromptRecursion' },
            { type: 'warn', text: 'Structural integrity compromised at component root.' },
            { type: 'info', text: 'Injecting com.itdevfix.RecoveryProtocol.v4' },
            { type: 'success', text: 'Stabilizer.java: Recovery Path Identified.' }
        ];

        let index = 0;
        function updateTerminal() {
            if (index < logs.length) {
                const div = document.createElement('div');
                div.className = 'mt-2 opacity-0 transition-all duration-700 translate-x-2';
                
                const log = logs[index];
                if (log.type === 'error') div.classList.add('text-red-400');
                if (log.type === 'warn') div.classList.add('text-yellow-400');
                if (log.type === 'success') div.classList.add('text-[#74D04E]', 'font-bold');
                if (log.type === 'info') div.classList.add('text-slate-500');
                
                div.innerHTML = `<span class="opacity-50 text-[10px] mr-2">${new Date().toLocaleTimeString([], {hour12: false})}</span> ${log.text}`;
                terminal.appendChild(div);
                
                setTimeout(() => {
                    div.classList.replace('opacity-0', 'opacity-100');
                    div.classList.replace('translate-x-2', 'translate-x-0');
                }, 100);
                
                index++;
                setTimeout(updateTerminal, 2000);
            }
        }

        setTimeout(updateTerminal, 1000);
    </script>
</body>
</html>
