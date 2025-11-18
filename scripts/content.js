/**
 * Spy Systems Modern UI - Content Script
 * Injicerer moderne styling og forbedringer
 */

(function() {
  'use strict';

  console.log('🎨 Spy Systems Modern UI aktiveret!');

  // Check om vi skal aktivere moderne UI
  chrome.storage.sync.get(['modernUIEnabled', 'darkMode'], function(result) {
    const isEnabled = result.modernUIEnabled !== false; // Default: enabled
    const darkMode = result.darkMode === true; // Default: disabled

    if (!isEnabled) {
      console.log('Spy Systems Modern UI er deaktiveret');
      return;
    }

    // Tilføj dark mode class hvis aktiveret
    if (darkMode) {
      document.documentElement.classList.add('spy-systems-dark-mode');
    }

    // Tilføj moderne UI indicator
    addModernUIIndicator();

    // Observer DOM changes for dynamisk content
    observeDOMChanges();

    // Forbedre formularer
    enhanceForms();

    // Tilføj keyboard shortcuts
    addKeyboardShortcuts();
  });

  /**
   * Tilføj visuelt indicator for at moderne UI er aktivt
   */
  function addModernUIIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'spy-systems-modern-ui-indicator';
    indicator.innerHTML = '✨ Modern UI Aktiv';
    indicator.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4F46E5, #7C3AED);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 999999;
      opacity: 0;
      transition: opacity 0.3s ease;
      cursor: pointer;
    `;

    document.body.appendChild(indicator);

    // Fade in
    setTimeout(() => {
      indicator.style.opacity = '1';
    }, 100);

    // Fade out efter 3 sekunder
    setTimeout(() => {
      indicator.style.opacity = '0';
      setTimeout(() => {
        indicator.remove();
      }, 300);
    }, 3000);

    // Click for at toggle
    indicator.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: 'openPopup' });
    });
  }

  /**
   * Observer DOM changes for at style dynamisk content
   */
  function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              enhanceElement(node);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Forbedre specifikt element
   */
  function enhanceElement(element) {
    // Tilføj moderne classes til gamle elementer
    if (element.tagName === 'TABLE' && !element.classList.contains('modern-enhanced')) {
      element.classList.add('modern-enhanced');
      enhanceTable(element);
    }

    if (element.tagName === 'FORM' && !element.classList.contains('modern-enhanced')) {
      element.classList.add('modern-enhanced');
      enhanceForm(element);
    }
  }

  /**
   * Forbedre table med moderne features
   */
  function enhanceTable(table) {
    // Tilføj sorterings-funktionalitet til headers
    const headers = table.querySelectorAll('th');
    headers.forEach((header, index) => {
      if (!header.querySelector('.sort-indicator')) {
        header.style.cursor = 'pointer';
        header.style.userSelect = 'none';

        const sortIndicator = document.createElement('span');
        sortIndicator.className = 'sort-indicator';
        sortIndicator.innerHTML = ' ⇅';
        sortIndicator.style.opacity = '0.3';
        header.appendChild(sortIndicator);

        header.addEventListener('click', () => {
          sortTable(table, index);
        });
      }
    });

    // Tilføj hover effect til rækker
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      row.style.transition = 'background-color 0.15s ease';
    });
  }

  /**
   * Sorter table kolonne
   */
  function sortTable(table, columnIndex) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Tjek nuværende sorteringsretning
    const currentDirection = table.dataset.sortDirection || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';

    rows.sort((a, b) => {
      const aValue = a.cells[columnIndex]?.textContent.trim() || '';
      const bValue = b.cells[columnIndex]?.textContent.trim() || '';

      // Prøv numerisk sammenligning først
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return newDirection === 'asc' ? aNum - bNum : bNum - aNum;
      }

      // Ellers string sammenligning
      return newDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });

    // Opdater DOM
    rows.forEach(row => tbody.appendChild(row));

    // Opdater sort indicators
    table.querySelectorAll('.sort-indicator').forEach(indicator => {
      indicator.innerHTML = ' ⇅';
      indicator.style.opacity = '0.3';
    });

    const activeIndicator = table.querySelectorAll('th')[columnIndex].querySelector('.sort-indicator');
    activeIndicator.innerHTML = newDirection === 'asc' ? ' ↑' : ' ↓';
    activeIndicator.style.opacity = '1';

    table.dataset.sortDirection = newDirection;
  }

  /**
   * Forbedre form
   */
  function enhanceForm(form) {
    // Tilføj floating labels
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');

    inputs.forEach(input => {
      if (!input.placeholder && input.labels && input.labels.length > 0) {
        input.placeholder = input.labels[0].textContent;
      }
    });
  }

  /**
   * Forbedre alle formularer på siden
   */
  function enhanceForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => enhanceForm(form));
  }

  /**
   * Tilføj keyboard shortcuts
   */
  function addKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K for at søge
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        focusSearchInput();
      }

      // Escape for at lukke modals
      if (e.key === 'Escape') {
        closeModals();
      }
    });
  }

  /**
   * Focus første søgefelt
   */
  function focusSearchInput() {
    const searchInput = document.querySelector('input[type="search"], input[name*="search"], input[placeholder*="søg"], input[placeholder*="search"]');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }

  /**
   * Luk åbne modals
   */
  function closeModals() {
    const modals = document.querySelectorAll('.modal, .dialog, [class*="modal"], [class*="dialog"]');
    modals.forEach(modal => {
      if (modal.style.display !== 'none') {
        const closeButton = modal.querySelector('[class*="close"], .close, button[aria-label="Close"]');
        if (closeButton) {
          closeButton.click();
        }
      }
    });
  }

  // Tilføj custom styling for specifikke elementer
  function addCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* Smooth transitions for alt */
      * {
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
      }

      /* Forbedre form labels */
      label {
        font-weight: 500 !important;
        color: var(--text-secondary) !important;
        font-size: 0.875rem !important;
        margin-bottom: 6px !important;
        display: block !important;
      }

      /* Focus states */
      *:focus-visible {
        outline: 2px solid var(--primary-color) !important;
        outline-offset: 2px !important;
      }
    `;
    document.head.appendChild(style);
  }

  // Kør når DOM er ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addCustomStyles);
  } else {
    addCustomStyles();
  }

})();
