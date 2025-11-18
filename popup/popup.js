/**
 * Spy Systems Modern UI - Popup Script
 */

// Load saved settings
document.addEventListener('DOMContentLoaded', () => {
  loadSettings();
  setupEventListeners();
});

/**
 * Load settings from storage
 */
function loadSettings() {
  chrome.storage.sync.get(['modernUIEnabled', 'darkMode', 'theme'], (result) => {
    // Set toggle states
    document.getElementById('enableToggle').checked = result.modernUIEnabled !== false;
    document.getElementById('darkModeToggle').checked = result.darkMode === true;

    // Set active theme
    const theme = result.theme || 'indigo';
    setActiveTheme(theme);
  });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Enable/Disable Modern UI
  document.getElementById('enableToggle').addEventListener('change', (e) => {
    const isEnabled = e.target.checked;
    chrome.storage.sync.set({ modernUIEnabled: isEnabled }, () => {
      reloadCurrentTab();
      showNotification(isEnabled ? 'Modern UI aktiveret!' : 'Modern UI deaktiveret');
    });
  });

  // Dark Mode Toggle
  document.getElementById('darkModeToggle').addEventListener('change', (e) => {
    const isDarkMode = e.target.checked;
    chrome.storage.sync.set({ darkMode: isDarkMode }, () => {
      reloadCurrentTab();
      showNotification(isDarkMode ? 'Dark mode aktiveret!' : 'Light mode aktiveret');
    });
  });

  // Theme selection
  document.querySelectorAll('.theme-option').forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;
      setActiveTheme(theme);
      saveTheme(theme);
    });
  });

  // Refresh button
  document.getElementById('refreshBtn').addEventListener('click', () => {
    reloadCurrentTab();
    showNotification('Side genindlæst!');
  });
}

/**
 * Set active theme visually
 */
function setActiveTheme(theme) {
  document.querySelectorAll('.theme-option').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');
}

/**
 * Save theme to storage and apply
 */
function saveTheme(theme) {
  const themeColors = {
    indigo: '#4F46E5',
    blue: '#3B82F6',
    green: '#10B981',
    purple: '#8B5CF6'
  };

  chrome.storage.sync.set({ theme, primaryColor: themeColors[theme] }, () => {
    reloadCurrentTab();
    showNotification('Tema opdateret!');
  });
}

/**
 * Reload current tab
 */
function reloadCurrentTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.reload(tabs[0].id);
    }
  });
}

/**
 * Show notification
 */
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #10B981;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    animation: slideDown 0.3s ease;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideUp 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);
