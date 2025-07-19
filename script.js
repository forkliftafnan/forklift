// Global state
let currentLanguage = 'ar';
let currentSection = 'home';

// Translations
const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.fleet': 'أسطولنا',
    'nav.contact': 'تواصل معنا',
    'nav.quote': 'اطلب عرض سعر',
    
    // Hero Section
    'hero.title': 'رافعات الرياض: شريككم الأمثل لتأجير المعدات الثقيلة والخدمات اللوجستية',
    'hero.subtitle': 'حلول رفع وتأجير موثوقة لمشاريعكم',
    'hero.description': 'نقدم خدمات تأجير المعدات الثقيلة والرافعات بجودة عالية وأسعار تنافسية في الرياض والمناطق المجاورة، مع فريق مدرب ومتخصص',
    'hero.cta': 'اطلب عرض سعر الآن',
    
    // Why Choose Us
    'why.title': 'لماذا تختارنا؟',
    'why.experience': 'خبرة واسعة',
    'why.experience.desc': 'سنوات من الخبرة في مجال المقاولات والمعدات الثقيلة',
    'why.quality': 'جودة عالية',
    'why.quality.desc': 'معدات حديثة ومتطورة مع صيانة دورية منتظمة',
    'why.service': 'خدمة متميزة',
    'why.service.desc': 'فريق عمل محترف ومدرب على أعلى مستوى',
    'why.pricing': 'أسعار تنافسية',
    'why.pricing.desc': 'عروض مرنة تناسب جميع أحجام المشاريع',
    
    // Services
    'services.title': 'خدماتنا',
    'services.equipment': 'تأجير المعدات الثقيلة',
    'services.equipment.desc': 'رافعات شوكية وتلسكوبية وكرينات بأحجام مختلفة',
    'services.rental': 'خطط تأجير مرنة',
    'services.rental.desc': 'إيجار يومي، أسبوعي، شهري، وسنوي',
    'services.loading': 'خدمات التحميل والتنزيل',
    'services.loading.desc': 'نقل آمن وكفء للبضائع والمعدات',
    'services.warehouse': 'حلول تنظيم المستودعات',
    'services.warehouse.desc': 'تحسين كفاءة التخزين بمعدات متخصصة',
    
    // Fleet
    'fleet.title': 'أسطولنا',
    'fleet.forklift': 'الرافعات الشوكية',
    'fleet.forklift.desc': 'أنواع وأحجام مختلفة لجميع احتياجاتكم',
    'fleet.telehandler': 'الرافعات التلسكوبية',
    'fleet.telehandler.desc': 'قدرات رفع ووصول متنوعة',
    'fleet.crane': 'الكرينات',
    'fleet.crane.desc': 'أوزان وأحجام مختلفة للمشاريع الكبيرة',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.info': 'معلومات التواصل',
    'contact.address': 'الرياض، المملكة العربية السعودية',
    'contact.phone': 'هاتف',
    'contact.whatsapp': 'واتساب',
    'contact.form': 'نموذج التواصل',
    'contact.name': 'الاسم',
    'contact.mobile': 'رقم الجوال',
    'contact.email': 'البريد الإلكتروني',
    'contact.details': 'تفاصيل الطلب',
    'contact.send': 'إرسال الطلب',
    
    // Footer
    'footer.company': 'مؤسسة افنان سلطان سعد العوجان للمقاولات العامة',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.services.title': 'خدماتنا',
    'footer.contact.title': 'تواصل معنا',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Our Services',
    'nav.fleet': 'Our Fleet',
    'nav.contact': 'Contact Us',
    'nav.quote': 'Get Quote',
    
    // Hero Section
    'hero.title': 'Riyadh Cranes: Your Premier Partner for Heavy Equipment Rental and Logistics Services',
    'hero.subtitle': 'Reliable lifting and rental solutions for your projects',
    'hero.description': 'We provide high-quality heavy equipment and crane rental services at competitive prices in Riyadh and surrounding areas, with a trained and specialized team',
    'hero.cta': 'Get Quote Now',
    
    // Why Choose Us
    'why.title': 'Why Choose Us?',
    'why.experience': 'Extensive Experience',
    'why.experience.desc': 'Years of experience in contracting and heavy equipment',
    'why.quality': 'High Quality',
    'why.quality.desc': 'Modern and advanced equipment with regular maintenance',
    'why.service': 'Excellent Service',
    'why.service.desc': 'Professional team trained to the highest standards',
    'why.pricing': 'Competitive Pricing',
    'why.pricing.desc': 'Flexible offers suitable for all project sizes',
    
    // Services
    'services.title': 'Our Services',
    'services.equipment': 'Heavy Equipment Rental',
    'services.equipment.desc': 'Forklifts, telehandlers, and cranes in various sizes',
    'services.rental': 'Flexible Rental Plans',
    'services.rental.desc': 'Daily, weekly, monthly, and yearly rentals',
    'services.loading': 'Loading and Unloading Services',
    'services.loading.desc': 'Safe and efficient transport of goods and equipment',
    'services.warehouse': 'Warehouse Organization Solutions',
    'services.warehouse.desc': 'Improving storage efficiency with specialized equipment',
    
    // Fleet
    'fleet.title': 'Our Fleet',
    'fleet.forklift': 'Forklifts',
    'fleet.forklift.desc': 'Various types and sizes for all your needs',
    'fleet.telehandler': 'Telehandlers',
    'fleet.telehandler.desc': 'Various lifting capacities and reach',
    'fleet.crane': 'Cranes',
    'fleet.crane.desc': 'Different weights and sizes for large projects',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.info': 'Contact Information',
    'contact.address': 'Riyadh, Kingdom of Saudi Arabia',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.form': 'Contact Form',
    'contact.name': 'Name',
    'contact.mobile': 'Mobile Number',
    'contact.email': 'Email',
    'contact.details': 'Request Details',
    'contact.send': 'Send Request',
    
    // Footer
    'footer.company': 'Afnan Sultan Saad Al-Aujan General Contracting Foundation',
    'footer.rights': 'All Rights Reserved',
    'footer.services.title': 'Services',
    'footer.contact.title': 'Contact',
  },
};

