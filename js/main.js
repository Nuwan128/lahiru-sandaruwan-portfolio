/**
 * Main Application Logic - Lahiru Sandaruwan Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDynamicContent();
  initNavigation();
  initClipboard();
  initCVModal();
  initKeyboardShortcuts();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('ls_portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  setTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ls_portfolio_theme', theme);
  
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    if (theme === 'dark') {
      // Moon icon / Sun to switch to light
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      `;
      themeIcon.setAttribute('title', 'Switch to Light Theme (Press T)');
    } else {
      themeIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      `;
      themeIcon.setAttribute('title', 'Switch to Dark Theme (Press T)');
    }
  }
}

/* ==========================================================================
   Dynamic Content Rendering from PORTFOLIO_DATA
   ========================================================================== */
function renderDynamicContent() {
  if (typeof PORTFOLIO_DATA === 'undefined') return;

  // 1. Render Metrics
  const metricsContainer = document.getElementById('metrics-grid-container');
  if (metricsContainer && PORTFOLIO_DATA.impactMetrics) {
    metricsContainer.innerHTML = PORTFOLIO_DATA.impactMetrics.map((item, index) => {
      const isGreen = index === 2 || index === 3;
      return `
        <div class="metric-card">
          <div>
            <div class="metric-value ${isGreen ? 'highlight-green' : ''}">${escapeHtml(item.value)}</div>
            <div class="metric-label">${escapeHtml(item.label)}</div>
          </div>
          <div class="metric-description">${escapeHtml(item.description)}</div>
        </div>
      `;
    }).join('');
  }

  // 2. Render Core Expertise
  const expertiseContainer = document.getElementById('expertise-grid-container');
  if (expertiseContainer && PORTFOLIO_DATA.coreExpertise) {
    expertiseContainer.innerHTML = PORTFOLIO_DATA.coreExpertise.map(cat => {
      const skillsHtml = cat.skills.map(s => `<span class="skill-pill">${escapeHtml(s)}</span>`).join('');
      return `
        <div class="expertise-category-card">
          <div class="expertise-card-header">
            <div class="expertise-card-icon">
              ${getCategoryIcon(cat.icon)}
            </div>
            <h3 class="expertise-card-title">${escapeHtml(cat.category)}</h3>
          </div>
          <div class="skills-pill-wrap">
            ${skillsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // 3. Render Capabilities ("WHAT I BUILD & OPERATE")
  const capabilitiesContainer = document.getElementById('capabilities-grid-container');
  if (capabilitiesContainer && PORTFOLIO_DATA.capabilities) {
    capabilitiesContainer.innerHTML = PORTFOLIO_DATA.capabilities.map((cap, idx) => {
      const num = String(idx + 1).padStart(2, '0');
      return `
        <div class="capability-card" id="cap-${escapeHtml(cap.id)}">
          <span class="capability-num">SPEC // ${num}</span>
          <h3 class="capability-title">${escapeHtml(cap.title)}</h3>
          <p class="capability-summary">${escapeHtml(cap.summary)}</p>
        </div>
      `;
    }).join('');
  }

  // 4. Render Professional Experience
  const experienceContainer = document.getElementById('experience-container');
  if (experienceContainer && PORTFOLIO_DATA.experience) {
    experienceContainer.innerHTML = PORTFOLIO_DATA.experience.map(exp => {
      const bulletsHtml = exp.highlights.map(h => `
        <li class="experience-bullet-item">
          <span class="bullet-indicator"></span>
          <span>${formatHighlight(h)}</span>
        </li>
      `).join('');

      return `
        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3 class="experience-role-title">${escapeHtml(exp.role)}</h3>
              <div class="experience-company-meta">
                <span class="company-name">${escapeHtml(exp.company)}</span>
                <span>•</span>
                <span>${escapeHtml(exp.location)}</span>
              </div>
            </div>
            <div class="experience-period">${escapeHtml(exp.period)}</div>
          </div>
          <ul class="experience-bullets">
            ${bulletsHtml}
          </ul>
        </div>
      `;
    }).join('');
  }

  // 5. Render DevOps Workflow
  const workflowContainer = document.getElementById('workflow-timeline-container');
  if (workflowContainer && PORTFOLIO_DATA.workflow) {
    workflowContainer.innerHTML = PORTFOLIO_DATA.workflow.map(st => {
      const toolTags = st.tools.map(t => `<span class="tool-tag">${escapeHtml(t)}</span>`).join('');
      return `
        <div class="workflow-step-card">
          <div>
            <div class="step-top">
              <span class="step-number">PHASE ${escapeHtml(st.step)}</span>
              <span class="step-arrow">→</span>
            </div>
            <h4 class="step-title">${escapeHtml(st.name)}</h4>
            <p class="step-desc">${escapeHtml(st.desc)}</p>
          </div>
          <div class="step-tools">
            ${toolTags}
          </div>
        </div>
      `;
    }).join('');
  }

  // 6. Render Certifications
  const certContainer = document.getElementById('cert-list-container');
  if (certContainer && PORTFOLIO_DATA.certifications) {
    certContainer.innerHTML = PORTFOLIO_DATA.certifications.map(c => `
      <div class="cert-card">
        <div class="cert-main">
          <span class="cert-badge">${escapeHtml(c.badge)}</span>
          <div>
            <div class="cert-title">${escapeHtml(c.title)}</div>
            <div class="cert-issuer">${escapeHtml(c.issuer)}</div>
          </div>
        </div>
        <div class="cert-type">${escapeHtml(c.type)}</div>
      </div>
    `).join('');
  }

  // 7. Render Career Focus
  const focusContainer = document.getElementById('focus-tags-container');
  if (focusContainer && PORTFOLIO_DATA.careerFocus) {
    focusContainer.innerHTML = PORTFOLIO_DATA.careerFocus.map(f => `
      <span class="focus-tag">${escapeHtml(f)}</span>
    `).join('');
  }

  // 8. Update Current Year in Footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   Helper Functions & Icons
   ========================================================================== */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatHighlight(text) {
  // Highlight important metrics and keywords concisely
  let safe = escapeHtml(text);
  safe = safe.replace(/(50\+\s*production\s*servers|50\+\s*servers)/gi, '<strong>$1</strong>');
  safe = safe.replace(/(AWS\s*CodePipeline|AWS\s*CodeBuild|Azure\s*DevOps\s*Pipelines|GitHub\s*Actions)/gi, '<strong>$1</strong>');
  safe = safe.replace(/(Terraform|Amazon\s*ECS|Kubernetes\/MicroK8s|Docker)/gi, '<strong>$1</strong>');
  safe = safe.replace(/(\$1,710|USD\s*1,710|~\$15,000|USD\s*15,000)/gi, '<strong>$1</strong>');
  safe = safe.replace(/(AWS\s*GovCloud|ISO\/IEC\s*27001|AWS\s*WAF)/gi, '<strong>$1</strong>');
  safe = safe.replace(/(mentored\s*3\s*junior\s*engineers\/interns|mentored\s*3\s*junior\s*interns\/team\s*members)/gi, '<strong>$1</strong>');
  return safe;
}

function getCategoryIcon(iconName) {
  const iconMap = {
    'cloud': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
    'git-merge': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M6 9v6"></path><path d="M9 18h3a3 3 0 0 0 3-3V9"></path></svg>`,
    'box': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    'terminal': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    'cpu': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    'activity': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    'shield': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    'database': `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`
  };
  return iconMap[iconName] || iconMap['terminal'];
}

/* ==========================================================================
   Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Close menu when clicking on link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  // Active section observer
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(item => {
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Clipboard Copy Helper with Toast
   ========================================================================== */
function initClipboard() {
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Copied to clipboard: ${textToCopy}`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${textToCopy}`);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/* ==========================================================================
   CV Modal & Print Handling
   ========================================================================== */
function initCVModal() {
  const openButtons = document.querySelectorAll('.trigger-cv-modal');
  const modal = document.getElementById('cv-modal');
  const closeBtn = document.getElementById('cv-modal-close');
  const printBtn = document.getElementById('cv-modal-print');

  if (openButtons.length && modal) {
    openButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }
}

/* ==========================================================================
   Keyboard Shortcuts
   ========================================================================== */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    // Escape key closes modal
    if (e.key === 'Escape') {
      const modal = document.getElementById('cv-modal');
      if (modal && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    // T key toggles theme when not focusing an input
    if ((e.key === 't' || e.key === 'T') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      setTheme(activeTheme === 'dark' ? 'light' : 'dark');
      showToast(`Switched to ${activeTheme === 'dark' ? 'Light' : 'Dark'} mode`);
    }
  });
}