// Translation function
function t(key) {
  return translations[currentLanguage][key] || key;
}

// Language switching
function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  updateLanguage();
}

function updateLanguage() {
  // Update HTML attributes
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = currentLanguage;
  
  // Update language toggle buttons
  const languageText = document.querySelector('.language-text');
  if (languageText) {
    languageText.textContent = currentLanguage === 'ar' ? 'EN' : 'ع';
  }
  
  // Update all elements with data attributes
  const elementsWithData = document.querySelectorAll('[data-ar], [data-en]');
  elementsWithData.forEach(element => {
    const text = element.getAttribute(`data-${currentLanguage}`);
    if (text) {
      element.textContent = text;
    }
  });
  
  // Update mobile language toggle
  const mobileLangToggle = document.querySelector('#mobile-language-toggle span');
  if (mobileLangToggle) {
    mobileLangToggle.textContent = currentLanguage === 'ar' ? 'English' : 'العربية';
  }
}

// Navigation
function navigateToSection(sectionId) {
  currentSection = sectionId;
  
  // Update active navigation items
  updateActiveNavigation();
  
  // Scroll to section
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  }
  
  // Close mobile menu if open
  closeMobileMenu();
}

function updateActiveNavigation() {
  // Update desktop navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const section = item.getAttribute('data-section');
    if (section === currentSection) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  
  // Update mobile navigation
  const mobileNavItems = document.querySelectorAll('.nav-item-mobile');
  mobileNavItems.forEach(item => {
    const section = item.getAttribute('data-section');
    if (section === currentSection) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  
  if (mobileMenu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  
  mobileMenu.classList.add('active');
  menuToggle.innerHTML = '<i data-lucide="x"></i>';
  lucide.createIcons();
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  
  mobileMenu.classList.remove('active');
  menuToggle.innerHTML = '<i data-lucide="menu"></i>';
  lucide.createIcons();
}

// Contact functions
function handleCall() {
  window.location.href = 'tel:0508152107';
}

function handleWhatsApp() {
  const message = encodeURIComponent('مرحباً، أريد الاستفسار عن خدمات تأجير المعدات الثقيلة');
  window.open(`https://wa.me/966541850468?text=${message}`, '_blank');
}

// Fleet tabs
function switchFleetCategory(category) {
  // Update active tab
  const tabs = document.querySelectorAll('.fleet-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-category') === category) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  // Update active content
  const categories = document.querySelectorAll('.fleet-category');
  categories.forEach(cat => {
    if (cat.getAttribute('data-category') === category) {
      cat.classList.add('active');
    } else {
      cat.classList.remove('active');
    }
  });
}

// Contact form
function handleContactForm(event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('.form-submit');
  const successDiv = document.getElementById('form-success');

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.classList.add('loading');

  // Simulate form submission
  setTimeout(() => {
    // Hide loading state
    submitBtn.disabled = false;
    submitBtn.classList.remove('loading');

    // Show success message
    form.classList.add('hidden');
    successDiv.classList.add('show');

    // Reset form after 3 seconds
    setTimeout(() => {
      form.classList.remove('hidden');
      successDiv.classList.remove('show');
      form.reset();
    }, 3000);
  }, 1500);
}

// Scroll handling
function handleScroll() {
  const sections = ['home', 'services', 'fleet', 'contact'];
  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    const element = document.getElementById(section);

    if (element && scrollPosition >= element.offsetTop) {
      if (currentSection !== section) {
        currentSection = section;
        updateActiveNavigation();
      }
      break;
    }
  }

  // Special case for home section
  if (window.scrollY < 200) {
    if (currentSection !== 'home') {
      currentSection = 'home';
      updateActiveNavigation();
    }
  }
}

// Initialize the application
function initializeApp() {
  // Initialize Lucide icons
  lucide.createIcons();

  // Set up event listeners
  setupEventListeners();

  // Initialize language
  updateLanguage();

  // Initialize navigation
  updateActiveNavigation();
}

function setupEventListeners() {
  // Language toggle buttons
  const languageToggle = document.getElementById('language-toggle');
  const mobileLangToggle = document.getElementById('mobile-language-toggle');

  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);
  }

  if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', toggleLanguage);
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Navigation items
  const navItems = document.querySelectorAll('.nav-item, .nav-item-mobile');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const section = item.getAttribute('data-section');
      if (section) {
        navigateToSection(section);
      }
    });
  });

  // CTA buttons
  const ctaButtons = document.querySelectorAll('[data-section="contact"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      navigateToSection('contact');
    });
  });

  // Fleet tabs
  const fleetTabs = document.querySelectorAll('.fleet-tab');
  fleetTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');
      if (category) {
        switchFleetCategory(category);
      }
    });
  });

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }

  // Footer navigation links
  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('data-section');
      if (section) {
        navigateToSection(section);
      }
    });
  });

  // Scroll event
  window.addEventListener('scroll', handleScroll);

  // Resize event to handle mobile menu
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu();
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Expose global functions for inline event handlers
window.handleCall = handleCall;
window.handleWhatsApp = handleWhatsApp;


